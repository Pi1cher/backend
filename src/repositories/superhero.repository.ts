import { ISuperhero } from "../interfaces/superhero.interface";
import { Superhero } from "../models/superhero.model";

class SuperheroRepository {
  public async findAll(query: any): Promise<any> {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 5;
    const skip = (page - 1) * limit;
    const superheroes = await Superhero.find().limit(limit).skip(skip);
    const total = await Superhero.countDocuments();
    const totalPages = Math.ceil(+total / limit);
    return { page, limit, totalPages, totalItems: total, superheroes };
  }

  public async getById(superheroId: string): Promise<ISuperhero> {
    return await Superhero.findById(superheroId);
  }

  public async updateById(
    superheroId: string,
    superhero: ISuperhero,
  ): Promise<ISuperhero> {
    return await Superhero.findByIdAndUpdate(superheroId, superhero, {
      returnDocument: "after",
    });
  }

  public async deleteById(superheroId: string): Promise<void> {
    await Superhero.deleteOne({ _id: superheroId });

  }

  public async create(data: ISuperhero): Promise<ISuperhero> {
    return await Superhero.create(data);
  }
}

export const superheroRepository = new SuperheroRepository();
