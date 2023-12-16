// Selecting DOM elements
let play_btn = document.querySelector(".play-btn");
let btn = document.querySelector(".start");
let gameDiv = document.querySelector(".game-section");
let reset = document.querySelector(".reset");
let computer_score = 0;
let player_score = 0;

// Hide the game section initially
gameDiv.style.display = "none";

// Event listener for reset button
reset.addEventListener("click", () => {
  // Reload the page to reset the game
  location.reload();
});

// Event listener for start button
btn.addEventListener("click", () => {
  // Update UI to indicate the game has started
  btn.innerHTML = "game started";
  btn.disabled = true;
  btn.style.cursor = "not-allowed";
  gameDiv.style.display = "block";
});

// Event listener for play button
play_btn.addEventListener("click", () => {
  // Show reset button
  reset.style.display = "block";

  // Get player's choice from input field
  let player = document.querySelector("#player").value;

  // Array of possible game choices
  let arr_game = ["rock", "paper", "scissors"];

  // Generate a random index to pick a choice for the computer
  let random = Math.floor(Math.random() * arr_game.length);
  let game = [...arr_game][random];

  // Check if player has made a choice
  if (player !== "") {
    // Display loading indicator
    document.querySelector(".loading").style.display = "block";
    document.querySelector(".result").style.columnGap = "100px";
    // Delayed execution to simulate computer "thinking"
    setTimeout(() => {
      // Hide loading indicator
      document.querySelector(".loading").style.display = "none";

      // Display computer's and player's choices
      document.querySelector(".computer-result").src = `assets/img/${game}.png`;
      document.querySelector(".computer-result").style.display = "block";
      document.querySelector(".player-result").src = `assets/img/${player}.png`;
      document.querySelector(".player-result").style.display = "block";
      document.querySelector(".result").style.columnGap = "300px";

      // Update scores based on the game result
      if (
        (player === "rock" && game === "paper") ||
        (player === "scissors" && game === "rock") ||
        (player === "paper" && game === "scissors")
      ) {
        computer_score++;
        document.querySelector("#score_computer").innerHTML = computer_score;
      } else {
        player_score++;
        document.querySelector("#score_player").innerHTML = player_score;
      }

      // Display Toast notifications for game choices
      Toastify({
        text: `Computer Choose ${game}`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "green",
          text: "capitalize",
        },
        onClick: function () {},
      }).showToast();

      Toastify({
        text: `You Choose ${player}`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "green",
        },
        onClick: function () {},
      }).showToast();

      // Display Toast notification for a draw
      if (player === game) {
        Toastify({
          text: "Draw",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top",
          position: "center",
          stopOnFocus: true,
          style: {
            background: "red",
          },
          onClick: function () {},
        }).showToast();
      }
    }, 1500);
  } else {
    // Display Toast notification if player hasn't made a choice
    Toastify({
      text: "choose something",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "red",
      },
      onClick: function () {},
    }).showToast();
  }
});
