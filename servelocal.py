from http.server import HTTPServer, SimpleHTTPRequestHandler

HOST = "localhost"
PORT = 8000

server = HTTPServer((HOST, PORT), SimpleHTTPRequestHandler)
print(f"Serving at http://{HOST}:{PORT}")

try:
    server.serve_forever()
except KeyboardInterrupt:
    print("\nShutting down server...")
    server.server_close()