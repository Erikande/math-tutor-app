// server/server.ts

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/problem', (_req, res) => {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  res.json({ x, y });
});

app.post('/answer', (req, res) => {
  const { x, y, answer } = req.body;
  const correct = Number(answer) === x + y;
  res.json({ correct });
});

app.listen(PORT, () => {
  console.log(`🧠 Math Tutor API running on http://localhost:${PORT}`);
});

export default app;
