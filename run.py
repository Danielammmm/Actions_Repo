from http.server import HTTPServer, BaseHTTPRequestHandler
from app.routes import handle_request

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        handle_request(self)

def run(server_class=HTTPServer, handler_class=SimpleHTTPRequestHandler):
    server_address = ('', 5000)
    httpd = server_class(server_address, handler_class)
    print("Server running on port 5000...")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
