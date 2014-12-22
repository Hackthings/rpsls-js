// Rock-paper-scissors-lizard-Spock
// player against computer


// This code was oriignally developed in Python after reviewing the tutorials
// from Coursera's Interactive Programming with Python Coursera course.

/* The rules of the game:

Scissors cut paper. Paper covers rock. Rock crushes lizard. Lizard poisons Spock. Spock smashes scissors. Scissors decapitate lizard. Lizard eats paper. Paper disproves Spock. Spock vaporizes rock. Rock crushes scissors.

*/

// The key idea of this program is to equate the strings
// "rock", "paper", "scissors", "lizard", "Spock" to numbers
// as follows:

// 0 - rock
// 1 - Spock
// 2 - paper
// 3 - lizard
// 4 - scissors




// Each item will beat the item that comes before it
// and be vanquished by the item that comes afer.
// For example, paper beats Spock but is defeated by lizard.

// What to do about scissors against rock or rock against paper?
// We all know paper covers rock and rock smashes scissors.
// To determine who wins the game, we imagine these numbers
// on a wheel or a clock, and we take the difference
// between the computer's choice and the player's choice
// and use module arithmetic to computer the difference

// global variables
var name = "";

  // convert player's choice name to a number

  // the name will be player's choice
  // below is just the code for assigning a number to the name variable
  // it will need to go in a function that will be called when the game starts

  switch (name) {
    case "rock":
      name = 0;
      break;
    case "spock":
      name = 1;
      break;
    case "paper":
      name = 2;
      break;
    case "lizard":
      name = 3;
      break;
    case "scissors":
      name = 4;
      break;
    default:
      // ultimately, this statement will not go to the console
      console.log("That is not one of the options. Please choose only rock, paper, scissors, lizard, or Spock.");
  }
              
  // convert computer's number to a name


// the game
