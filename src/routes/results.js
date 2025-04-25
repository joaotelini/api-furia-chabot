import express from "express";
import { getResults } from "../services/firebaseRealTime.js";

const router = express.Router();

// Definindo a rota para obter os resultados
router.get("/", async (req, res) => {
  try {
    const results = await getResults();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
