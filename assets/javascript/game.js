// --- Psuedocode Starts Here! --- //

// Generate a random number to be used as the target score -- (crystals to collect). Math.floor(Math.random() * 120) + 19; 
// Remember, you must "append" the variable that stores the random numbers to the ID "crystalsToCollect". 

// Set each crystal to give a random value when clicked. That number should be between 1 - 12. Math.floor(Math.random() * 12) + 1;
// Set this value to each crystal (gem1, gem2, gem3, gem4).

//Each time a gem is clicked (onclick event), that value needs to be pushed to the Total Score section.


// Set up your variables: Wins, Losses, and Total Score. Set them to 0 to start with. 

// If totalScore = crystalsToCollect, wins++. Alert a message that says, "You WIN!"
// If totalScore > crystalsToCollect, losses++. Alert a message that says, "You LOSE!"

// Set a boolean for gameOver. If false, the user keeps playing. If true, reset the game. Create a function that starts a new game and sets everything
//(except wins and losses) to zero.

// --- Psuedocode Ends Here! --- // 


// ---- Use this function to ensure the entire page loads first before the game starts. ----- // 

$(document).ready(function () {

  // ---- List Your Variables ---- //

  var targetScore;  //  <--- This is the targetScore. The amount the player is TRYING to get to.  
  var userTotal = 0; // <--- This is the user's actual score. The amount the player ACTUALLY has. 
  var wins = 0; // <--- This variables holds the player's wins. 
  var losses = 0; // <--- This variable holds the player's losses. 

  var gameFinished = false; // <--- This variable will hold the function that makes the game reset. 

  // ---- End of Variables ---- //


  // ---- Configuring Wins & Losses ---- // 

  $('totalWins').text(wins); // <--- The variable from our HTML called 'totalWins' will be updated with the text from Wins. 
  $('totalLosses').text(losses); // <--- The variable from our HTML called 'totalLosses' will be updated with the text from Losses. 

  // ---- End of Configuring Wins & Losses ---- //


  // ---- Configuring the Crystals To Be Collected ---- //

  var randomNumber = Math.floor(Math.random() * 120) + 19;  // <--- randomNumber is going to be the variable that HOLDS the random number of crystals. We will push it to the HTML.
  $('#crystalsToCollect').text(randomNumber); // <--- This is where the randomNumber is actually pushed (made visible) to the HTML.

  // ---- End of Configuring the Crystals To Be Collected ---- //


  // ---- Setting Random Values to the Crystals --- //

  var num1 = Math.floor(Math.random() * 12) + 1  // <--- This and the next 3 lines of code do exactly as the comment above says. It sets random values.
  var num2 = Math.floor(Math.random() * 12) + 1
  var num3 = Math.floor(Math.random() * 12) + 1
  var num4 = Math.floor(Math.random() * 12) + 1

  $('#gem1').on('click', function () { // <--- This function will be repeated. It's saying that when gem1 is clicked... 
    userTotal = userTotal + num1; // <--- userTotal (the amount the user has guessed) is set to equal the amount they've guessed PLUS the value of num1.
    $('#playerScore').text(userTotal); // <--- playerScore (the user's score) is set to equal the amount they've guessed. This is basically pushing the above line of code to the HTML-- making it visibile. 
    if (userTotal == randomNumber) { // <--- Now, an 'if' statement. If the  user clicks this gem and that adds up to the amount the user guessed equals to the randomNumber we generated...
      winner(); // <--- ...run this function. This function is what happens when the user wins. 
    }
    else if (userTotal > randomNumber) { // <--- 'Else' if the userTotal (the amount the user has guessed) is greater than randomNumber on this click...
      loser(); // <--- Run this function that tells the user they've lost. 
    }
  })

  // --- The subsequent lines of codes all do the same thing for the rest of the gems. --- //

  $('#gem2').on('click', function () {
    userTotal = userTotal + num2;
    $('#playerScore').text(userTotal);
    if (userTotal == randomNumber) {
      winner();
    }
    else if (userTotal > randomNumber) {
      loser();
    }
  })

  $('#gem3').on('click', function () {
    userTotal = userTotal + num3;
    $('#playerScore').text(userTotal);
    if (userTotal == randomNumber) {
      winner();
    }
    else if (userTotal > randomNumber) {
      loser();
    }
  })

  $('#gem4').on('click', function () {
    userTotal = userTotal + num4;
    $('#playerScore').text(userTotal);
    if (userTotal == randomNumber) {
      winner();
    }
    else if (userTotal > randomNumber) {
      loser();
    }
  })

  // --- Now, let's code the functions for what happens when the user wins. --- // 

  function winner() {
    alert("CONGRATULATIONS, you won! 👍");
    wins++
    $('#totalWins').text(wins);
    gameFinished = true;
    gameReset();
  }

  // --- And when the user loses... --- //

  function loser() {
    alert("BOOO, you lost! 👎");
    losses++
    $('#totalLosses').text(losses);
    gameFinished = true;
    gameReset();
  }

  // --- Now, let's tackle that "gameFinished" variable. We'll create a function that will trigger a game reset. --- //

  function gameReset() { // <--- Create a new function called gameReset. This will store all the things the game will do when it, well, resets! 
    if (gameFinished) // <--- If gameFinished = true... 
      updateDisplay(); // <--- Oh... we're being referred to another function... Let's see what that one says!
  }

  function updateDisplay() {  // <--- Welcome to the updateDisplay function.

    userTotal = 0; // <--- Here, we're resetting the user's score to 0 to start with. 

    randomNumber = Math.floor(Math.random() * 120) + 19; // <--- Look familiar? This and the code directly underneath are doing the same thing as earlier. Grabbing a new random number and pushing it to the display. 
    $('#crystalsToCollect').text(randomNumber);


    var num1 = Math.floor(Math.random() * 12) + 1  // <--- Another familiar code! Same with the three below it. They all give the gems new *random* values. 
    var num2 = Math.floor(Math.random() * 12) + 1
    var num3 = Math.floor(Math.random() * 12) + 1
    var num4 = Math.floor(Math.random() * 12) + 1

    $('#playerScore').text(userTotal); // <--- Once again resetting the playerScore to equal the user's total. This will dynamically change. 
    $('#totalWins').text = wins; // <--- The only thing that WON'T change when the game resets are your wins...
    $('#totalLosses').text = losses; // <--- ...and losses! So you can have a constant reminder of failure forever before you. :)
  }

});

