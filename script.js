function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").textContent = `Your choice: ${userChoice}`;
  document.getElementById("computer-choice").textContent =` Computer's choice: ${computerChoice}`;

  const result = getWinner(userChoice, computerChoice);
  document.getElementById("winner").textContent = `Result: ${result}`;

  // Play sound
  if (result === "You win!") {
    document.getElementById("sound-win").play();
  } else if (result === "Computer wins!") {
    document.getElementById("sound-lose").play();
  } else {
    document.getElementById("sound-tie").play();
  }
}

function getWinner(user, computer) {
  if (user === computer) return "It's a tie!";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}