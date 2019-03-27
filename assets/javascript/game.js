window.onload = function () {

    // Creates an array that lists out all of the options.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var attempts = 10;
    var currAttempts = "";
    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {

        // Determines which key was pressed.
        var userGuess = event.key;

        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // Displays wins, losses, attempts,etc
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("loss").innerHTML = losses;
        document.getElementById("guessLeft").innerHTML = attempts;
        document.getElementById("guessSoFar").innerHTML = currAttempts;
        

        // Alerts the Computer's guess.
        alert("Computer guess: " + computerGuess);
        currAttempts--;

        if (userGuess == computerGuess) {
            alert("USER WINS");
            wins++;
        }
        else {
            alert("COMPUTER WINS");
            losses++;
        }


    };
}