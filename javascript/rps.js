//Create a list with the parameters for random computer play.
const parameterGame = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
function computerPlay(){
  //I get a random number to use as a choice of parameters.
  let aletoryNumber = getNumber();
  //Return the election of the parameter
  let election = parameterGame[aletoryNumber];
  return election;
}
//I get a random float number
let getRandomNumber = () => Math.random() * (2 - 0) + 0;

//I get a round aleatory number
function getNumber(){
  let number = Math.round(getRandomNumber());
  return number;
}

//PlayRound code.

//Check the winer of the actual game
let playerWins = (playerSelection, computerSelection) => firstWinSecond(playerSelection, computerSelection);
let computerWins = (computerSelection, playerSelection) => firstWinSecond(computerSelection, playerSelection)

function firstWinSecond(firstSelection, secondSelection){
  switch (firstSelection) {
    case "ROCK":
      return checkWinRockRules(secondSelection);
    case "SCISSORS":
      return checkwinScissorsRules(secondSelection);
    case "PAPER":
      return checkWinPaperRules(secondSelection);  
    default:
      return false;
  }
}

//Check Rock rules game
function checkWinRockRules(selection){
  switch (selection) {
    case "PAPER":
      return false;
    case "SCISSORS": 
      return true;
    default : 
      return false;
  }
}

//Check Scissors rules game
function checkwinScissorsRules(selection){
  switch (selection) {
    case "PAPER":
      return true;
    case "SCISSORS": 
      return false;
    default: 
      return false
  }
}

//Check Paper rules game
function checkWinPaperRules(selection){
  switch (selection) {
    case "PAPER":
      return false;
    case "SCISSORS": 
      return false;
    default:
      return true;
  }
}

//Play the actual round.


let isButtonId = (e) => e == "ROCK" | e == "SCISSORS" | e == "PAPER"

function getWinner(){
  if(playerScore > computerScore){
    alert(`PLAYER WINS! Player: ${playerScore} - PC: ${computerScore}`)
    reloadGame();
  }
  else if (playerScore < computerScore){
    alert(`COMPUTER WINS :( !  Player: ${playerScore} - PC: ${computerScore}`)
    reloadGame();
  }
  else{
      alert(`Nobody wins! Player: ${playerScore} - PC: ${computerScore}`)
  }
}

function play(e){
  if(! isButtonId(e.target.id)) return;
    playRound(e.target.id, computerPlay());  
}

function playRound(playerSel, PCsel){
  if (firstWinSecond(playerSel, PCsel)) {
    updatePlayerWins(PCsel);
  }
  else if (firstWinSecond(PCsel, playerSel)) {
    updatePCWins(PCsel);
  }
  else {
    updateTieDom(PCsel);
  }
}

function updateTieDom(PCsel) {
  document.getElementById('result-text').value = "TIE";
  document.getElementById('pc-election-text').value = `PC select: ${PCsel}`;
}

function updatePCWins(PCsel) {
  computerScore++;
  updatePCWinsDom(PCsel);
  checkIfPcWins();
}


function checkIfPcWins() {
  if ((computerScore == 5)) {
    alert("PC WINS");
    reloadGame();
  }
}

function updatePCWinsDom(PCsel) {
  document.getElementById('result-text').value = "PC WINS";
  document.getElementById('pc-election-text').value = `PC SELECT: ${PCsel}`;
  document.getElementById('score-text').value = `PLAYER: ${playerScore} - PC: ${computerScore}`;
}

function updatePlayerWins(PCsel) {
  playerScore++;
  updatePlayerWinsDom(PCsel);
  checkIfPlayerWins();
}


function checkIfPlayerWins() {
  if ((playerScore == 5)) {
    alert("PLAYER WINS");
    reloadGame();
  }
}

function updatePlayerWinsDom(PCsel) {
  document.getElementById('result-text').value = "PLAYER WINS";
  document.getElementById('pc-election-text').value = `PC SELECT: ${PCsel}`;
  document.getElementById('score-text').value = `PLAYER: ${playerScore} - PC: ${computerScore}`;
}


// RELOAD GAME CODE.
let reload = document.querySelector('#reload-button');
reload.addEventListener('click', reloadGame)

function reloadGame(){
  document.getElementById('result-text').value  = "";
  document.getElementById('pc-election-text').value  = "";
  document.getElementById('score-text').value  = "";
  playerScore = 0;
  computerScore = 0;
}


window.addEventListener('click', play);
play5()

