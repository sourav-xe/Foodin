import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import reservationRoutes from "./routes/reservationRoutes.js";

dotenv.config();
const app = express();

// ✅ Allow frontend running on Vite (5173) + React default (3000)
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());

// routes
app.use("/api/v1/reservation", reservationRoutes);

// health check
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
