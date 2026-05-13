<?php
// TEMPORARY DIAGNOSTIC — delete after debugging
header('Content-Type: application/json');

$result = [
    'php_version'    => phpversion(),
    'mail_exists'    => function_exists('mail'),
    'sendmail_path'  => ini_get('sendmail_path'),
    'smtp'           => ini_get('SMTP'),
    'smtp_port'      => ini_get('smtp_port'),
    'disable_funcs'  => ini_get('disable_functions'),
    'open_basedir'   => ini_get('open_basedir'),
    'server_name'    => $_SERVER['SERVER_NAME'] ?? 'unknown',
];

// Attempt a real test send
if (function_exists('mail')) {
    $sent = mail(
        'hello@pmax.online',
        'pmax mail() test',
        "This is a test from mail-test.php\n\nServer: " . ($_SERVER['SERVER_NAME'] ?? 'unknown'),
        'From: hello@pmax.online' . "\r\n" . 'Content-Type: text/plain; charset=UTF-8',
        '-f hello@pmax.online'
    );
    $result['test_send'] = $sent ? 'SUCCESS' : 'FAILED';
    if (!$sent) {
        $result['last_error'] = error_get_last();
    }
} else {
    $result['test_send'] = 'SKIPPED — mail() not available';
}

echo json_encode($result, JSON_PRETTY_PRINT);
