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

  abstract talk(): string;
};
