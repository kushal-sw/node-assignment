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

const http = require('http')   // ✅ correct module

const server2 = http.createServer((req, res) => {   // ✅ req, res order
    res.writeHead(200, { 'Content-Type': 'text/plain' })   // ✅ valid status + fixed quotes
    res.end("welcome to server")
})

server2.listen(3000, () => {
    console.log('Server running on port 3000')
})