class PlayerModel {
	constructor(winnerText, winnerColor) {
		this.score = 0;
		this.winnerLabel = {
			text: winnerText,
			color: winnerColor,
		};
	}
}

class HumanModel extends PlayerModel {
	constructor(winnerText = "You Win", winnerColor = "#7cfc00") {
		super(winnerText, winnerColor);
	}
}

class ComputerModel extends PlayerModel {
	constructor(winnerText = "Computer Wins", winnerColor = "#dc143c") {
		super(winnerText, winnerColor);
	}

	decide() {
		return Math.floor(Math.random() * 3);
	}
}
