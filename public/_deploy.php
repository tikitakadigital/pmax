<?php
define('SECRET', '%%DEPLOY_SECRET%%');
define('ZIP_PATH', '/home1/pmax/deploy_pending.zip');

if (
    empty($_SERVER['HTTP_X_DEPLOY_SECRET']) ||
    !hash_equals(SECRET, $_SERVER['HTTP_X_DEPLOY_SECRET'])
) {
    http_response_code(403);
    exit('Forbidden');
}

set_time_limit(180);
ini_set('memory_limit', '256M');

if (!file_exists(ZIP_PATH)) {
    http_response_code(404);
    exit('No pending deploy found at ' . ZIP_PATH);
}

$zip = new ZipArchive();
if ($zip->open(ZIP_PATH) !== true) {
    unlink(ZIP_PATH);
    http_response_code(500);
    exit('ZIP open failed');
}

$zip->extractTo(__DIR__);
$zip->close();
unlink(ZIP_PATH);

@chmod(__DIR__, 0755);

header('Content-Type: text/plain');
echo 'Deployed at ' . gmdate('Y-m-d H:i:s') . ' UTC';
