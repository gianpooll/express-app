import "dotenv/config";
import "./database/conexion.js";
import authRouter from "./routes/authRoute.js";
import express from "express";

const app = express();

app.use(express.json());
app.use("/", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`servidor 🔥🔥🔥 http://localhost:${PORT}`);
});
