import { Fighter } from './fighter';

export class Pokedex<T extends Fighter> {
  
  constructor(private fighters: T[] = []) {}

  /**
   * Returns a shallow copy of fighters[]
   * @returns {T[]}
   */
  getFighters(): T[] {
    return [...this.fighters];
  }
  
  /**
   * Adds a new Fighert to the Pokedex
   * @param {T} fighter New fighter to be added
   */
  addFighter(newFighter: T): void {
    this.fighters.push(newFighter);
  }

  /**
   * Deletes the first fighter whose name is `fighterName`
   * @param {string} fighterName 
   * @returns {boolean} True if Fighter is deleted. False if fighterName
   * is not found.
   */
  removeFighter(fighterName: string): boolean {
    for (let i: number = 0; i < this.fighters.length; i++) {
      if (this.fighters[i].getName() === fighterName) {
        this.fighters.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
