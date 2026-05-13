<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://pmax.online');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$raw  = file_get_contents('php://input');
$body = json_decode($raw, true);

if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid request']);
    exit;
}

/* ── Silent drop — return 200 so bots think they succeeded ── */
function silent_drop() {
    echo json_encode(['ok' => true]);
    exit;
}

/* 1. Honeypot */
if (!empty($body['website'])) silent_drop();

/* 2. Time-gate: real users take > 3 s; reject tokens older than 2 h */
$loaded_at = isset($body['_t']) ? (int)$body['_t'] : 0;
$elapsed   = (int)(microtime(true) * 1000) - $loaded_at;
if (!$loaded_at || $elapsed < 3000 || $elapsed > 7200000) silent_drop();

/* 3. Rate limit: 3 submissions per IP per 15 minutes (file-based) */
$ip        = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rate_file = sys_get_temp_dir() . '/pmax_rate_' . md5($ip);
$window    = 900; // 15 minutes in seconds
$max       = 3;

$rate = ['count' => 0, 'reset' => time() + $window];
if (file_exists($rate_file)) {
    $stored = json_decode(file_get_contents($rate_file), true);
    if ($stored && $stored['reset'] > time()) $rate = $stored;
}
if ($rate['count'] >= $max) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Too many requests — please try again later.']);
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
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
    exit;
}

/* 5. Email format */
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid email address']);
    exit;
}

/* 6. URL density — > 2 links in name + message is a spam signal */
$url_count = preg_match_all('/https?:\/\/|www\./i', $message . $name);
if ($url_count > 2) silent_drop();

/* ── Send email ── */
$to      = 'hello@pmax.online';
$subject = '=?UTF-8?B?' . base64_encode('New enquiry from ' . $company) . '?=';
$body_text =
    "Name:    $name\n" .
    "Company: $company\n" .
    "Email:   $email\n" .
    "Phone:   " . ($phone ?: '—') . "\n" .
    "Topic:   " . ($topic ?: '—') . "\n\n" .
    $message;

$headers = implode("\r\n", [
    'From: pmax website <hello@pmax.online>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
]);

$sent = mail($to, $subject, $body_text, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Failed to send — please email us directly.']);
}
