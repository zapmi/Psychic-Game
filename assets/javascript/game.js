window.onload = function () {

    // Creates an array that lists out all of the options.

    var wins = 0;
    var losses = 0;
    var attempts = 10;
    var currAttempts = [];


    var computerChoices = "Thequickbrownfxjmpsvlazydg";

    // Displays wins, losses, attempts,etc
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loss").innerHTML = losses;
    document.getElementById("guessLeft").innerHTML = attempts;
    document.getElementById("guessSoFar").innerHTML = currAttempts;



    document.onkeydown = function (event) {
        var yourGuess = event.key;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        if (event.which <= 90 && event.which >= 58) {
            document.getElementById("inputBox").style.backgroundColor = "red";


            if (yourGuess === computerGuess) {
                wins++;
                attempts = 10;
                currAttempts = [];

            }

            else if (attempts == 0) {
                losses++
                attempts = 11;
                currAttempts = [];
            }

            if (yourGuess !== computerGuess) {
                attempts--;

            }

            // if (yourGuess == currAttemptsx) {
            //     alert("YOU ALREADY GUESSED THAT");
            // }
            if (wins == 10 && losses > wins) {
                alert("YOU WIN!!");
            }
            else if (losses == 10) {
                alert("GAME OVER!!");
            }


            document.getElementById("wins").innerHTML = "" + wins;
            document.getElementById("loss").innerHTML = "" + losses;
            document.getElementById("guessLeft").innerHTML = "" + attempts;
            currAttempts.push(yourGuess);
            document.getElementById("guessSoFar").innerHTML = " " + currAttempts;





        }






        // attempts = attempts - 1;

        // document.getElementById("attempts").innerHTML = attempts;
        // yourGuess.push(userChoice); //append user's choice to array yourGuess

        // console.log("Your guesses so far: " + yourGuess); //test

        // document.getElementById("your-guesses").innerHTML = yourGuess;

        // console.log("Guesses Left: " + guessesLeft); //test

        // noGuessesLeft();

    }
};







