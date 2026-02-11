// AI Agent Chatbot for Physical AI & Humanoid Robotics Textbook

class RoboticsAgent {
    constructor() {
        this.context = {
            currentChapter: this.getCurrentChapter(),
            conversationHistory: []
        };
        this.knowledgeBase = this.initializeKnowledgeBase();
    }

    getCurrentChapter() {
        const path = window.location.pathname;
        if (path.includes('chapter1')) return 'Introduction to Physical AI';
        if (path.includes('chapter2')) return 'Humanoid Robot Architecture';
        if (path.includes('chapter3')) return 'Sensors and Perception';
        if (path.includes('chapter4')) return 'Actuators and Motion Control';
        if (path.includes('chapter5')) return 'Machine Learning for Robotics';
        if (path.includes('chapter6')) return 'Computer Vision Systems';
        if (path.includes('chapter7')) return 'Natural Language Processing';
        if (path.includes('chapter8')) return 'Human-Robot Interaction';
        if (path.includes('chapter9')) return 'Ethics and Safety';
        if (path.includes('chapter10')) return 'Future of Humanoid Robotics';
        if (path.includes('timeline')) return 'History Timeline';
        return 'Home';
    }

    initializeKnowledgeBase() {
        return {
            'physical ai': 'Physical AI combines artificial intelligence with physical embodiment, enabling machines to interact with the real world through sensors and actuators.',
            'humanoid': 'Humanoid robots are designed with human-like form to operate in human environments and interact naturally with people.',
            'sensors': 'Robots use various sensors including cameras, tactile sensors, IMUs, and environmental sensors to perceive their surroundings.',
            'actuators': 'Actuators are the muscles of robots, converting electrical energy into mechanical motion using motors, hydraulics, or pneumatics.',
            'machine learning': 'ML enables robots to learn from experience, with techniques like reinforcement learning, imitation learning, and deep learning.',
            'computer vision': 'Computer vision allows robots to understand visual information through object detection, segmentation, and scene understanding.',
            'nlp': 'Natural Language Processing enables robots to understand and generate human language for natural communication.',
            'hri': 'Human-Robot Interaction focuses on designing intuitive and safe ways for humans and robots to work together.',
            'ethics': 'Robot ethics covers safety standards, privacy, accountability, bias, and societal impact of humanoid robots.',
            'future': 'The future includes advanced materials, enhanced AI, swarm robotics, and widespread adoption in homes and workplaces.'
        };
    }

    async processQuery(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        // Context-aware responses
        let response = '';
        
        // Check for greetings
        if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
            response = `Hello! I'm your AI guide for the Physical AI & Humanoid Robotics textbook. You're currently on: ${this.context.currentChapter}. How can I help you learn today?`;
        }
        // Check for navigation requests
        else if (lowerMessage.includes('chapter') || lowerMessage.includes('navigate')) {
            response = this.handleNavigation(lowerMessage);
        }
        // Check for quiz/test
        else if (lowerMessage.includes('quiz') || lowerMessage.includes('test')) {
            response = this.generateQuiz();
        }
        // Check for summary
        else if (lowerMessage.includes('summary') || lowerMessage.includes('summarize')) {
            response = this.generateSummary();
        }
        // Check knowledge base
        else {
            response = this.searchKnowledgeBase(lowerMessage);
        }
        
        this.context.conversationHistory.push({
            user: userMessage,
            agent: response,
            timestamp: new Date()
        });
        
