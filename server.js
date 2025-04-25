import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import playerRouter from "./src/routes/player.js";
import rosterRouter from "./src/routes/roster.js";
import nextmatchRouter from "./src/routes/nextmatch.js";
import resultsRouter from "./src/routes/results.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Usando as rotas separadas
app.use("/api/player", playerRouter);
app.use("/api/roster", rosterRouter);
app.use("/api/nextmatch", nextmatchRouter);
app.use("/api/results", resultsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
