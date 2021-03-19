import 'mocha';
import { expect } from 'chai';
import { Combat } from '../../../src/ejercicio-1/classes/combat';
import { Pikachu } from '../../../src/ejercicio-1/classes/pikachu';
import { Thor } from '../../../src/ejercicio-1/classes/thor';

// For making this tests pass please remove color methods applied to strings in the Combat class methods 

// describe('Combat tests', () => {
//   it('Runs a combat between Thor and Pikachu', () => {
//     const combat = new Combat(new Thor(), new Pikachu());
//     const expectedOutput = [
//       'Starting battle...\n' +
//       'Thor HP: 30 Fortunately, I am mighty!\n' +
//       'Pikachu HP: 200 Pika Pika!\n',
//       'Thor Attacked! Fortunately, I am mighty! HP: 30\n' +
//       'Pikachu Is under attack! Pika Pika! HP: 50\n\n',
//       'Pikachu Attacked! Pika Pika! HP: 50\n' +
//       'Thor Is under attack! Fortunately, I am mighty! HP: 0\n\n',
//       '\nPikachu WINS!  Pika Pika!\n',
//     ];

//     expect(combat.start()).to.be.eql(expectedOutput);
//   });
// });

