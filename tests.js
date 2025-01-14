import { S0, S1, S2 } from './state.js';

// Unit Tests
function assert(condition) {
    if (!condition) {
        return "Fail";
    } else {
        return "Pass";
    }
}

export default function testS0() {
    const test_state = new S0();
    const output0 = test_state.runState('0');
    console.log("testS0(0) === " + assert(output0 === 0));
    const output1 = test_state.runState('1');
    console.log("testS0(1) === " + assert(output1 === 1));
};

export default function testS1() {
    const test_state = new S1();
    const output0 = test_state.runState('0');
    console.log("testS1(0) === " + assert(output0 === 2));
    const output1 = test_state.runState('1');
    console.log("testS1(1) === " + assert(output1 === 0));
};

export default function testS2() {
    const test_state = new S2();
    const output0 = test_state.runState('0');
    console.log("testS2(0) === " + assert(output0 === 1));
    const output1 = test_state.runState('1');
    console.log("testS2(1) === " + assert(output1 === 2));
};