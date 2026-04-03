let gameSeq = [];
let userSeq = [];
let highScore = 0;
let btns = ["red", "green", "orange", "blue"]

let start = false;
let level = 0;

let h2 = document.querySelector("h2");
let highScoreDisplay = document.querySelector(".Highscore");
highScoreDisplay.innerText = `High Score is : ${highScore}`;


document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("Game is Started");
        start = true;
    }
    levelUp()
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq)
    gameFlash(randombtn);
    // console.log(randomColor);
    // console.log(randomIdx);
    // console.log(randombtn);
}

function checkAns(index) {
    // console.log("current level is  : ", level);
    // let index = level - 1
    console.log(index);
    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 3000);
        }
    } else {
        h2.innerHTML = `Game is Over!<b> Your Score was : ${level}</b> <br >press any key to start again.`;
        document.querySelector("body").style.backgroundcolor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundcolor = "white";
        }, 180);
        if (level > highScore) {
            highScore = level;
        }
        highScoreDisplay.innerText = `High Score is : ${highScore}`;
        reset();

    }
}
function btnPress() {
    // console.log(this); 
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
    // console.log(userSeq);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}