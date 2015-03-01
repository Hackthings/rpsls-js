//global functions
var number_of_games = 0;
var player_score = 0;
var computer_score = 0;


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

//  convert button click to player's choice (player_name)

var player_name = "";

function start_game(player_name){
    $("li").removeClass("selected")
    $(this).addClass("selected")
    $("#gameplay h1").text("You have chosen " + player_name + ".");
    rpsls_game(player_name);
}

// event listeners trigger game
  $('#rock').click(function(){
    player_name = "rock";
    start_game(player_name);
  });

  $('#paper').click(function(){
    player_name = "paper";
    start_game(player_name);
  });

  $('#scissors').click(function(){
    player_name = "scissors";
    start_game(player_name);
  });

  $('#lizard').click(function(){
    player_name = "lizard";
    start_game(player_name);
  });

  $('#spock').click(function(){
    player_name = "Spock";
    start_game(player_name);
  });

// HELPER FUNCTIONS

  // convert player's choice name to a number

function name_to_number(player_name){

    if(player_name === "rock") {
      player_name = 0;
      return player_name;
  } else if (player_name === "Spock") {
      player_name = 1;
      return player_name;
  } else if (player_name === "paper") {
      player_name = 2;
      return player_name;
  } else if (player_name === "lizard") {
      player_name = 3;
      return player_name;
  } else if (player_name === "scissors") {
      player_name = 4;
      return player_name;
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

function rpsls_game(player_name) {
    var computer_choice;
    var difference;
    var player_number;

    // convert player's choice (player_name) to player_number using the function name_to_number()
    player_number = name_to_number(player_name);

    // compute random guess for computer_number using random.randrange()
    var computer_number = Math.floor(Math.random(0, 5) * 5);

    // convert comp_number to comp_choice using the function number_to_name()
    computer_choice = number_to_name(computer_number);

    // output the message for computer's choice
    console.log("Computer chooses " + computer_choice + ".");
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
        outcome.html("You win! " + player_name + " beats " + computer_choice + "!");
        wins.html(player_score);
        losses.html(computer_score);

    } else if (difference === 3 || difference === 4) {
        computer_score +=1;
        outcome.html("Computer wins! " + computer_choice + " beats " + player_name + "!");
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
        $("li").removeClass("selected")
        wins.html(player_score);
        losses.html(computer_score);
    });
}
