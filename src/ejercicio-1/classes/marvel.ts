import { Fighter } from './fighter';

export type MarvelPlanet = 'EARTH' | 'ASGARD' | 'TITAN' | 'ZenWhoberi' | 'MARS';

/**
 * Represents a Marvel universe
 */
export abstract class Marvel extends Fighter {
  constructor(name: string, height: number, 
      weight: number, attack:number, 
      defense: number, speed: number, 
      hitPoints: number, private planet: MarvelPlanet) {
  
    super(name, height, weight, attack, defense, speed, hitPoints);
  }

  // Setters
  setPlanet(newPlanet: MarvelPlanet) {
    this.planet = newPlanet;
  }

  // Getters
  getPlanet(): MarvelPlanet {
    return this.planet;
  }
}
