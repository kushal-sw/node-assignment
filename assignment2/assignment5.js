// Assignment 5: Personal Portfolio Server
// Objective: Create a simple portfolio website using only the Node.js HTTP module.

const http = require('http');

const PORT = 3000;

// Common navigation bar included on every page
const nav = `
    <nav>
        <a href="/">Home</a> |
        <a href="/about">About Me</a> |
        <a href="/skills">Skills</a> |
        <a href="/projects">Projects</a> |
        <a href="/contact">Contact</a>
    </nav>
    <hr>
`;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head><title>Home</title></head>
                <body>
                    ${nav}
                    <h1>Welcome to My Portfolio</h1>
                    <p>Hi, I'm Kushal Swargam. This is my personal portfolio website.</p>
                </body>
            </html>
        `);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head><title>About Me</title></head>
                <body>
                    ${nav}
                    <h1>About Me</h1>
                    <p>I'm a student pursuing BTECH in Computer Science. I enjoy building web applications and learning new technologies.</p>
                </body>
            </html>
        `);
    } else if (req.url === '/skills') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head><title>Skills</title></head>
                <body>
                    ${nav}
                    <h1>Skills</h1>
                    <ul>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>HTML & CSS</li>
                        <li>React</li>
                    </ul>
                </body>
            </html>
        `);
    } else if (req.url === '/projects') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head><title>Projects</title></head>
                <body>
                    ${nav}
                    <h1>Projects</h1>
                    <ul>
                        <li>Student JSON API - a REST-like Node.js server</li>
                        <li>Portfolio Website - built with plain Node.js</li>
                    </ul>
                </body>
            </html>
        `);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head><title>Contact</title></head>
                <body>
                    ${nav}
                    <h1>Contact Details</h1>
                    <p>Email: kushal.swargam@example.com</p>
                    <p>Phone: +91 9934939422</p>
                </body>
            </html>
        `);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});