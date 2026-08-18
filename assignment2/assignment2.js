// Assignment 2 HTML Response Server
// Serve an HTML page using the Node.js HTTP module.

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const html = `
        <html>
            <head>
                <title>Student Portal</title>
            </head>
            <body>
                <h1>Student Portal</h1>
                <p>Name: kushal swargam</p>
                <p>Course: BTECH cse</p>
                <p>College: ITM skill tech university</p>
                <p>Welcome to our Node.js application</p>
            </body>
        </html>
    `;

    res.end(html);
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});