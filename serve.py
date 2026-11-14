#!/usr/bin/env python3
"""
Clean-URL Static Server for Next.js Export
Serves files from out/ directory with automatic clean URL mapping:
- /about -> out/about/index.html or out/about.html
- /survey -> out/survey/index.html or out/survey.html
- /contact -> out/contact/index.html or out/contact.html
"""
import http.server
import socketserver
import os
import sys
import mimetypes

PORT = 3000
DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'out')

mimetypes.add_type('application/manifest+json', '.webmanifest')
mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def translate_path(self, path):
        # Base translated path in out/
        translated = super().translate_path(path)
        
        # If the file exists directly, return it
        if os.path.exists(translated) and not os.path.isdir(translated):
            return translated

        # If it's a directory with index.html, return index.html
        if os.path.isdir(translated):
            idx = os.path.join(translated, 'index.html')
            if os.path.exists(idx):
                return idx

        # Try appending .html (clean URL /about -> out/about.html)
        if not path.endswith('/'):
            html_candidate = translated + '.html'
            if os.path.exists(html_candidate):
                return html_candidate

            # Try directory/index.html (clean URL /about -> out/about/index.html)
            dir_candidate = os.path.join(translated, 'index.html')
            if os.path.exists(dir_candidate):
                return dir_candidate

        # 404 fallback if available
        fallback_404 = os.path.join(DIRECTORY, '404.html')
        if os.path.exists(fallback_404):
            return fallback_404

        return translated

    def end_headers(self):
        # Enable CORS and disable aggressive caching for local preview
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, must-revalidate')
        super().end_headers()

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    with socketserver.TCPServer(("", port), CleanURLHandler) as httpd:
        print(f"Serving static export from '{DIRECTORY}' at http://localhost:{port}")
        httpd.serve_forever()
