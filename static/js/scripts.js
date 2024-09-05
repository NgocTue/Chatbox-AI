// scripts.js
function sendMessage() {
    const message = document.getElementById('message').value;
    const messagesDiv = document.getElementById('messages');

    // Hiển thị tin nhắn của người dùng
    const userMessage = document.createElement('p');
    userMessage.textContent = "You: " + message;
    messagesDiv.appendChild(userMessage);

    // Gửi yêu cầu tới server để nhận phản hồi từ AI
    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        const botMessage = document.createElement('p');
        botMessage.textContent = "Bot: " + data.reply;
        messagesDiv.appendChild(botMessage);

        // Xóa nội dung trong input
        document.getElementById('message').value = '';
    });
}
