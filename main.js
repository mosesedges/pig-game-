var scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// document.querySelectorAll(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function() {


    dice = Math.floor(Math.random() * 6) + 1;
    let dicem = Math.floor(Math.random() *
        6) + 1;

    let bothDice = dice + dicem;


    const d1 = document.getElementById("dice-1");
    d1.src = `dice-${dice}.png`;

    const d2 = document.getElementById("dice-2");
    d2.src = "dice-" + dicem + ".png";

    if (bothDice !== 12) {
        roundScore += bothDice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;

    } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector(".current-0").textContent = "0";
        document.querySelector(".current-1").textContent = "0";
    }

});