let play_btn = document.querySelector(".play-btn");
let computer_score=0
let player_score=0
play_btn.addEventListener("click", () => {
  let player = document.querySelector("#player").value
  let random = ["rock", "paper", "scissors"];
  let game=random[Math.round(Math.random()*random.length)]
  if(player==="rock" && game==="paper"){
    computer_score++
    document.querySelector("#score_computer").innerHTML=computer_score
}
 else if(player==="paper" && game==="rock"){
    player_score++
    document.querySelector("#score_player").innerHTML=player_score
}
if(player==="rock" && game==="scissors"){
    player_score++
 document.querySelector("#score_player").innerHTML=player_score
  }else if(player==="scissors" && game==="rock"){
    computer_score++
 document.querySelector("#score_computer").innerHTML=computer_score
  }

 if(player==="paper" && game==="scissors"){
    computer_score++
    document.querySelector("#score_computer").innerHTML=computer_score
  }else if(player==="scissors" && game==="paper"){
    player_score++
    document.querySelector("#score_player").innerHTML=player_score
  }
  

  console.log(player);
  console.log(game);

});


