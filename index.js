let items = ["rock", "paper", "scissor"]
let choiceP = ""
let choiceC = ""
let player = 0
let computer = 0
let winner = 0

function ft_rock(){
    choiceP = items[0]
    score()
}
function ft_scissor(){
    choiceP = items[2]
    score()
}
function ft_paper(){
    choiceP = items[1]
    score()
}

let cc = document.getElementById("c-choice")
let pp = document.getElementById("p-choice")
let outcome = document.getElementById("status")

let playerScore = document.getElementById("pl")
let computerScore = document.getElementById("pc")

function sortChoice(choiceP, choiceC){
    choiceC = items[Math.floor(Math.random() * items.length)];
    if(choiceP === items[0] && choiceC === items[1]){
        computer++
        computerScore.innerText = "COMPUTER = " + computer
        outcome.innerText = "COMPUTER WINS THIS ROUND!"
    }else if(choiceP === items[0] && choiceC === items[2]){
        player++
        playerScore.innerText = "PLAYER = " + player
        outcome.innerText = "PLAYER WINS THIS ROUND!"
    }else if(choiceP === items[1] && choiceC === items[0]){
        player++
        playerScore.innerText =  "PLAYER = " + player
        outcome.innerText = "PLAYER WINS THIS ROUND!"
    }else if(choiceP === items[1] && choiceC === items[2]){
        computer++
        computerScore.innerText = "COMPUTER = " + computer
        outcome.innerText = "COMPUTER WINS THIS ROUND!"
    }else if(choiceP === items[2] && choiceC === items[0]){
        computer++
        computerScore.innerText = "COMPUTER = " + computer
        outcome.innerText = "COMPUTER WINS THIS ROUND!"
    }else if(choiceP === items[2] && choiceC === items[1]){
        player++
        playerScore.innerText =  "PLAYER = " + player
        outcome.innerText = "PLAYER WINS THIS ROUND!"
    }else{
        outcome.innerText = "IT'S A TIE!"
    }
    cc.innerText = choiceC
    pp.innerText = choiceP
    
}

function disableButton(){
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
}

function checkWinner(){
    if(player === 5 || computer === 5){
        outcome.innerHTML =`
        <div id="xx>
        <p>
        <span class="ply" style="color: green; font-size: 52px">PLAYER </span>
        WINS!</p>
        <button id="PA" onclick="reset()">PLAY AGAIN?</button>
        </div>`
        disableButton()
     }
}

function reset(){
    
    player = 0
    computer = 0
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    playerScore.innerText = "PLAYER = " + player
    computerScore.innerText = "COMPUTER = " + computer
    outcome.innerHTML =`<p></p>`
    cc.innerText = ""
    pp.innerText = ""
}

function score(){
    sortChoice(choiceP, choiceC)
    checkWinner()
}