let gameConfiguration = {
    categories: {
        fruits: [
            "Apple",
            "Blueberry",
            "Mandarin",
            "Pineapple",
            "Pomegranate",
            "Watermelon",
        ],
        movies: [
            "Forrest Gump",
            "The Dark Knight",
            "The Godfather",
            "The Shawshank Redemption",
            "Star Wars",
            "Pulp Fiction",
            "Back to the Future",
            "The Lord of the Rings",
        ],
        countries: [
            "India",
            "Hungary",
            "Kyrgyzstan",
            "Switzerland",
            "Zimbabwe",
            "Macedonia",
        ],
    },
    chosenCategory: "",
    wordToGuess: "",
    currentLives: this.defaultLives,
    startingLives: 6,
    chosenLetters: [],
};

function createLetterButtons() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    const letterContainer = document.querySelector(".letter-container");

    for (i = 0; i < alphabet.length; i++) {
        letterContainer.innerHTML += `<button type="button" class="alphabet-btn" id="btn-letter-${alphabet[i]}">${alphabet[i]}</button>`;
    }
}

function checkLetter(letter) {
    let isLetterFound = false;

    for (let i = 0; i < gameConfiguration.wordToGuess.length; i++) {
        if (gameConfiguration.wordToGuess[i].toUpperCase() === letter.toUpperCase()) {
            document.querySelector(`#word-to-guess-letter-${i}`).textContent = gameConfiguration.wordToGuess[i];
            isLetterFound = true;
        }
    }

    if (!isLetterFound) {
        gameConfiguration.currentLives--;
        document.querySelector("#message-for-lives").textContent = `Current ${gameConfiguration.currentLives} lives`;
        drawMan(gameConfiguration.currentLives);
    } else {
        let isGameWon = checkIfGameIsWon();

        if (isGameWon) {
            document.querySelector(".win-lose-message").textContent = "You Win";
        }
    }

    if (gameConfiguration.currentLives === 0) {
        document.querySelector(".win-lose-message").textContent = "You have lost all your lives. Game over";
    }

}

function checkIfGameIsWon() {
    for (let i = 0; i < gameConfiguration.wordToGuess.length; i++) {
        if (!gameConfiguration.chosenLetters.includes(gameConfiguration.wordToGuess[i].toLowerCase())) {
            return false;
        }
    }

    return true;
}

function resetGameSettings() {
    gameConfiguration.chosenLetters = [];
    gameConfiguration.currentLives = gameConfiguration.startingLives;
    document.querySelector(".win-lose-message").textContent = "";
    document.querySelector(".message-for-lives").textContent = "";
}

//Canvas
const canvasCreator = () => {
    let canvasContainer = document.getElementById("myCanvas");
    let context = canvasContainer.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;

    //For drawing lines
    const drawLine = (fromX, fromY, toX, toY) => {
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();
    };

    const head = () => {
        context.beginPath();
        context.arc(70, 30, 10, 0, Math.PI * 2, true);
        context.stroke();
    };

    const body = () => {
        drawLine(70, 40, 70, 80);
    };

    const leftArm = () => {
        drawLine(70, 50, 50, 70);
    };

    const rightArm = () => {
        drawLine(70, 50, 90, 70);
    };

    const leftLeg = () => {
        drawLine(70, 80, 50, 110);
    };

    const rightLeg = () => {
        drawLine(70, 80, 90, 110);
    };

    //initial frame
    const initialDrawing = () => {
        //clear canvas
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        //bottom line
        drawLine(10, 130, 130, 130);
        //left line
        drawLine(10, 10, 10, 131);
        //top line
        drawLine(10, 10, 70, 10);
        //small top line
        drawLine(70, 10, 70, 20);
    };

    return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
const drawMan = (count) => {
    console.log(count)
    let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
    switch (count) {
        case 5:
            head();
            break;
        case 4:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 2:
            rightArm();
            break;
        case 1:
            leftLeg();
            break;
        case 0:
            rightLeg();
            break;
        default:
            break;
    }
};

//Call to canvasCreator (for clearing previous canvas and creating initial canvas)
let { initialDrawing } = canvasCreator();
//initialDrawing would draw the frame
initialDrawing();



// function drawMan() {
//     let c = document.getElementById("myCanvas");
//     let ctx = c.getContext("2d");
//     //line1
//     ctx.moveTo(0, 10);
//     ctx.lineTo(130, 10);
//     ctx.stroke();
//     //line2
//     ctx.moveTo(130, 50);
//     ctx.lineTo(130, 10);
//     ctx.stroke();
// }
// drawMan();

// function drawHead() {
//     let c = document.getElementById("myCanvas");
//     let ctx = c.getContext("2d");
//     // head
//     ctx.beginPath();
//     ctx.arc(130, 70, 20, 0, 2 * Math.PI);
//     ctx.stroke();
// }

// function drawBody() {
//     let c = document.getElementById("myCanvas");
//     let ctx = c.getContext("2d");
//     //body
//     ctx.moveTo(130, 90);
//     ctx.lineTo(130, 130);
//     ctx.stroke();
// }
// // armLeft
// ctx.moveTo(100, 90);
// ctx.lineTo(130, 130);
// ctx.stroke();
// //armRight
// ctx.moveTo(160, 90);
// ctx.lineTo(130, 130);
// ctx.stroke();
// //leftLeg
// ctx.moveTo(130, 130);
// ctx.lineTo(90, 170);
// ctx.stroke();
// //rightLeg
// ctx.moveTo(130, 130);
// ctx.lineTo(170, 170);
// ctx.stroke();

