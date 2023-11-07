const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Раздача статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Обработка корневого маршрута
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Храним соответствие ключевых слов и URL
const keywordMap = {
  "example": ["https://vk.com/far.engate", "http://example.org"],
};

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('getUrls', (keyword) => {
    const urls = keywordMap[keyword];
    if (!urls) {
      socket.emit('error', 'No URLs found for the given keyword');
      return;
    }
    socket.emit('urls', urls);
  });

  socket.on('downloadContent', async (url) => {
    try {
      const response = await axios.get(url);
      const content = response.data;
      socket.emit('downloadProgress', { progress: 100, threads: 1, size: content.length });
      socket.emit('content', content);
    } catch (error) {
      socket.emit('error', error.toString());
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Запускаем сервер (только один раз!)
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
