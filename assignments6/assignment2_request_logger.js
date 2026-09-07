// Assignment 2: Request Logger Middleware
// Run: node assignment2_request_logger.js
// Requires: npm install express

const express = require('express');
const app = express();
const PORT = 3000;

// Custom global middleware named logger
function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const now = new Date();
  const formattedDate = now.toISOString().slice(0, 10) + ' ' + now.toTimeString().slice(0, 8);

  console.log(`${method} ${url} ${formattedDate}`);
  next(); // pass control to the next middleware/route handler
}

// Global middleware — executes before every route
app.use(logger);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.get('/contact', (req, res) => {
  res.send('Contact Information');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
