// your code here...
let nobat = 'X';
let isEnd = false;
let gameBoard = ['','','','','','','','',''];
setStatus();

let game = document.querySelector(".game--container");
let restart = document.querySelector(".game--restart");

game.addEventListener('click',() => {
    if (!isEnd){
        let index = event.target.getAttribute('data-cell-index');
        if (gameBoard[index] === ''){
            fillBoard(index);
        }
        event.target.innerHTML = gameBoard[index];
    }
    checkEnd();
});


// restart event
restart.addEventListener('click', () => {
    gameBoard = ['','','','','','','','',''];
    nobat = 'X';
    isEnd = false;
    let gameCells = document.querySelectorAll(".cell");
    for (cell of gameCells){
        cell.innerHTML = ''
    }
    setStatus();
});


// set turn content
function setStatus() {

    if (nobat === 'X'){
        document.querySelector(".game--status").innerHTML = "It's X's turn";
    } else {
        document.querySelector(".game--status").innerHTML = "It's O's turn";
    }
}

// fill board of game
function fillBoard(index) {
    gameBoard[index] = nobat;
    if (nobat === 'X'){
        nobat = 'O'
    } else {
        nobat = 'X'
    }
    setStatus();
}


function hasNull() {
    for (i of gameBoard){
        if (i === ''){
            return true;
        }
    }
    return false;
}

// check game is end
function checkEnd() {
    if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] === 'X') {
        document.querySelector(".game--status").innerHTML = "Player X has won";
        isEnd = true;
    } else if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] === 'O') {
        document.querySelector(".game--status").innerHTML = "Player O has won";
        isEnd = true;
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] === 'X') {
        document.querySelector(".game--status").innerHTML = "Player X has won";
        isEnd = true;
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] === 'O') {
        document.querySelector(".game--status").innerHTML = "Player O has won";
        isEnd = true;
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] === 'X') {
        document.querySelector(".game--status").innerHTML = "Player X has won";
        isEnd = true;
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] === 'O') {
        document.querySelector(".game--status").innerHTML = "Player O has won";
        isEnd = true;
    }

    else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] === 'X') {
        document.querySelector(".game--status").innerHTML = "Player X has won";
        isEnd = true;
    } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] === 'O') {
        document.querySelector(".game--status").innerHTML = "Player O has won";
        isEnd = true;
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] === 'X') {
        document.querySelector(".game--status").innerHTML = "Player X has won";
        isEnd = true;
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] === 'O') {
        document.querySelector(".game--status").innerHTML = "Player O has won";
        isEnd = true;
    } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] === 'X') {
        document.querySelector(".game--status").innerHTML = "Player X has won";
        isEnd = true;
    } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] === 'O') {
        document.querySelector(".game--status").innerHTML = "Player O has won";
        isEnd = true;
    }
    else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] === 'X') {
        document.querySelector(".game--status").innerHTML = "Player X has won";
        isEnd = true;
    } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] === 'O') {
        document.querySelector(".game--status").innerHTML = "Player O has won";
        isEnd = true;
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] === 'X') {
        document.querySelector(".game--status").innerHTML = "Player X has won";
        isEnd = true;
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] === 'O') {
        document.querySelector(".game--status").innerHTML = "Player O has won";
        isEnd = true;
    }
    else if (!(hasNull())) {
        document.querySelector(".game--status").innerHTML = "Game ended in a draw";
        isEnd = true;
    }
}