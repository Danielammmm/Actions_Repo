from app.services import get_repo_stats
import json
import os

def handle_request(handler):
    if handler.path == '/':
        # Sirve la página principal
        serve_file(handler, 'templates/index.html', content_type='text/html')
    elif handler.path == '/static/styles.css':
        serve_file(handler, 'static/styles.css', content_type='text/css')
    elif handler.path == '/static/script.js':
        serve_file(handler, 'static/script.js', content_type='application/javascript')
    elif handler.path == '/api/stats':
        # Responde con las estadísticas en JSON
        stats = get_repo_stats()
        handler.send_response(200)
        handler.send_header("Content-Type", "application/json")
        handler.end_headers()
        handler.wfile.write(json.dumps(stats).encode())
    else:
        handler.send_response(404)
        handler.end_headers()
        handler.wfile.write(b"404 Not Found")

def serve_file(handler, filepath, content_type):
    try:
        with open(filepath, 'rb') as file:
            handler.send_response(200)
            handler.send_header("Content-Type", content_type)
            handler.end_headers()
            handler.wfile.write(file.read())
    except FileNotFoundError:
        handler.send_response(404)
        handler.end_headers()
        handler.wfile.write(b"404 Not Found")
