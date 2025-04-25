import express from "express";
import { getRoster } from "../services/firebaseRealTime.js";

const router = express.Router();

// Definindo a rota para obter o roster
router.get("/", async (req, res) => {
  try {
    const roster = await getRoster();
    res.json(roster);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
