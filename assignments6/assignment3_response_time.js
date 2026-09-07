// Assignment 3: Response Time Middleware
// Run: node assignment3_response_time.js
// Requires: npm install express

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware named responseTimeLogger
function responseTimeLogger(req, res, next) {
  const startTime = Date.now(); // record request start time

  // 'finish' event fires once the response has been sent
  res.on('finish', () => {
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`${req.method} ${req.url} - ${duration} ms`);
  });

  next();
}

app.use(responseTimeLogger);

// Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/products', (req, res) => {
  res.send('Product List');
});

app.get('/users', (req, res) => {
  res.send('User List');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
