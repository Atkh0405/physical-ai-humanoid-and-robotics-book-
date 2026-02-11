#!/usr/bin/env python3
"""
Simple HTTP Server for Physical AI & Humanoid Robotics Textbook
Run this script to view the textbook in your browser
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    Handler = MyHTTPRequestHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=" * 60)
        print("Physical AI & Humanoid Robotics Textbook Server")
        print("=" * 60)
        print(f"\nServer running at: http://localhost:{PORT}")
        print(f"\nOpen your browser and navigate to:")
        print(f"  http://localhost:{PORT}/index.html")
        print("\nPress Ctrl+C to stop the server")
        print("=" * 60)
        
        # Automatically open browser
        webbrowser.open(f'http://localhost:{PORT}/index.html')
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\nServer stopped.")

if __name__ == "__main__":
    main()
