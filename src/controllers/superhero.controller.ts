// import * as fs from "node:fs";
// import path from "node:path";

import { NextFunction, Request, Response } from "express";

import { ISuperhero } from "../interfaces/superhero.interface";
import { superheroService } from "../services/superhero.service";

class SuperheroController {
  public async findAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      const query = req.query;
      const superheroes = await superheroService.findAll(query);
      return res.json({ ...superheroes });
    } catch (error) {
      next(error);
    }
  }

  public async getById(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ISuperhero>> {
    try {
      const superheroId = req.params.superheroId;
      const superhero = await superheroService.getById(superheroId);
      return res.json(superhero);
    } catch (error) {
      next(error);
    }
  }

  public async updateById(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ISuperhero>> {
    try {
      const images = (req.files as Express.Multer.File[]).map((file) => ({
        name: file.originalname,
        img: {
          path: file.path,
          contentType: file.mimetype,
        },
      }));

      const superheroId = req.params.superheroId;
      const superhero = {
        ...req.body,
        images,
      };
      const result = await superheroService.updateById(superheroId, superhero);
      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  public async deleteById(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const superheroId = req.params.superheroId;
      await superheroService.deleteById(superheroId);
    } catch (error) {
      next(error);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<void>> {
    try {
      const images = (req.files as Express.Multer.File[]).map((file) => ({
        name: file.originalname,
        img: {
          path: file.path,
          contentType: file.mimetype,
        },
      }));

      const superhero = {
        ...req.body,
        images,
      };
      const superheroRes = await superheroService.create(superhero);
      return res.status(201).json(superheroRes);
    } catch (error) {
      next(error);
    }
  }
}

export const superheroController = new SuperheroController();
