// initializations
const blankBackground = "images/black_background.png";
const choices = ["images/rock.png", "images/paper.png", "images/scissors.png"];

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
view.winningScoreSelection.addEventListener("change", reset);

human.view.inputs.rockImage.addEventListener("click", () => {
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

human.view.inputs.paperImage.addEventListener("click", function () {
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

human.view.inputs.scissorsImage.addEventListener("click", function () {
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

view.resetButton.addEventListener("click", reset);

// functions
function updateScore(winner) {
	winner.model.score++;
	winner.view.displayScore(winner.model);
}

function decideWinner() {
	let winningScore = parseInt(view.winningScoreSelection.value);

	if (
		winningScore === human.model.score ||
		winningScore === computer.model.score
	) {
		let winnerLabel = document.createElement("p");

		if (winningScore === human.model.score) {
			winnerLabel.innerText = "You win";
			winnerLabel.style.color = "#7cfc00";
		} else {
			winnerLabel.innerText = "Computer wins";
			winnerLabel.style.color = "#dc143c";
		}

		toggleHumanInputs(true);
		view.scoresDisplay.appendChild(winnerLabel);
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

	if (view.scoresDisplay.children.length === 3) {
		view.scoresDisplay.removeChild(view.scoresDisplay.lastChild);
	}
}

function toggleHumanInputs(disable) {
	for (let key in human.view.inputs) {
		human.view.inputs[key].disabled = disable;
	}
}
