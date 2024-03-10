console.log("Welcome to PlayGames.com | Tic Tac Toe");
let music = new Audio("pop-39222-[AudioTrimmer.com].mp3");
let gameover = new Audio("good-6081.mp3");
let gamedone = false;
let turn = "X";

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 7.25, 0],
        [3, 4, 5, 5, 17.25, 0],
        [6, 7, 8, 5, 27.25, 0],
        [0, 3, 6, -5, 17.25, 90],
        [1, 4, 7, 5, 17.25, 90],
        [2, 5, 8, 15, 17.25, 90],
        [0, 4, 8, 5, 17.25, 45],
        [2, 4, 6, 5, 17.25, 135],
    ];

    for (let e of wins) {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!";
            gamedone = true;
            gameover.play()
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transition = "1s";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            break;  // Added break to exit the loop once a win is found
        }
    }
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            music.play();
            checkWin();
            if (!gamedone) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
            }
        }
    });
});


// add onclick listener
document.getElementById("button1").addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gamedone = false;
    document.querySelector(".line").style.width = "0vw";
    document.querySelector(".line").style.transition = "0.5s";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
});
