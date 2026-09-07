// Assignment 1: Router-Level Middleware
// Run: node assignment1_router_middleware.js
// Requires: npm install express

const express = require('express');
const app = express();
const PORT = 3000;

// Create a separate router using Express Router
const router = express.Router();

// Custom router-level middleware named routerLogger
function routerLogger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const now = new Date();
  const formattedDate = now.toISOString().slice(0, 10) + ' ' + now.toTimeString().slice(0, 8);

  console.log(`${method} /api${url} ${formattedDate}`);
  next(); // pass control to the next handler
}

// Router-level middleware — only runs for routes inside this router
router.use(routerLogger);

// Routes inside the router
router.get('/students', (req, res) => {
  res.send('Students List');
});

router.get('/courses', (req, res) => {
  res.send('Courses List');
});

router.get('/faculty', (req, res) => {
  res.send('Faculty List');
});

// Mount the router using /api
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
