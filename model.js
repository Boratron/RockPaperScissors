class Player {
    constructor() { this.score = 0; }
}

class Computer extends Player {
    constructor() { super(); }
    decide() { return Math.floor(Math.random() * 3); }
}

const humanModel = new Player();
const computerModel = new Computer();