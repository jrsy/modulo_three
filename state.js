class State {
    constructor() {};
};

export default class S0 extends State {
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

export default class S1 extends State {
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

export default class S2 extends State {
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