class PlayerModel {
    constructor() { this.score = 0; }
}

class ComputerModel extends PlayerModel {
    constructor() { super(); }
    decide() { return Math.floor(Math.random() * 3); }
}

const humanModel = new PlayerModel();
const computerModel = new ComputerModel();