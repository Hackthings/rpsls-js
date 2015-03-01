#Rock, Paper, Scissors, Lizard, Spock in Javascript


##ABOUT THE GAME

Rock, Paper, Scissors, Lizard, Spock (RPSLS) is a variant of the zero sum hand game [Rock, Paper, Scissors](http://en.wikipedia.org/wiki/Rock-paper-scissors). It was created by [Sam Kass and Karen Bryla](http://www.samkass.com/theories/RPSSL.html). Adding two more options reduces the probability that the game will result in a tie. 

Rock Paper Scissors Lizard Spock by Sam Kass and Karen Bryla is licensed under a [Creative Commons Attribution-NonCommercial 3.0 Unported License](http://creativecommons.org/licenses/by-nc/3.0/).


##ABOUT US

We are [Keri Nicole](https://github.com/knikki), [Tree Casiano](https://github.com/treecasiano), and [Jackson Stokes](https://github.com/jacksonstokespdx2). We are all part of the [Code Oregon](http://codeoregon.org/) workforce training program. 


##ABOUT THIS PROJECT

We started this project as a way to learn how to work collaboratively on GitHub. Tree had coded the game in Python which ran only in the terminal as part of the [Coursera Interactive Programming in Python](https://www.coursera.org/course/interactivepython1) course. We decided to take this code and turn it into a web application. 


##THE MATH BEHIND THE GAME

Scissors cut paper. Paper covers rock. Rock crushes lizard. Lizard poisons Spock. Spock smashes scissors. Scissors decapitate lizard. Lizard eats paper. Paper disproves Spock. Spock vaporizes rock. Rock crushes scissors.

The key idea of this program is to equate the strings "ROCK", "PAPER", "SCISSORS", "LIZARD", and "SPOCK" to numbers, as follows, and use modular arithmetic to determine which item beats the other: rock = 0; Spock = 1; paper = 2; lizard = 3; scissors = 4.

Each item will beat the item that comes before it and be vanquished by the item that comes afer. For example, paper beats Spock but is defeated by lizard.

But what about scissors vs. rock or rock vs. paper? If we imagine these numbers on a clock, with the rock in the 12 o'clock position (0), you can determine the winner like so:

* You always beat counterclockwise opponents (paper beats Spock and rock).
* You lose to clockwise opponents (paper loses to lizard and scissors).

To mathematically determine the winner, you subtract the number assigned to the second item from the number assigned to the first item.
* If the difference is 1 or 2, the first item wins.
* If the difference is 3 or 4, the second item wins.

Sometimes the difference will be a negative number. For example, if the player chooses paper and the computer chooses scissors, we have 2(scissors) - 4(paper) = -2. [Modular arithmetic](http://www.artofproblemsolving.com/Wiki/index.php/Modular_arithmetic/Introduction) is required to properly determine the winner. In this case, modulo 5 will provide the correct answer.  -2 % 5 = 3, and thus, scissors beats paper.

JavaScript does not have a true modulus operator, so we could not use it. Instead, we had to use this formula:

(Dividend-(Math.floor(Dividend/Divisor)*Divisor))

