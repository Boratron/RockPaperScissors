const blank = 'images/black_background.png';

const choices = [
    'images/rock.png',
    'images/paper.png',
    'images/scissors.png'
];

winningScoreSelection.addEventListener('change', reset);

humanView.inputs.rockImage.addEventListener('click', function () {
    let computerChoiceIndex = computerModel.decide();

    humanView.choiceDisplay.src = choices[0];
    computerView.choiceDisplay.src = choices[computerChoiceIndex];

    if (choices[computerChoiceIndex] === choices[1]) {
        updateScore(computerModel, computerView);
    } else if (choices[computerChoiceIndex] === choices[2]) {
        updateScore(humanModel, humanView);
    }

    decideWinner();
});

humanView.inputs.paperImage.addEventListener('click', function () {
    let computerChoiceIndex = computerModel.decide();

    humanView.choiceDisplay.src = choices[1];
    computerView.choiceDisplay.src = choices[computerChoiceIndex];

    if (choices[computerChoiceIndex] === choices[0]) {
        updateScore(humanModel, humanView);
    } else if (choices[computerChoiceIndex] === choices[2]) {
        updateScore(computerModel, computerView);
    }

    decideWinner();
});

humanView.inputs.scissorsImage.addEventListener('click', function () {
    let computerChoiceIndex = computerModel.decide();
    
    humanView.choiceDisplay.src = choices[2];
    computerView.choiceDisplay.src = choices[computerChoiceIndex];

    if (choices[computerChoiceIndex] === choices[0]) {
        updateScore(computerModel, computerView);
    } else if (choices[computerChoiceIndex] === choices[1]) {
        updateScore(humanModel, humanView);
    }

    decideWinner();
});

resetButton.addEventListener('click', reset);

function updateScore(winnerModel, winnerView) {
    winnerModel.score++;
    winnerView.scoreLabel.innerText = winnerModel.score;
}

function decideWinner() {
    let winningScore = parseInt(winningScoreSelection.value);

    if (winningScore === humanModel.score || winningScore === computerModel.score) {
        let winnerLabel = document.createElement('p');

        if (winningScore === humanModel.score) {
            winnerLabel.innerText = 'You win';
            winnerLabel.style.color = '#7cfc00';
        } else {
            winnerLabel.innerText = 'Computer wins';
            winnerLabel.style.color = '#dc143c';
        }

        toggleHumanInputs(true);
        scoresDisplay.appendChild(winnerLabel);
    }
}

function reset() {
    toggleHumanInputs(false);

    humanModel.score = 0;
    humanView.scoreLabel.innerText = humanModel.score;
    humanView.choiceDisplay.src = blank;

    computerModel.score = 0;
    computerView.scoreLabel.innerText = computerModel.score;
    computerView.choiceDisplay.src = blank;

    if (scoresDisplay.children.length === 3) {
        scoresDisplay.removeChild(scoresDisplay.lastChild);  
    } 
}

function toggleHumanInputs(disable) {
    for (let key in humanView.inputs) {
        humanView.inputs[key].disabled = disable;
    }
}