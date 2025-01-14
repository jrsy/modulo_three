class State {
    constructor() {};
};

class S0 extends State {
    constructor() {
        super();
        this.id = 0;
    }
    
    runState(input_char) {
        if (input_char === '0') {
            return 0;
        } else if (input_char === '1') {
            return 1;
        }
    }
}

class S1 extends State {
    constructor() {
        super();
        this.id = 1;
    }
    
    runState(input_char) {
        if (input_char === '0') {
            return 2;
        } else if (input_char === '1') {
            return 0;
        }
    }
}

class S2 extends State {
    constructor() {
        super();
        this.id = 2;
    }
    
    runState(input_char) {
        if (input_char === '0') {
            return 1;
        } else {
            return 2;
        }
    }
}

class Modulo {
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

// Unit Tests
function assert(condition) {
    if (!condition) {
        return "Fail";
    } else {
        return "Pass";
    }
}

function testS0() {
    const test_state = new S0();
    const output0 = test_state.runState('0');
    console.log("testS0(0) === " + assert(output0 === 0));
    const output1 = test_state.runState('1');
    console.log("testS0(1) === " + assert(output1 === 1));
};

function testS1() {
    const test_state = new S1();
    const output0 = test_state.runState('0');
    console.log("testS1(0) === " + assert(output0 === 2));
    const output1 = test_state.runState('1');
    console.log("testS1(1) === " + assert(output1 === 0));
};

function testS2() {
    const test_state = new S2();
    const output0 = test_state.runState('0');
    console.log("testS2(0) === " + assert(output0 === 1));
    const output1 = test_state.runState('1');
    console.log("testS2(1) === " + assert(output1 === 2));
};

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
