// This will import the Express..
const express = require("express");

// It will create the Instance of express..
const app = express();

// Load config from ENV file..
require("dotenv").config();

const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todos");

// Mount the Todo APIs routes
app.use("/api/v1", todoRoutes);

// Starting the Server
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})

// Database Connection..
const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1> This is my HomePage. </h1>`);
})