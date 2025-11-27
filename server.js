// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
const gamesRoutes = require("./routes/gamesRoute");

// Prefijos
app.use("/videojuegos", gamesRoutes);

// Ruta raíz
app.get("/", (req, res) => {
  res.send("🎮 API de Videojuegos funcionando correctamente");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
