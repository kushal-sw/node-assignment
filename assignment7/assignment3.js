// Assignment 3: Student Profile using Route Parameters & Query Parameters
// Objective: Build a dynamic route that uses both route parameters and query parameters

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/student/:id', (req, res) => {
  const studentId = req.params.id;       
  const { name, course } = req.query;    

  res.send(
    `Student ID: ${studentId}<br>` +
    `Name: ${name}<br>` +
    `Course: ${course}`
  );
});

app.listen(PORT, () => {
  console.log(`Assignment 3 server running at http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/student/101?name=John&course=FullStack`);
});
