$(document).ready(function () {
	console.log("document loaded!");
});

$(window).ready(function () {
	console.log("window loaded!");
});

// initializations
const blankBackground = "./images/black_background.png";
const choices = [
	"./images/rock.png",
	"./images/paper.png",
	"./images/scissors.png",
];

const human = {
	model: new HumanModel(),
	view: new HumanView(),
};
const computer = {
	model: new ComputerModel(),
	view: new ComputerView(),
};

const view = new View();

// events
view.winningScoreSelection.change(reset);

human.view.inputs.rockImage.click(function () {
	let computerChoiceIndex = computer.model.decide();

	human.view.displayPick(choices[0]);
	computer.view.displayPick(choices[computerChoiceIndex]);

	if (choices[computerChoiceIndex] === choices[1]) {
		updateScore(computer);
	} else if (choices[computerChoiceIndex] === choices[2]) {
		updateScore(human);
	}

	decideWinner();
});

human.view.inputs.paperImage.click(function () {
	let computerChoiceIndex = computer.model.decide();

	human.view.displayPick(choices[1]);
	computer.view.displayPick(choices[computerChoiceIndex]);

	if (choices[computerChoiceIndex] === choices[0]) {
		updateScore(human);
	} else if (choices[computerChoiceIndex] === choices[2]) {
		updateScore(computer);
	}

	decideWinner();
});

human.view.inputs.scissorsImage.click(function () {
	let computerChoiceIndex = computer.model.decide();

	human.view.displayPick(choices[2]);
	computer.view.displayPick(choices[computerChoiceIndex]);

	if (choices[computerChoiceIndex] === choices[0]) {
		updateScore(computer);
	} else if (choices[computerChoiceIndex] === choices[1]) {
		updateScore(human);
	}

	decideWinner();
});

view.resetButton.click(reset);

// functions
function updateScore(winner) {
	winner.model.score++;
	winner.view.displayScore(winner.model);
}

function decideWinner() {
	const winningScore = parseInt(view.winningScoreSelection.val());

	if (
		winningScore === human.model.score ||
		winningScore === computer.model.score
	) {
		if (winningScore === human.model.score) {
			view.displayWinner(human.model);
		} else {
			view.displayWinner(computer.model);
		}

		toggleHumanInputs(true);
	}
}

function reset() {
	toggleHumanInputs(false);

	human.model.score = 0;
	human.view.displayScore(human.model);
	human.view.displayPick(blankBackground);

	computer.model.score = 0;
	computer.view.displayScore(computer.model);
	computer.view.displayPick(blankBackground);

	view.removeWinnerDisplay();
}

function toggleHumanInputs(disable) {
	for (let key in human.view.inputs) {
		// human.view.inputs[key].disabled = disable;
		human.view.inputs[key].attr("disabled", disable);
	}
}
