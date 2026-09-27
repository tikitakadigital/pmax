<?php
/**
 * Markdown content negotiation for pmax.online.
 *
 * THE RULE, and it is not negotiable: Markdown is served only when the request
 * explicitly prefers it — the Accept header gives text/markdown a higher
 * quality than text/html (at equal quality the type listed first wins), or the
 * request is for the .md twin URL. NEVER decide by user agent. Serving a bot a
 * different document than a human is cloaking, and search engines treat it as
 * such. A request with Accept: * / * or a browser Accept gets HTML.
 *
 * The HTML page and its Markdown twin carry the same content. The twin is
 * generated at build time from the page's own rendered HTML
 * (scripts/generate-markdown.mjs), so the two cannot drift apart.
 *
 * Routed here from .htaccess for two kinds of request:
 *   1. /some/page.md            → the twin, always Markdown
 *   2. /some/page/ with Accept containing text/markdown → decided below
 */

declare(strict_types=1);

const ORIGIN = 'https://pmax.online';

/**
 * Parses an Accept header into [type => [q, position]].
 * Position preserves the order the client listed the types in, which decides
 * ties: at equal q, the type listed first wins.
 */
function parse_accept(string $header): array
{
    $out = [];
    $position = 0;
    foreach (explode(',', $header) as $part) {
        $segments = explode(';', $part);
        $type = strtolower(trim(array_shift($segments)));
        if ($type === '') {
            continue;
        }
        $q = 1.0;
        foreach ($segments as $segment) {
            $segment = trim($segment);
            if (stripos($segment, 'q=') === 0) {
                $q = (float) substr($segment, 2);
            }
        }
        // A type repeated in one header keeps its first (highest-priority) entry.
        if (!isset($out[$type])) {
            $out[$type] = ['q' => $q, 'pos' => $position++];
        }
    }
    return $out;
}

/**
 * True only when the client prefers Markdown over HTML.
 * Wildcards (* / *) express no preference for Markdown, so they mean HTML.
 */
function prefers_markdown(string $header): bool
{
    $types = parse_accept($header);
    $md = $types['text/markdown'] ?? null;
    if ($md === null || $md['q'] <= 0) {
        return false;
    }
    $html = $types['text/html'] ?? null;
    if ($html === null || $html['q'] <= 0) {
        return true;
    }
    if ($md['q'] > $html['q']) {
        return true;
    }
    if ($md['q'] < $html['q']) {
        return false;
    }
    return $md['pos'] < $html['pos'];
}

/** The page URL a twin belongs to: /blog/post.md → /blog/post/, /index.md → / */
function page_path_for_twin(string $twinPath): string
{
    $base = substr($twinPath, 0, -3);
    if ($base === '/index') {
        return '/';
    }
    return rtrim($base, '/') . '/';
}

/** The twin path for a page URL: /blog/post/ → /blog/post.md, / → /index.md */
function twin_path_for_page(string $pagePath): string
{
    $trimmed = trim($pagePath, '/');
    return $trimmed === '' ? '/index.md' : '/' . $trimmed . '.md';
}

function send_markdown(string $file, string $pagePath, string $twinPath, bool $isTwinUrl): void
{
    header('Content-Type: text/markdown; charset=utf-8');
    header('Vary: Accept');
    header('Link: <' . ORIGIN . $pagePath . '>; rel="canonical"');
    header('Content-Location: ' . ORIGIN . $twinPath);
    if ($isTwinUrl) {
        // Its own URL, so a shared cache can hold it without affecting the page.
        header('Cache-Control: public, max-age=3600, stale-while-revalidate=86400');
    } else {
        // Same URL as the HTML page. Cloudflare does not key its cache on Vary,
        // so a cacheable Markdown response here could later be served to a
        // browser. Keep negotiated responses out of shared caches.
        header('Cache-Control: private, no-store');
    }
    header('Content-Length: ' . (string) filesize($file));
    readfile($file);
}

function send_html(string $file, string $pagePath, string $twinPath, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: text/html; charset=utf-8');
    header('Vary: Accept');
    header('Link: <' . ORIGIN . $twinPath . '>; rel="alternate"; type="text/markdown"');
    header('Cache-Control: private, no-store');
    header('Content-Length: ' . (string) filesize($file));
    readfile($file);
}

function main(): void
{
    $root = rtrim($_SERVER['DOCUMENT_ROOT'] ?? __DIR__, '/');
    $requestPath = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
    $requestPath = '/' . ltrim(rawurldecode($requestPath), '/');

    // No traversal, no absolute paths, nothing outside the document root.
    if (strpos($requestPath, '..') !== false || strpos($requestPath, "\0") !== false) {
        http_response_code(400);
        header('Content-Type: text/plain; charset=utf-8');
        echo "Bad request\n";
        return;
    }

    $isTwinUrl = substr($requestPath, -3) === '.md';
    $pagePath = $isTwinUrl ? page_path_for_twin($requestPath) : rtrim($requestPath, '/') . '/';
    $twinPath = $isTwinUrl ? $requestPath : twin_path_for_page($requestPath);

    $twinFile = $root . $twinPath;
    $htmlFile = $root . $pagePath . 'index.html';

    if ($isTwinUrl) {
        if (is_file($twinFile)) {
            send_markdown($twinFile, $pagePath, $twinPath, true);
            return;
        }
        http_response_code(404);
        header('Content-Type: text/plain; charset=utf-8');
        header('Vary: Accept');
        echo "Not found\n";
        return;
    }

    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';
    if (prefers_markdown($accept) && is_file($twinFile)) {
        send_markdown($twinFile, $pagePath, $twinPath, false);
        return;
    }

    if (is_file($htmlFile)) {
        send_html($htmlFile, $pagePath, $twinPath);
        return;
    }

    $notFound = $root . '/404.html';
    if (is_file($notFound)) {
        send_html($notFound, $pagePath, $twinPath, 404);
        return;
    }

    http_response_code(404);
    header('Content-Type: text/plain; charset=utf-8');
    echo "Not found\n";
}

// Included by the CI check (scripts/check-markdown.mjs) to test the Accept rule
// without serving anything.
if (PHP_SAPI !== 'cli') {
    main();
}
