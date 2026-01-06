import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'auth endpoint', timestamp: new Date() });
});

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, data: {}, timestamp: new Date() });
});

export default router;

// Updated on 2026-01-06 17:21:37
