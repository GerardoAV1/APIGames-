import express from "express";
import cors from "cors";
import gamesRoute from "./routes/gamesRoute.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ⭐ Conexión MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✔ Conectado a MongoDB Atlas"))
  .catch(err => console.error("❌ Error de conexión:", err));

// Rutas
app.use("/api/games", gamesRoute);

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
