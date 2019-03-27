window.onload = function () {

    // Creates an array that lists out all of the options.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var attempts = 10;
    var currAttempts = "";
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var randLett = computerGuess;
    // This function is run whenever the user presses a key.
    // document.onkeyup = function (event) {

        // Determines which key was pressed.
        // var userGuess = event.key;
        

            

            // Displays wins, losses, attempts,etc
            document.getElementById("wins").innerHTML = wins;
            document.getElementById("loss").innerHTML = losses;
            document.getElementById("guessLeft").innerHTML = attempts;
            document.getElementById("guessSoFar").innerHTML = currAttempts;


            document.addEventListener("keydown", function (e) {
                var input = String.fromCharCode(e.keyCode);


            // // Alerts the Computer's guess.
            // alert("Computer guess: " + computerGuess);
            // currAttempts--;

            // if (currAttempts !== "") {
            //     currAttempts = currAttempts + ", " + input.toLowerCase();
            // } else {
            //     currAttempts = input.toLowerCase();
            // }
            if (input.toLowerCase() === randLett) {
                attempts = 10;
                randLett = computerGuess;
                currAttempts = "";
                wins++;
            }

            else if (attempts === 0) {
                attempts = 10;
                randLett = computerGuess;
                currAttempts = "";
                losses++;
            }

            document.getElementById("wins").innerHTML = wins;
            document.getElementById("loss").innerHTML = losses;
            document.getElementById("guessLeft").innerHTML = attempts;
            document.getElementById("guessSoFar").innerHTML = currAttempts;


        });
    };
