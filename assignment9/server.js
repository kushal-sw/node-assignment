const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/userRouter");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/userDB",)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("Connection error:", err));

app.use("/api/users", userRouter);

app.listen(3000, () => console.log("Server running on port 3000"));