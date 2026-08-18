// Assignment 4: Route Handling Server
// Objective: Implement multiple routes using the Node.js HTTP module.

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Home Page');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Us');
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact Information');
    } else if (req.url === '/services') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Our Services');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});