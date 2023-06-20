class PlayerView {
	playerChoice: HTMLImageElement;
	score: HTMLSpanElement;

	constructor(playerChoice: string, score: string) {
		this.playerChoice = document.querySelector(playerChoice);
		this.score = document.querySelector(score);
	}

	displayChoice(src: string) {
		this.playerChoice.src = src;
	}

	displayScore(winnerModel: PlayerModel) {
		this.score.innerText = winnerModel.score.toString();
	}
}

class HumanView extends PlayerView {
	choices: {
		rock: HTMLButtonElement;
		paper: HTMLButtonElement;
		scissors: HTMLButtonElement;
	};
	constructor() {
		super("#human-choice img", "#human-score");
		this.choices = {
			rock: document.querySelector("#rock"),
			paper: document.querySelector("#paper"),
			scissors: document.querySelector("#scissors"),
		};
	}
}

class ComputerView extends PlayerView {
	constructor() {
		super("#computer-choice img", "#computer-score");
	}
}

class View {
	reset: HTMLButtonElement;
	rounds: HTMLSelectElement;
	scores: HTMLDivElement;

	constructor() {
		this.reset = document.querySelector("#reset");
		this.rounds = document.querySelector("#rounds");
		this.scores = document.querySelector("#scores");
	}

	displayWinner(winnerModel: PlayerModel) {
		const winnerLabel = document.createElement("p");

		winnerLabel.innerText = winnerModel.winnerLabel.text;
		winnerLabel.style.color = winnerModel.winnerLabel.color;

		this.scores.appendChild(winnerLabel);
	}

	removeWinnerDisplay() {
		if (this.scores.children.length === 3) {
			this.scores.removeChild(this.scores.lastChild);
		}
	}
}
