<?php
ob_start(); // capture any stray PHP warnings before headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://pmax.online');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    ob_end_clean();
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Read form-encoded POST data ($_POST) — avoids ModSecurity JSON rules
$body = $_POST;

if (empty($body)) {
    ob_end_clean();
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid request', 'debug' => 'empty POST']);
    exit;
}

/* ── Silent drop ── */
function silent_drop() {
    ob_end_clean();
    echo json_encode(['ok' => true]);
    exit;
}

/* 1. Honeypot */
if (!empty($body['website'])) silent_drop();

/* 2. Time-gate */
$loaded_at = isset($body['_t']) ? (int)$body['_t'] : 0;
$elapsed   = (int)(microtime(true) * 1000) - $loaded_at;
if (!$loaded_at || $elapsed < 3000 || $elapsed > 7200000) {
    ob_end_clean();
    // Temporarily return debug info instead of silent drop so we can diagnose
    echo json_encode(['ok' => false, 'error' => 'time-gate', 'debug' => ['_t' => $body['_t'] ?? 'missing', 'elapsed_ms' => $elapsed]]);
    exit;
}

/* 3. Rate limit */
$ip        = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rate_file = sys_get_temp_dir() . '/pmax_rate_' . md5($ip);
$window    = 900;
$max       = 3;
$rate = ['count' => 0, 'reset' => time() + $window];
if (file_exists($rate_file)) {
    $stored = json_decode(file_get_contents($rate_file), true);
    if ($stored && $stored['reset'] > time()) $rate = $stored;
}
if ($rate['count'] >= $max) {
    ob_end_clean();
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Too many requests']);
    exit;
}
$rate['count']++;
file_put_contents($rate_file, json_encode($rate), LOCK_EX);

/* 4. Required fields */
$name    = trim($body['name']    ?? '');
$company = trim($body['company'] ?? '');
$email   = trim($body['email']   ?? '');
$message = trim($body['message'] ?? '');
$phone   = trim($body['phone']   ?? '');
$topic   = trim($body['topic']   ?? '');

if (!$name || !$company || !$email || !$message) {
    ob_end_clean();
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields', 'debug' => ['name' => (bool)$name, 'company' => (bool)$company, 'email' => (bool)$email, 'message' => (bool)$message]]);
    exit;
}

/* 5. Email format */
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    ob_end_clean();
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid email']);
    exit;
}

/* 6. URL density */
$url_count = preg_match_all('/https?:\/\/|www\./i', $message . $name);
if ($url_count > 2) silent_drop();

/* ── Send ── */
$to      = 'hello@pmax.online';
$subject = 'New enquiry from ' . $company;
$body_text = "Name:    $name\nCompany: $company\nEmail:   $email\nPhone:   " . ($phone ?: '-') . "\nTopic:   " . ($topic ?: '-') . "\n\n$message";
$headers   = 'From: hello@pmax.online' . "\r\n" . 'Reply-To: ' . $email . "\r\n" . 'Content-Type: text/plain; charset=UTF-8';

$stray = ob_get_clean(); // grab any PHP warnings before sending
$sent  = mail($to, $subject, $body_text, $headers, '-f hello@pmax.online');

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    error_log('[pmax contact] mail() failed stray_output=' . $stray);
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'mail() failed', 'debug' => ['stray_output' => $stray]]);
}
