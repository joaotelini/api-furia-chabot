import express from "express";
import { getPlayer } from "../services/firebaseRealTime.js";

const router = express.Router();

router.get("/:nick", async (req, res) => {
  const { nick } = req.params;
  try {
    const player = await getPlayer(nick);
    if (player) {
      res.json([player]);
    } else {
      res.status(404).json({ error: "Jogador não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
