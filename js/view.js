class PlayerView {
	constructor(pickDisplayQuery, scoreSpanQuery) {
		this.pickDisplay = $(pickDisplayQuery);
		this.scoreSpan = $(scoreSpanQuery);
	}

	displayPick(src) {
		this.pickDisplay.attr("src", src);
	}

	displayScore(winnerModel) {
		this.scoreSpan.text(winnerModel.score);
	}
}

class HumanView extends PlayerView {
	constructor() {
		super("#humanPick img", "#humanScore");
		this.inputs = {
			rockImage: $("#rockInputImage"),
			paperImage: $("#paperInputImage"),
			scissorsImage: $("#scissorsInputImage"),
		};
	}
}

class ComputerView extends PlayerView {
	constructor() {
		super("#computerPick img", "#computerScore");
	}
}

class View {
	constructor() {
		this.resetButton = $("#resetButton");
		this.winningScoreSelection = $("#rounds");
		this.scoresDisplay = $("#scoresDisplay");
	}

	displayWinner(winnerModel) {
		const winnerLabel = $("<p></p>");
		winnerLabel.text(winnerModel.winnerLabel.text);
		winnerLabel.css("color", winnerModel.winnerLabel.color);

		this.scoresDisplay.append(winnerLabel);
	}

	removeWinnerDisplay() {
		if (this.scoresDisplay.children().length === 3) {
			this.scoresDisplay.children().last().remove();
		}
	}
}
