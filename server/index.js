const express = require('express');

const app = express();
const port = 3000;
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world');
});

const server = http.createServer(app);

// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

});

server.listen(4000, () => 'Server is running on port 4000');