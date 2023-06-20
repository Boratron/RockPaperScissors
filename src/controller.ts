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

// -- events -- //
view.rounds.addEventListener("change", reset);
view.reset.addEventListener("click", reset);

human.view.choices.rock.addEventListener("click", () => {
	let computerChoiceIndex = computer.model.decide();

	human.view.displayChoice(choices[0]);
	computer.view.displayChoice(choices[computerChoiceIndex]);

	if (choices[computerChoiceIndex] === choices[1]) {
		updateScore(computer);
	} else if (choices[computerChoiceIndex] === choices[2]) {
		updateScore(human);
	}

	decideWinner();
});

human.view.choices.paper.addEventListener("click", () => {
	let computerChoiceIndex = computer.model.decide();

	human.view.displayChoice(choices[1]);
	computer.view.displayChoice(choices[computerChoiceIndex]);

	if (choices[computerChoiceIndex] === choices[0]) {
		updateScore(human);
	} else if (choices[computerChoiceIndex] === choices[2]) {
		updateScore(computer);
	}

	decideWinner();
});

human.view.choices.scissors.addEventListener("click", () => {
	let computerChoiceIndex = computer.model.decide();

	human.view.displayChoice(choices[2]);
	computer.view.displayChoice(choices[computerChoiceIndex]);

	if (choices[computerChoiceIndex] === choices[0]) {
		updateScore(computer);
	} else if (choices[computerChoiceIndex] === choices[1]) {
		updateScore(human);
	}

	decideWinner();
});

// -- functions -- //
function updateScore(winner: typeof human | typeof computer) {
	winner.model.score++;
	winner.view.displayScore(winner.model);
}

function decideWinner() {
	const winningScore = parseInt(view.rounds.value);

	if (
		winningScore === human.model.score ||
		winningScore === computer.model.score
	) {
		if (winningScore === human.model.score) {
			view.displayWinner(human.model);
		} else {
			view.displayWinner(computer.model);
		}

		toggleButtonsState(true);
	}
}

function reset() {
	toggleButtonsState(false);

	human.model.score = 0;
	human.view.displayScore(human.model);
	human.view.displayChoice(blankBackground);

	computer.model.score = 0;
	computer.view.displayScore(computer.model);
	computer.view.displayChoice(blankBackground);

	view.removeWinnerDisplay();
}

function toggleButtonsState(disable: boolean) {
	for (let key in human.view.choices) {
		human.view.choices[key].disabled = disable;
	}
}
