//worked on with House Hayden: Rebecca, Kadeisha, Jeffrey, and Anastasia

const btn = {
  all: document.querySelectorAll('.buttons'),
  rock: document.querySelectorAll(".rock")[0],
  paper: document.querySelectorAll(".paper")[0],
  scissors: document.querySelectorAll(".scissors")[0],
  spock: document.querySelectorAll(".spock")[0],
  lizard: document.querySelectorAll(".lizard")[0],
  reset: document.getElementById("reset")
}

const game = {
  num: document.getElementById("num"),
  botNum: document.getElementById("botNum"),
  msg: document.getElementById("msg"),
  playerScore: 0,
  botScore: 0,
  click(){
    let button = [btn.rock, btn.paper, btn.scissors, btn.spock, btn.lizard]
    button.forEach((play) =>{
      play.addEventListener("click", (e) =>{
          game.getPlay(e.target.innerHTML);
      })
    })
  },
  getPlay(userPlay){
    fetch(`/api?rpsls=${userPlay}`)
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      game.playerScore += data.playerScore
      game.botScore += data.botScore
      game.botNum.innerHTML = game.botScore
      game.num.innerHTML = game.playerScore
      game.msg.innerHTML = `Bot has chosen: ${data.play}. ${data.winLose}`
    })
  },
  printScore(){
    game.num.innerHTML = `${game.playerScore}`
    game.botNum.innerHTML = `${game.botScore}`
  },
  reset(){
      game.playerScore = 0
      game.botScore = 0
      game.printScore();
      game.msg.innerHTML = "Press a Button to Play!"
  },
}

game.click()
btn.reset.onclick = game.reset
