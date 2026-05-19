<?php
define('SECRET', '%%DEPLOY_SECRET%%');

if (
    empty($_SERVER['HTTP_X_DEPLOY_SECRET']) ||
    !hash_equals(SECRET, $_SERVER['HTTP_X_DEPLOY_SECRET'])
) {
    http_response_code(403);
    exit('Forbidden');
}

set_time_limit(180);
ini_set('memory_limit', '256M');

$payload = file_get_contents('php://input');
if (strlen($payload) < 100) {
    http_response_code(400);
    exit('Empty payload');
}

$tmp = sys_get_temp_dir() . '/deploy_' . uniqid() . '.zip';
if (file_put_contents($tmp, $payload) === false) {
    http_response_code(500);
    exit('Write failed');
}

$zip = new ZipArchive();
if ($zip->open($tmp) !== true) {
    unlink($tmp);
    http_response_code(500);
    exit('ZIP open failed');
}

$zip->extractTo(__DIR__);
$zip->close();
unlink($tmp);

@chmod(__DIR__, 0755);

header('Content-Type: text/plain');
echo 'Deployed at ' . gmdate('Y-m-d H:i:s') . ' UTC';
