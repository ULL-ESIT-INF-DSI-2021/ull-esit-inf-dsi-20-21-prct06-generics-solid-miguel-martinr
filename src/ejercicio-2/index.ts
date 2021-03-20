import { Velocity } from "./classes/velocity";


const vel = new Velocity(100, 'KM/H');

console.log(vel.toMPH(), 'MPH');
console.log(vel.toMS(), 'M/S');
