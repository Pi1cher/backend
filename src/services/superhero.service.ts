import { ISuperhero } from "../interfaces/superhero.interface";
import { superheroRepository } from "../repositories/superhero.repository";

class SuperheroService {
  public async findAll(query: any): Promise<ISuperhero[]> {
    return await superheroRepository.findAll(query);
  }

  public async getById(superheroId: string): Promise<ISuperhero> {
    return await superheroRepository.getById(superheroId);
  }

  public async updateById(
    superheroId: string,
    superhero: ISuperhero,
  ): Promise<void> {
    await superheroRepository.updateById(superheroId, superhero);
  }

  public async deleteById(superheroId: string): Promise<void> {
    await superheroRepository.deleteById(superheroId);
  }

  public async create(data: ISuperhero): Promise<ISuperhero> {
    return await superheroRepository.create(data);
  }
}

export const superheroService = new SuperheroService();
