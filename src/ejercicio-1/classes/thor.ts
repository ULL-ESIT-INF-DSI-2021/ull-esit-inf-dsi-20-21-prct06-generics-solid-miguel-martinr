import { Marvel } from "./marvel";


export class Thor extends Marvel {
  constructor() {
    super('Thor', 1.90, 140, 60, 30, 23, 30, 'ASGARD');
  }

  talk(): string {
    return `Fortunately, I am mighty!`;
  }
};
