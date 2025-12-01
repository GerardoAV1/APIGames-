import mongoose from "mongoose";

const VideojuegoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  developer: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  gender: { type: String, required: true }
});

export default mongoose.model("Videojuego", VideojuegoSchema);