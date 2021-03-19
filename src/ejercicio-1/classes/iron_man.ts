import { Marvel } from "./marvel";


export class IronMan extends Marvel {
  constructor() {
    super('Iron Man', 1.85, 130, 60, 70, 55, 85, 'EARTH');
  }

  talk(): string {
    return `I am Iron Man`;
  }
};
