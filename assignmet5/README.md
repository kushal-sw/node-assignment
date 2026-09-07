# Express Basics Assignment

A simple Express.js server demonstrating basic routes, dynamic route parameters, multiple route parameters, query parameters, and request logging.

## 📁 Project Structure

```
express-basics-assignment/
│
├── server.js
├── package.json
└── README.md
```

## 🚀 Steps to Run the Server

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the server**
   ```bash
   npm start
   ```
   (or, for auto-restart during development, `npm run dev` if you have nodemon)

3. The server will start on:
   ```
   http://localhost:3000
   ```

4. Open the routes below in your browser or test with a tool like Postman / curl.

## 🛣️ Explanation of Routes

| # | Route | Method | Description |
|---|-------|--------|-------------|
| 1 | `/` | GET | Returns a welcome message for the home page |
| 2 | `/about` | GET | Returns the About page message |
| 3 | `/contact` | GET | Returns the Contact page message |
| 4 | `/user/:name` | GET | Reads a dynamic `name` from the URL and greets the user |
| 5 | `/product/:id/:category` | GET | Reads two dynamic values (`id` and `category`) from the URL |
| 6 | `/search` | GET | Reads `name` and `role` from the query string (`req.query`) |

Additionally, a global middleware runs on **every request** and logs the HTTP method and URL to the terminal (Task 5).

## 🧪 Sample Outputs

### 1. Basic Routes

**Request:** `GET http://localhost:3000/`
**Response:**
```
Welcome to Home Page
```

**Request:** `GET http://localhost:3000/about`
**Response:**
```
This is About Page
```

**Request:** `GET http://localhost:3000/contact`
**Response:**
```
This is Contact Page
```

### 2. Route Parameter

**Request:** `GET http://localhost:3000/user/john`
**Response:**
```
Hello john
```

### 3. Multiple Route Parameters

**Request:** `GET http://localhost:3000/product/101/electronics`
**Response:**
```
Product ID: 101, Category: electronics
```

### 4. Query Parameters

**Request:** `GET http://localhost:3000/search?name=john&role=developer`
**Response:**
```
Name: john, Role: developer
```

### 5. Terminal Logs (Request–Response Understanding)

When the above requests are made, the terminal will print:

```
Server is running on http://localhost:3000
GET /
GET /about
GET /contact
GET /user/john
GET /product/101/electronics
GET /search?name=john&role=developer
```

## 📦 Dependencies

- [express](https://www.npmjs.com/package/express) - Fast, minimalist web framework for Node.js
