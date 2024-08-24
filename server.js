const express = require("express");
const Cors = require("cors");
// Initialize PORT
const PORT = process.env.PORT || 8080;

// Initialize App
const app = express();

// Tell app to use packages
app.use(express.json());
app.use(Cors());

// Connect DB

// API Routes

app.listen(PORT, () => {
  console.log("Server is Running");
});
