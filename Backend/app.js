import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

export default app;
