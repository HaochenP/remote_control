import http.server
import socketserver
import pyautogui

import control_keyboard
from control_keyboard import *

PORT = 8000



def handle_data(text):
    s = text.replace('{"data":', '').replace('}', '').replace('"', '')
    print(s)
    if s == 'new youtube page':
        control_keyboard.open_youtube()
    elif s == "up":
        control_keyboard.mouse_up()
    elif s == "down":
        control_keyboard.mouse_down()
    elif s == "left":
        control_keyboard.mouse_left()
    elif s == "right":
        control_keyboard.mouse_right()
    elif s == "click":
        control_keyboard.mouse_click()
    elif s == "enter":
        control_keyboard.press_enter()
    else:
        control_keyboard.type(s)


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