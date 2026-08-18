// Assignment 1: Basic HTTP Server
// HTTP server that displays a welcome message in the browser.

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Node.js Server');
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});