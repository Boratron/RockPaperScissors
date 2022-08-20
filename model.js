class PlayerModel {
	constructor() {
		this.score = 0;
	}
}

class HumanModel extends PlayerModel {
	constructor() {
		super();
	}
}

class ComputerModel extends PlayerModel {
	constructor() {
		super();
	}

	decide() {
		return Math.floor(Math.random() * 3);
	}
}
