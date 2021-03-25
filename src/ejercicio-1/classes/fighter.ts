export enum effectVal {
  superEffective = 2,
  neutral = 1,
  notQuiteEffective = 0.5
}

/**
 * Represents a generic fighter
 */
export abstract class Fighter {
  constructor(private name: string, private height: number,
      private weight: number, private attack: number,
      private defense: number, private speed: number,
      private hitPoints: number) {}


  // Setters
  setName(newName: string) {
    this.name = newName;
  }

  setHeight(newHeight: number) {
    this.height = newHeight;
  }

  setWeight(newWeight: number) {
    this.weight = newWeight;
  }

  setAttack(newAttack: number) {
    this.attack = newAttack;
  }

  setDefense(newDefense: number) {
    this.defense = newDefense;
  }

  setSpeed(newSpeed: number) {
    this.speed = newSpeed;
  }

  setHitPoints(newHitPoints: number) {
    this.hitPoints = newHitPoints;
  }

  // Getters
  getName(): string {
    return this.name;
  }

  getHeight(): number {
    return this.height;
  }

  getWeight(): number {
    return this.weight;
  }

  getAttack(): number {
    return this.attack;
  }

  getDefense(): number {
    return this.defense;
  }
  
  getSpeed(): number {
    return this.speed;
  }

  getHitPoints(): number {
    return this.hitPoints;
  }

  /**
   * Returns a catching phrase
   */
  abstract talk(): string;

  /**
   * Calculates efectiveness of an attack to the defender
   * @param defender 
   */
  abstract getEffectiveness(defender: Fighter): effectVal;
};

