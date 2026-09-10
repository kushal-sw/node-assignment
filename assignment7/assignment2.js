// Assignment 2: Query Parameters
// Objective: Retrieve and display data using Query Parameters

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/search', (req, res) => {
  const { name, course } = req.query; 

  if (!name && !course) {
    return res.send('No search data provided.');
  }

  res.send(`Name: ${name}<br>Course: ${course}`);
});

app.listen(PORT, () => {
  console.log(`Assignment 2 server running at http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/search?name=Ricky&course=Node.js`);
});
