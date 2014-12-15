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


// helper functions




  // convert player's choice name to a number


  // convert computer's number to a name






// the game

display_rules();
