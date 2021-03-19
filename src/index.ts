import { Combat } from './ejercicio-1/classes/combat';
import { Pikachu } from './ejercicio-1/classes/pikachu';
import { Thor } from './ejercicio-1/classes/thor';

const combat = new Combat(new Thor(), new Pikachu());

combat.start();
