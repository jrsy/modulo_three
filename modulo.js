import { S0, S1, S2 } from './state.js';

export default class Modulo {
  constructor(data) {
    this.Q = data.Q;
    this.E = data.E;
    this.F = data.F;

    this.q = new S0();
    this.modulo = this.Q.length;
  }
  
  resetModulo() {
      this.q = new S0();
  }

  calculateMod(input) {
    let input_array = input.split("");
    
    for (let i = 0; i < input_array.length; i++) {
      const current_char = input_array[i];
      const new_state_id = this.q.runState(current_char);
      if (new_state_id !== this.q.id) {
          // Changed state
          this.changeState(new_state_id);
      }
    }
    
    return this.q.id;
  }
  
  changeState(new_state_id) {
      if (new_state_id === 0) {
          this.q = new S0();
      } else if (new_state_id === 1) {
          this.q = new S1();
      } else if (new_state_id === 2) {
          this.q = new S2();
      }
  }
}