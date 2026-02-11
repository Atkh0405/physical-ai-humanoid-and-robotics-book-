#!/usr/bin/env python3
"""
Script to add AI assistant and enhanced features to all chapter pages
"""

import os
import re

def add_features_to_chapter(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already updated
    if 'chatButton' in content:
        print(f"✓ {filepath} already updated")
        return
    
    # Add progress bar and chat UI after <body> tag
    chat_ui = '''
    <!-- Progress Bar -->
    <div class="progress-container">
        <div id="progressBar"></div>
    </div>
    
    <!-- AI Chat Assistant -->
    <button id="chatButton" onclick="toggleChat()">🤖 AI Assistant</button>
    
    <div id="chatWindow">
        <div class="chat-header">
            <span>🤖</span>
            <span>AI Learning Assistant</span>
        </div>
        <div id="chatMessages"></div>
        <div class="chat-input-area">
            <input type="text" id="chatInput" placeholder="Ask me anything about robotics...">
            <button id="sendButton" onclick="sendMessage()">Send</button>
        </div>
    </div>
    '''
    
    content = content.replace('<body>', '<body>' + chat_ui)
    
    # Add search bar after sidebar
    search_bar = '''
    
    <main class="content">
        <div class="search-container">
            <div class="search-box">
                <input type="text" id="searchInput" placeholder="Search in this chapter...">
                <button class="search-btn" onclick="searchContent()">🔍 Search</button>
            </div>
        </div>'''
    
    content = content.replace('<main class="content">', search_bar)
    
    # Add script before </body>
    script_tag = '\n    <script src="../script.js"></script>\n</body>'
    content = content.replace('</body>', script_tag)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Updated {filepath}")

def main():
    print("Updating chapter files with AI assistant and enhanced features...\n")
    
    # Update all chapter files
    chapters_dir = 'chapters'
    if os.path.exists(chapters_dir):
        for i in range(1, 11):
            filepath = os.path.join(chapters_dir, f'chapter{i}.html')
            if os.path.exists(filepath):
                add_features_to_chapter(filepath)
    
    # Update history timeline
    history_file = 'history/timeline.html'
    if os.path.exists(history_file):
        add_features_to_chapter(history_file)
    
    print("\n✅ All files updated successfully!")
    print("Refresh your browser to see the new AI assistant and features!")

if __name__ == "__main__":
    main()
