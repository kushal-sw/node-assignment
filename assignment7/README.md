# Express.js Route & Query Parameter Assignments

Three small Express.js apps covering route parameters, query parameters, and both combined.

## Setup

```bash
npm install
```

## Run

Each assignment is a separate file (all listen on port 3000, so run one at a time):

```bash
node assignment1.js   # Route Parameters
node assignment2.js   # Query Parameters
node assignment3.js   # Route + Query Parameters
```

## Assignment 1 — Route Parameters
- Route: `/student/:id`
- Visit: `http://localhost:3000/student/101` → `Student ID: 101`
- Visit: `http://localhost:3000/student/205` → `Student ID: 205`

## Assignment 2 — Query Parameters
- Route: `/search?name=..&course=..`
- Visit: `http://localhost:3000/search?name=Ricky&course=Node.js` →
  ```
  Name: Ricky
  Course: Node.js
  ```
- Visit: `http://localhost:3000/search` → `No search data provided.`

## Assignment 3 — Route Parameters + Query Parameters
- Route: `/student/:id?name=..&course=..`
- Visit: `http://localhost:3000/student/101?name=John&course=FullStack` →
  ```
  Student ID: 101
  Name: John
  Course: FullStack
  ```
