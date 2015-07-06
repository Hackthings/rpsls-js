//global variables
var number_of_games = 0;
var player_score = 0;
var computer_score = 0;
var player_choice = "";

// "How to Play" Lightbox Display
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

$overlay.append($image);
$("body").append($overlay);

// Capture click event on "How to Play" button
$("#rules").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  // Update overlay with rules image
  $image.attr("src", imageLocation);
  // Show the overlay
  $overlay.show();
});

// Hide overlay when clicked
$overlay.click(function() {
  $overlay.hide();
});

// ROCK PAPER LIZARD SCISSORS SPOCK GAME
// (Player vs. Computer)

// convert button click to player's choice (player_choice)
function start_turn(player_choice){
    $("#gameplay h1").text("You have chosen " + player_choice + ".");
    rpsls_game(player_choice);
}

// event listeners trigger game
  $('#rock').click(function(){
    player_choice = "rock";
    $("li").removeClass("selected");
    $(this).addClass("selected");
    start_turn(player_choice);
  });

  $('#paper').click(function(){
    $("li").removeClass("selected");
    $(this).addClass("selected");
    player_choice = "paper";
    start_turn(player_choice);
  });

  $('#scissors').click(function(){
    $("li").removeClass("selected");
    $(this).addClass("selected");
    player_choice = "scissors";
    start_turn(player_choice);
  });

  $('#lizard').click(function(){
    $("li").removeClass("selected");
    $(this).addClass("selected");
    player_choice = "lizard";
    start_turn(player_choice);
  });

  $('#spock').click(function(){
    $("li").removeClass("selected");
    $(this).addClass("selected");
    player_choice = "Spock";
    start_turn(player_choice);
  });

// HELPER FUNCTIONS

  // convert player's choice name to a number
function name_to_number(player_choice){
    if(player_choice === "rock") {
      player_choice = 0;
      return player_choice;
  } else if (player_choice === "Spock") {
      player_choice = 1;
      return player_choice;
  } else if (player_choice === "paper") {
      player_choice = 2;
      return player_choice;
  } else if (player_choice === "lizard") {
      player_choice = 3;
      return player_choice;
  } else if (player_choice === "scissors") {
      player_choice = 4;
      return player_choice;
  }
}

  // convert computer's number to a name
function number_to_name(computer_number){
    var computer_name;
    if (computer_number === 0) {
      computer_name = "rock";
      return computer_name;
    } else if (computer_number === 1){
        computer_name = "Spock";
        return computer_name;
    } else if (computer_number === 2){
        computer_name = "paper";
        return computer_name;
    } else if (computer_number === 3){
        computer_name = "lizard";
        return computer_name;
    } else if (computer_number === 4){
        computer_name = "scissors";
        return computer_name;
    }
}

// GAME CODE

function rpsls_game(player_choice) {
    var computer_choice;
    var difference;
    var player_number;

    // convert player's choice (player_choice) to player_number using the function name_to_number()
    player_number = name_to_number(player_choice);

    // compute random guess for computer_number using random.randrange()
    var computer_number = Math.floor(Math.random(0, 5) * 5);

    // convert comp_number to comp_choice using the function number_to_name()
    computer_choice = number_to_name(computer_number);

    // output the message for computer's choice
    $("#gameplay h2").text("The computer chose " + computer_choice + ".");

    // compute difference between computer_number and player_number modulo 5
    difference = ((player_number-computer_number)-(Math.floor((player_number-computer_number)/5)*5));
    number_of_games +=1;

// determine winner, output winner message
    var outcome = $('.outcome h2');
    var wins = $('.wins h2');
    var losses = $('.losses h2');
    if (difference === 1 || difference === 2) {
        player_score += 1;
        outcome.html("You win! " + player_choice.charAt(0).toUpperCase() + player_choice.slice(1) + " beats " + computer_choice + "!");
        wins.html(player_score);
        losses.html(computer_score);

    } else if (difference === 3 || difference === 4) {
        computer_score +=1;
        outcome.html("Computer wins! " + computer_choice.charAt(0).toUpperCase() + computer_choice.slice(1) + " beats " + player_choice + "!");
        wins.html(player_score);
        losses.html(computer_score);

    } else {
        outcome.html("No one wins. Try again!");
    }

    // reset game scores
    $('.reset').click(function() {
        number_of_games = 0;
        player_score = 0;
        computer_score = 0;
        $("#gameplay h1").text("Choose your weapon!");
        $("#gameplay h2").text("");
        outcome.html("");
        $("li").removeClass("selected");
        wins.html(player_score);
        losses.html(computer_score);
    });
}
