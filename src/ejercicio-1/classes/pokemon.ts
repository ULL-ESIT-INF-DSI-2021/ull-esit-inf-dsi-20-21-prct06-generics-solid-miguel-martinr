import { Fighter } from './fighter';

export type PokemonType = 'ELECTRIC' | 'WATER' | 'GRASS' | 'FIRE' | 'POISON';

export abstract class Pokemon extends Fighter {
  constructor(name: string, height: number, 
      weight: number, attack:number, 
      defense: number, speed: number, 
      hitPoints: number, private type: PokemonType) {
  
    super(name, height, weight, attack, defense, speed, hitPoints);
  }

  // Setters
  setType(newType: PokemonType) {
    this.type = newType;
  }

  // Getters
  getType(): PokemonType {
    return this.type;
  }
}
