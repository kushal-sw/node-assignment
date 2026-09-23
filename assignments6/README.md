# Express Middleware Assignments (Assignment 6)

A collection of Express.js exercises demonstrating different types and use cases of middleware in Node.js, including router-level middleware, global request logging, and request response time tracking.

---

## 📁 Project Structure

```
assignments6/
│
├── assignment1_router_middleware.js   # Assignment 1: Router-Level Middleware
├── assignment2_request_logger.js        # Assignment 2: Global Request Logger Middleware
├── assignment3_response_time.js         # Assignment 3: Response Time Middleware
├── package.json                         # Dependencies and npm start scripts
└── README.md                            # Documentation
```

---

## 🚀 Getting Started

### 1. Install Dependencies

Navigate to the `assignments6` directory and install the required npm packages:

```bash
cd assignments6
npm install
```

### 2. Running the Assignments

Each assignment is an independent server running on port `3000`. You can start each one using the configured npm scripts or directly via `node`:

| Assignment | Description | NPM Script | Direct Node Command |
|---|---|---|---|
| **Assignment 1** | Router-Level Middleware | `npm run start1` | `node assignment1_router_middleware.js` |
| **Assignment 2** | Global Request Logger | `npm run start2` | `node assignment2_request_logger.js` |
| **Assignment 3** | Response Time Logger | `npm run start3` | `node assignment3_response_time.js` |

> **Note:** Since all three assignments use port `3000`, run only one assignment at a time or terminate the previous one using `Ctrl + C` before running the next.

---

## 📖 Detailed Assignment Overviews

### 🔹 Assignment 1: Router-Level Middleware (`assignment1_router_middleware.js`)

#### Concept
Router-level middleware functions similarly to application-level middleware, but is bound to an instance of `express.Router()`. It only executes for requests handled by that specific router instance mounted at a given prefix (here, `/api`).

#### Key Implementation
- Router created via `express.Router()`.
- Middleware `routerLogger` logs the HTTP method, endpoint path, and a formatted timestamp (`YYYY-MM-DD HH:MM:SS`).
- Router mounted onto `/api` via `app.use('/api', router)`.

#### Routes
| Method | Route | Description | Response |
|---|---|---|---|
| `GET` | `/api/students` | Fetch students list | `Students List` |
| `GET` | `/api/courses` | Fetch courses list | `Courses List` |
| `GET` | `/api/faculty` | Fetch faculty list | `Faculty List` |

#### Sample Terminal Output
```
Server running at http://localhost:3000
GET /api/students 2026-09-23 11:00:15
GET /api/courses 2026-09-23 11:00:20
GET /api/faculty 2026-09-23 11:00:25
```

---

### 🔹 Assignment 2: Global Request Logger Middleware (`assignment2_request_logger.js`)

#### Concept
Application-level (global) middleware is bound to the `app` object using `app.use()`. It runs on every incoming HTTP request regardless of the route or HTTP method, making it ideal for logging, authentication checks, and parsing headers.

#### Key Implementation
- Global middleware `logger` intercepts all incoming requests.
- Formats and logs `${method} ${url} ${formattedDate}`.
- Invokes `next()` to pass control to the matching route handler.

#### Routes
| Method | Route | Description | Response |
|---|---|---|---|
| `GET` | `/` | Home page | `Welcome to Home Page` |
| `GET` | `/about` | About page | `About Us` |
| `GET` | `/contact` | Contact page | `Contact Information` |

#### Sample Terminal Output
```
Server running at http://localhost:3000
GET / 2026-09-23 11:05:01
GET /about 2026-09-23 11:05:15
GET /contact 2026-09-23 11:05:30
```

---

### 🔹 Assignment 3: Response Time Middleware (`assignment3_response_time.js`)

#### Concept
Measures the round-trip execution duration for handling a request and sending a response. It records the starting timestamp when the request enters the middleware pipeline, and attaches a listener to the response object's `'finish'` event to compute elapsed time.

#### Key Implementation
- Captures `startTime = Date.now()` when the request arrives.
- Listens to `res.on('finish', ...)` which fires when the response has been fully transmitted.
- Calculates `duration = Date.now() - startTime` and logs `${method} ${url} - ${duration} ms`.

#### Routes
| Method | Route | Description | Response |
|---|---|---|---|
| `GET` | `/` | Home page | `Home Page` |
| `GET` | `/products` | Products list | `Product List` |
| `GET` | `/users` | Users list | `User List` |

#### Sample Terminal Output
```
Server running at http://localhost:3000
GET / - 2 ms
GET /products - 1 ms
GET /users - 3 ms
```

---

## 🧪 Testing with cURL

You can test the endpoints in a separate terminal window:

### Assignment 1:
```bash
curl http://localhost:3000/api/students
curl http://localhost:3000/api/courses
curl http://localhost:3000/api/faculty
```

### Assignment 2:
```bash
curl http://localhost:3000/
curl http://localhost:3000/about
curl http://localhost:3000/contact
```

### Assignment 3:
```bash
curl http://localhost:3000/
curl http://localhost:3000/products
curl http://localhost:3000/users
```

---

## 📦 Dependencies

- [express](https://www.npmjs.com/package/express) (`^4.19.2`) - Web framework for Node.js
