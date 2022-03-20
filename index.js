const items = ["rock", "paper", "scissor"];
let choiceP = "";
let choiceC = "";
let player = 0;
let computer = 0;

function ft_rock(){
    choiceP = items[0];
    score();
}
function ft_scissor(){
    choiceP = items[2];
    score();
}
function ft_paper(){
    choiceP = items[1];
    score();
}

const cc = document.getElementById("c-choice");
const pp = document.getElementById("p-choice");
const outcome = document.getElementById("status");

const playerScore = document.getElementById("pl");
const computerScore = document.getElementById("pc");

outcome.innerHTML =`<p
                    style="color: green;
                    font-size: 42px">
                    LET'S PLAY!</p>`;

function sortChoice(choiceP, choiceC){
    choiceC = items[Math.floor(Math.random() * items.length)];
    if(choiceP === items[0] && choiceC === items[1]){
        computer++;
        computerScore.innerText = "COMPUTER = " + computer;
        outcome.innerText = "COMPUTER WINS THIS ROUND!";
    }else if(choiceP === items[0] && choiceC === items[2]){
        player++;
        playerScore.innerText = "PLAYER = " + player;
        outcome.innerText = "PLAYER WINS THIS ROUND!";
    }else if(choiceP === items[1] && choiceC === items[0]){
        player++;
        playerScore.innerText =  "PLAYER = " + player;
        outcome.innerText = "PLAYER WINS THIS ROUND!";
    }else if(choiceP === items[1] && choiceC === items[2]){
        computer++;
        computerScore.innerText = "COMPUTER = " + computer;
        outcome.innerText = "COMPUTER WINS THIS ROUND!";
    }else if(choiceP === items[2] && choiceC === items[0]){
        computer++;
        computerScore.innerText = "COMPUTER = " + computer;
        outcome.innerText = "COMPUTER WINS THIS ROUND!";
    }else if(choiceP === items[2] && choiceC === items[1]){
        player++;
        playerScore.innerText =  "PLAYER = " + player;
        outcome.innerText = "PLAYER WINS THIS ROUND!";
    }else{
        outcome.innerText = "IT'S A TIE!";
    }
    cc.innerText = choiceC;
    pp.innerText = choiceP;
}

function disableButton(){
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
}

function checkWinner(){
    if(player === 5){
        outcome.innerHTML =`
        <div id="xx>
        <p>
        <span class="pWin" style="color:green; font-size: 52px">PLAYER </span>
        WINS!</p>
        <button id="PA" onclick="reset()">PLAY AGAIN?</button>
        </div>`;
        disableButton();
    }else if(computer === 5){
         outcome.innerHTML =`
         <div id="xx>
         <p>
         <span class="cWin" style="color:red; font-size: 52px">COMPUTER </span>
         WINS!</p>
         <button id="PA" onclick="reset()">PLAY AGAIN?</button>
         </div>`
         disableButton();
     }
}

function reset(){
    player = 0;
    computer = 0;
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    playerScore.innerText = "PLAYER = " + player;
    computerScore.innerText = "COMPUTER = " + computer;
    cc.innerText = "";
    pp.innerText = "";
    outcome.innerHTML =`<p 
                        style="color: green; 
                        font-size: 42px">
                        LET'S GO!</p>`;
}

function score(){
    sortChoice(choiceP, choiceC);
    checkWinner();
}