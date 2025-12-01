// routes/gamesRoute.js
import express from "express";
const router = express.Router();

import videojuegos from "../data/videojuegos.js";

// 1. Listar todos los videojuegos
router.get("/local", (req, res) => {
  res.json(videojuegos);
});

// 2. Buscar por ID
router.get("/local/id/:id", (req, res) => {
  const id = req.params.id;
  const juego = videojuegos.find(v => v.id === id);

  if (!juego) {
    return res.status(404).json({ mensaje: "Juego no encontrado" });
  }

  res.json(juego);
});

// 3. Buscar por término (título o developer)
router.get("/local/search/:term", (req, res) => {
  const term = req.params.term.toLowerCase();

  const resultados = videojuegos.filter(v =>
    v.title.toLowerCase().includes(term) ||
    v.developer.toLowerCase().includes(term)
  );

  res.json(resultados);
});

export default router;
