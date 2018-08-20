var numberSqrs = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var footerMessageDisplay = document.querySelector("#footer-message");
var messageDisplay = document.querySelector("#message");
var pickedColor = pickColor();
var resetButton = document.getElementById("reset");
var h1 = document.querySelector(".first-header");
var footer = document.getElementById("footer");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listeners
    for (var x = 0; x < modeButtons.length; x++) {
        modeButtons[x].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberSqrs = 3 : numberSqrs = 6;
            reset();
        });
    }
    //Add Events to each Square
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                footerMessageDisplay.textContent = "Correct!"
                h1.style.backgroundColor = pickedColor;
                footer.style.backgroundColor = pickedColor;
                console.log(footer.style.backgroundColor);
                changedColors(clickedColor);
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
                footerMessageDisplay.textContent = "Try Again!";
            }
        });
    }

    resetButton.addEventListener("click", function () {
        reset();
    });

    reset();
}

//Main
for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!"
            h1.style.backgroundColor = pickedColor;
            footer.style.backgroundColor = pickedColor;
            changedColors(clickedColor);
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
}
//End Main


function reset() {
    colors = generateRandomColors(numberSqrs);
    //pick a new random color from array
    pickedColor = pickColor();

    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    footerMessageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    footer.style.backgroundColor = "steelblue";
}

function changedColors(color) {
    //loops through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    //pick random whole number use Math.floor(Math.random());
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr[i] = randomColor();
    }
    //return array
    return arr;
}

function randomColor() {
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}