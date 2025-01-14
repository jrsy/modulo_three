import Modulo from './modulo.js';
import { testS0, testS1, testS2 } from './tests.js';

let modulo_three = new Modulo({
  Q: {
    S0: 0,
    S1: 1,
    S2: 2
  },
  E: ['0', '1'],
  F: [0, 1, 2]
});

testS0();
testS1();
testS2();

let final_mod = modulo_three.calculateMod("1101");
console.log('mod 13 = ' + final_mod);
modulo_three.resetModulo();
final_mod = modulo_three.calculateMod("1110");
console.log('mod 14 = ' + final_mod);
modulo_three.resetModulo();
final_mod = modulo_three.calculateMod("1111");
console.log('mod 15 = ' + final_mod);