import { Request, Response } from 'express';

export class Controller {
  async getAll(req: Request, res: Response) {
    res.json({ data: [], page: 1, total: 0 });
  }

  async getById(req: Request, res: Response) {
    res.json({ id: req.params.id, data: null });
  }

  async create(req: Request, res: Response) {
    res.status(201).json({ data: req.body });
  }
}

// Updated on 2026-01-18 17:10:53

// Updated on 2026-01-30 12:57:04
