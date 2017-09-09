# Simple HTTPS server
# Take from https://gist.github.com/dergachev/7028596
# Based on http://www.piware.de/2011/01/creating-an-https-server-in-python/
# Generate a server.pem file in this folder by running:
#    openssl req -new -x509 -keyout server.pem -out server.pem -days 365 -nodes
# Run as follows (may need to use python2 executable):
#    python simple-https-server.py
# Then in your browser, visit:
#    https://localhost:4443

import BaseHTTPServer, SimpleHTTPServer
import ssl

httpd = BaseHTTPServer.HTTPServer(('localhost', 4443), SimpleHTTPServer.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket (httpd.socket, certfile='./server.pem', server_side=True)
print 'Https server running on port 4443. Browse to https://localhost:4443'
httpd.serve_forever()
