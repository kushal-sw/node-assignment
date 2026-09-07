const express = require('express');
const app = express();
const PORT = 3000;

// ------------------------------------------------------------
// Task 5: Request–Response Understanding
// Middleware that logs the HTTP method and URL for EVERY request
// ------------------------------------------------------------
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ------------------------------------------------------------
// Task 1: Basic Routes
// ------------------------------------------------------------
app.get('/', (req, res) => {
  res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
  res.send('This is About Page');
});

app.get('/contact', (req, res) => {
  res.send('This is Contact Page');
});

// ------------------------------------------------------------
// Task 2: Route Parameter (Dynamic Route)
// GET /user/:name  ->  Hello john
// ------------------------------------------------------------
app.get('/user/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}`);
});

// ------------------------------------------------------------
// Task 3: Multiple Route Parameters
// GET /product/:id/:category -> Product ID: 101, Category: electronics
// ------------------------------------------------------------
app.get('/product/:id/:category', (req, res) => {
  const { id, category } = req.params;
  res.send(`Product ID: ${id}, Category: ${category}`);
});

// ------------------------------------------------------------
// Task 4: Query Parameters
// GET /search?name=john&role=developer -> Name: john, Role: developer
// ------------------------------------------------------------
app.get('/search', (req, res) => {
  const { name, role } = req.query;
  res.send(`Name: ${name}, Role: ${role}`);
});

// ------------------------------------------------------------
// 404 handler (extra, keeps things clean for undefined routes)
// ------------------------------------------------------------
app.use((req, res) => {
  res.status(404).send('Route Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