        return response;
    }

    handleNavigation(message) {
        const chapters = [
            'Introduction to Physical AI',
            'Humanoid Robot Architecture',
            'Sensors and Perception',
            'Actuators and Motion Control',
            'Machine Learning for Robotics',
            'Computer Vision Systems',
            'Natural Language Processing',
            'Human-Robot Interaction',
            'Ethics and Safety',
            'Future of Humanoid Robotics'
        ];
        
        return `📚 Available chapters:\n${chapters.map((ch, i) => `${i + 1}. ${ch}`).join('\n')}\n\nClick any chapter in the sidebar to navigate!`;
    }

    generateQuiz() {
        const quizzes = {
            'Introduction to Physical AI': [
                'Q: What distinguishes Physical AI from traditional AI?\nA: Physical AI has sensors, actuators, and can interact with the physical world.',
                'Q: Name three application domains for humanoid robots.\nA: Healthcare, manufacturing, and service industry.'
            ],
            'Machine Learning for Robotics': [
                'Q: What is reinforcement learning?\nA: Learning optimal behaviors through trial and error with rewards.',
                'Q: What is sim-to-real transfer?\nA: Training robots in simulation and transferring skills to real world.'
            ],
            'Ethics and Safety': [
                'Q: Name two key ethical principles for robotics.\nA: Beneficence (promoting welfare) and non-maleficence (avoiding harm).',
                'Q: What is ISO 13482?\nA: Safety standard for personal care robots.'
            ]
        };
        
        const currentQuiz = quizzes[this.context.currentChapter];
        if (currentQuiz) {
            return `📝 Quiz for ${this.context.currentChapter}:\n\n${currentQuiz.join('\n\n')}`;
        }
        return '📝 Quiz questions are available for specific chapters. Navigate to a chapter to get relevant questions!';
    }

    generateSummary() {
        const summaries = {
            'Introduction to Physical AI': '🤖 Physical AI combines AI with physical embodiment for real-world interaction. Humanoid robots operate in human environments across healthcare, manufacturing, and service industries.',
            'Humanoid Robot Architecture': '⚙️ Humanoid robots use skeletal frames, multiple degrees of freedom, advanced materials, and distributed computing for human-like capabilities.',
            'Sensors and Perception': '👁️ Robots perceive through vision systems, tactile sensors, proprioception, audio sensors, and sensor fusion techniques.',
            'Actuators and Motion Control': '🦾 Actuators enable movement through motors and advanced systems. Bipedal walking requires sophisticated balance and motion planning.',
            'Machine Learning for Robotics': '🧠 ML enables robots to learn through reinforcement learning, imitation learning, and deep neural networks with sim-to-real transfer.',
            'Computer Vision Systems': '📷 Computer vision provides object detection, segmentation, depth estimation, SLAM, and scene understanding capabilities.',
            'Natural Language Processing': '💬 NLP enables speech recognition, language understanding, dialogue management, and natural communication with humans.',
            'Human-Robot Interaction': '🤝 HRI focuses on intuitive communication, social intelligence, collaboration, trust-building, and user experience design.',
            'Ethics and Safety': '⚖️ Robot ethics covers safety standards, privacy, accountability, bias mitigation, and societal impact considerations.',
            'Future of Humanoid Robotics': '🚀 Future includes advanced materials, enhanced AI, new applications, swarm robotics, and widespread adoption by 2030.'
        };
        
        return summaries[this.context.currentChapter] || '📖 Navigate to a specific chapter to get a summary!';
    }

    searchKnowledgeBase(query) {
        for (const [key, value] of Object.entries(this.knowledgeBase)) {
            if (query.includes(key)) {
                return `💡 ${value}\n\nWould you like to know more about a specific aspect?`;
            }
        }
        
        return `I'm here to help you learn about Physical AI and Humanoid Robotics! You can ask me to:\n\n• Explain concepts (sensors, actuators, ML, etc.)\n• Navigate to chapters\n• Generate a quiz\n• Summarize the current chapter\n• Answer questions about robotics\n\nWhat would you like to explore?`;
    }
}

// Initialize agent
const agent = new RoboticsAgent();

// Chat UI functionality
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    const chatButton = document.getElementById('chatButton');
    
    if (chatWindow.style.display === 'none' || !chatWindow.style.display) {
        chatWindow.style.display = 'flex';
        chatButton.innerHTML = '✕';
    } else {
        chatWindow.style.display = 'none';
        chatButton.innerHTML = '🤖 AI Assistant';
    }
}

async function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessageToChat('user', message);
    input.value = '';
    
    // Show typing indicator
    const typingId = addMessageToChat('agent', '...', true);
    
    // Get agent response
    setTimeout(async () => {
        const response = await agent.processQuery(message);
        removeMessage(typingId);
        addMessageToChat('agent', response);
    }, 500);
}

