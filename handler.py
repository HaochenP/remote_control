import http.server
import socketserver

PORT = 8000

def handle_data(text):
    s = text.replace('{"data":', '').replace('}', '').replace('"', '')
    print(s)


class RequestHandler(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
        # Read the request body
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)

        # Print out the request body
        handle_data(body.decode('utf-8'))

        # Send a response
        self.wfile.write(b'Received POST request')

# Set up the server
with socketserver.TCPServer(("", PORT), RequestHandler) as httpd:
    print("Listening on port {}...".format(PORT))
    httpd.serve_forever()