const express = require("express");
const userRouter = require("./router/userRouter");
require("./config/firebase"); // initializes Firebase connection

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);

app.listen(3000, () => console.log("Server running on port 3000"));