function addMessageToChat(sender, message, isTyping = false) {
    const messagesDiv = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    const messageId = 'msg-' + Date.now();
    
    messageDiv.id = messageId;
    messageDiv.className = `chat-message ${sender}-message ${isTyping ? 'typing' : ''}`;
    messageDiv.innerHTML = `<div class="message-content">${message.replace(/\n/g, '<br>')}</div>`;
    
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    return messageId;
}

function removeMessage(messageId) {
    const message = document.getElementById(messageId);
    if (message) message.remove();
}

// Handle Enter key
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Add welcome message
    setTimeout(() => {
        addMessageToChat('agent', `👋 Welcome! I'm your AI guide. I can help you navigate, explain concepts, generate quizzes, and answer questions about Physical AI and Humanoid Robotics. How can I assist you today?`);
    }, 1000);
});

// Progress tracking
function updateProgress() {
    const visited = JSON.parse(localStorage.getItem('visitedChapters') || '[]');
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('chapter') && !visited.includes(currentPath)) {
        visited.push(currentPath);
        localStorage.setItem('visitedChapters', JSON.stringify(visited));
    }
    
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const progress = (visited.length / 10) * 100;
        progressBar.style.width = progress + '%';
    }
}

// Search functionality
function searchContent() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (!query) return;
    
    const content = document.querySelector('.chapter-content, .content');
    const text = content.innerText.toLowerCase();
    
    if (text.includes(query)) {
        alert(`Found "${query}" in this page!`);
        // Highlight search results
        highlightText(query);
    } else {
        alert(`"${query}" not found on this page. Try searching in other chapters!`);
    }
}

function highlightText(query) {
    const content = document.querySelector('.chapter-content, .content');
    const innerHTML = content.innerHTML;
    const index = innerHTML.toLowerCase().indexOf(query.toLowerCase());
    
    if (index >= 0) {
        const highlighted = innerHTML.substring(0, index) +
            '<mark>' + innerHTML.substring(index, index + query.length) + '</mark>' +
            innerHTML.substring(index + query.length);
        content.innerHTML = highlighted;
    }
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateProgress);
} else {
    updateProgress();
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Alt + A: Toggle AI Assistant
    if (e.altKey && e.key === 'a') {
        e.preventDefault();
        toggleChat();
    }
    
    // Alt + S: Focus search
    if (e.altKey && e.key === 's') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.focus();
    }
    
    // Alt + H: Go home
    if (e.altKey && e.key === 'h') {
        e.preventDefault();
        window.location.href = '/index.html';
    }
    
    // Alt + N: Next chapter
    if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const nextLink = document.querySelector('.chapter-nav a[href*="chapter"]:last-child');
        if (nextLink) nextLink.click();
    }
    
    // Alt + P: Previous chapter
    if (e.altKey && e.key === 'p') {
        e.preventDefault();
        const prevLink = document.querySelector('.chapter-nav a[href*="chapter"]:first-child');
        if (prevLink) prevLink.click();
    }
    
    // Escape: Close chat
    if (e.key === 'Escape') {
        const chatWindow = document.getElementById('chatWindow');
        if (chatWindow && chatWindow.style.display === 'flex') {
            toggleChat();
        }
    }
});

// Show keyboard shortcuts hint
setTimeout(() => {
    const hint = document.createElement('div');
    hint.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(44, 62, 80, 0.95);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-size: 14px;
        z-index: 998;
        animation: slideUp 0.5s ease;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    `;
    hint.innerHTML = '💡 Tip: Press <strong>Alt+A</strong> to open AI Assistant | <strong>Alt+H</strong> for Home';
    document.body.appendChild(hint);
    
    setTimeout(() => {
        hint.style.animation = 'slideDown 0.5s ease';
        setTimeout(() => hint.remove(), 500);
    }, 5000);
}, 2000);

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from { bottom: -100px; opacity: 0; }
        to { bottom: 100px; opacity: 1; }
    }
    @keyframes slideDown {
        from { bottom: 100px; opacity: 1; }
        to { bottom: -100px; opacity: 0; }
    }
`;
document.head.appendChild(style);
