// routes/gamesRoute.js
const express = require("express");
const router = express.Router();
let videojuegos = require("../data/videojuegos");

// Obtener todos los juegos
router.get("/", (req, res) => {
  res.json(videojuegos);
});

// Búsqueda por término en la ruta (ej: /videojuegos/search/resident)
router.get("/search/:term", (req, res) => {
  const term = req.params.term?.toLowerCase();
  if (!term) return res.json(videojuegos);
  const results = videojuegos.filter((j) =>
    j.title.toLowerCase().includes(term)
  );
  res.json(results);
});

// Obtener por ID o filtrar por desarrollador usando la misma ruta
router.get("/:param", (req, res) => {
  const param = req.params.param.toLowerCase();

  // Intentar buscar por ID exacta (IDs en data son strings)
  const byId = videojuegos.find((j) => j.id === req.params.param);
  if (byId) return res.json(byId);

  // Si no es ID, buscar por developer (ej: /videojuegos/capcom)
  const byDeveloper = videojuegos.filter((j) =>
    j.developer.toLowerCase().includes(param)
  );

  if (byDeveloper.length > 0) return res.json(byDeveloper);

  // Si no se encuentra nada, devolver 404
  return res.status(404).json({ mensaje: "Videojuego o desarrollador no encontrado" });
});

module.exports = router;
