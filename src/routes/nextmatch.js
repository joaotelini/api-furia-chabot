import express from "express";
import { getNextMatch } from "../services/firebaseRealTime.js";

const router = express.Router();

// Definindo a rota para obter o próximo match
router.get("/", async (req, res) => {
  try {
    const match = await getNextMatch();
    res.json(match);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
