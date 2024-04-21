function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

function playRound(playerSelection, computerSelection) {
    // Convert both selections to lowercase for case-insensitive comparison
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
  
    // Define all possible outcomes in a switch statement
    switch (player) {
      case 'rock':
        switch (computer) {
          case 'rock':
            return "It's a tie! Both chose Rock.";
          case 'paper':
            return "You Lose! Paper beats Rock.";
          case 'scissors':
            return "You Win! Rock beats Scissors.";
        }
      case 'paper':
        switch (computer) {
          case 'rock':
            return "You Win! Paper beats Rock.";
          case 'paper':
            return "It's a tie! Both chose Paper.";
          case 'scissors':
            return "You Lose! Scissors beats Paper.";
        }
      case 'scissors':
        switch (computer) {
          case 'rock':
            return "You Lose! Rock beats Scissors.";
          case 'paper':
            return "You Win! Scissors beats Paper.";
          case 'scissors':
            return "It's a tie! Both chose Scissors.";
        }
      default:
        return "Invalid selection. Please choose 'Rock', 'Paper', or 'Scissors'.";
    }
  }
  
  console.log(playRound('Rock', 'Scissors')); // Output: "You Win! Rock beats Scissors."
  console.log(playRound('Paper', 'Rock'));    // Output: "You Win! Paper beats Rock."
  console.log(playRound('Scissors', 'Scissors')); // Output: "It's a tie! Both chose Scissors."
  
  function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    // Play five rounds
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Round " + round + ": Choose Rock, Paper, or Scissors:");
      const computerSelection = getComputerChoice();
  
      console.log("You chose: " + playerSelection);
      console.log("Computer chose: " + computerSelection);
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.startsWith("You Win")) {
        playerScore++;
      } else if (result.startsWith("You Lose")) {
        computerScore++;
      }
    }
  
    // Report final score and winner
    console.log("Game over! Final score:");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Sorry, you lose the game. Better luck next time!");
    } else {
      console.log("It's a tie! The game ends in a draw.");
    }
  }
  
  // Call the playGame function to start the game
  playGame();