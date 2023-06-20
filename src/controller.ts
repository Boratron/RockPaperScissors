import { HumanModel, ComputerModel } from "./model.js";
import { HumanView, ComputerView, View } from "./view.js";

const blankBackground = "./images/black_background.png";
const choices = [
	"./images/rock.png",
	"./images/paper.png",
	"./images/scissors.png",
];

export default class Controller {
	human: { model: HumanModel; view: HumanView };
	computer: { model: ComputerModel; view: ComputerView };
	view: View;

	constructor() {
		this.human = {
			model: new HumanModel(),
			view: new HumanView(),
		};
		this.computer = {
			model: new ComputerModel(),
			view: new ComputerView(),
		};
		this.view = new View();

		this.view.rounds.addEventListener("change", this.reset);
		this.view.reset.addEventListener("click", this.reset);
		this.human.view.choices.rock.addEventListener("click", () => {
			let computerChoiceIndex = this.computer.model.decide();

			this.human.view.displayChoice(choices[0]);
			this.computer.view.displayChoice(choices[computerChoiceIndex]);

			if (choices[computerChoiceIndex] === choices[1]) {
				this.updateScore(this.computer);
			} else if (choices[computerChoiceIndex] === choices[2]) {
				this.updateScore(this.human);
			}

			this.decideWinner();
		});
		this.human.view.choices.paper.addEventListener("click", () => {
			let computerChoiceIndex = this.computer.model.decide();

			this.human.view.displayChoice(choices[1]);
			this.computer.view.displayChoice(choices[computerChoiceIndex]);

			if (choices[computerChoiceIndex] === choices[0]) {
				this.updateScore(this.human);
			} else if (choices[computerChoiceIndex] === choices[2]) {
				this.updateScore(this.computer);
			}

			this.decideWinner();
		});
		this.human.view.choices.scissors.addEventListener("click", () => {
			let computerChoiceIndex = this.computer.model.decide();

			this.human.view.displayChoice(choices[2]);
			this.computer.view.displayChoice(choices[computerChoiceIndex]);

			if (choices[computerChoiceIndex] === choices[0]) {
				this.updateScore(this.computer);
			} else if (choices[computerChoiceIndex] === choices[1]) {
				this.updateScore(this.human);
			}

			this.decideWinner();
		});
	}

	updateScore(winner: typeof this.human | typeof this.computer) {
		winner.model.score++;
		winner.view.displayScore(winner.model);
	}

	decideWinner() {
		const winningScore = parseInt(this.view.rounds.value);

		if (
			winningScore === this.human.model.score ||
			winningScore === this.computer.model.score
		) {
			if (winningScore === this.human.model.score) {
				this.view.displayWinner(this.human.model);
			} else {
				this.view.displayWinner(this.computer.model);
			}

			this.toggleButtonsState(true);
		}
	}

	toggleButtonsState(disable: boolean) {
		for (let key in this.human.view.choices) {
			this.human.view.choices[key].disabled = disable;
		}
	}

	reset = () => {
		this.toggleButtonsState(false);

		this.human.model.score = 0;
		this.human.view.displayScore(this.human.model);
		this.human.view.displayChoice(blankBackground);

		this.computer.model.score = 0;
		this.computer.view.displayScore(this.computer.model);
		this.computer.view.displayChoice(blankBackground);

		this.view.removeWinnerDisplay();
	};
}
