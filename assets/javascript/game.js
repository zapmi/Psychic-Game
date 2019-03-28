window.onload = function () {

    // Creates an array that lists out all of the options.
    
    var wins = 0;
    var losses = 0;
    var attempts = 10;
    // var currAttempts = "";
    var yourGuess = [];
    var computerChoices = "Thequickbrownfxjmpsvlazydg";
    // Randomly chooses a letter from the choices array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // var randLett = computerGuess;
    // This function is run whenever the user presses a key.
    // document.onkeyup = function (event) {

    // Determines which key was pressed.
    // var userGuess = event.key;


    // Displays wins, losses, attempts,etc
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loss").innerHTML = losses;
    document.getElementById("guessLeft").innerHTML = attempts;
    // document.getElementById("guessSoFar").innerHTML = currAttempts;


    // document.addEventListener("keydown", function (event) {
    //     var input = array.computerChoices(event.keyCode);

    checkLetter();

    function checkLetter() {

        // document.getElementById("inputBox").addEventListener("keydown", myFunction);

        // function myFunction() {
        //     // document.getElementById("inputBox").style.backgroundColor = "red";
        //     // var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

        //     if (yourGuess === randLett) {
        //         attempts = 10;
        //         // randLett = computerGuess;
        //         currAttempts = "";
        //         wins++;
        //     }

        //     else {

        document.onkeyup = function (event) {
            var yourGuess = event.key;

            if (yourGuess === computerGuess) {
                wins++;
                attempts = 10;
                yourGuess = [];
                // } else {
                //     attempts--;
                //     // guessLeft--;
                // }

                // if (attempts === 0) {
                //     losses++

                if (yourGuess !== computerGuess) {
                    attempts--;

                }

                //when remaining attempts equals zero, lost is incrimented by 1; attempts is reset to 10, and used letters array is cleared
                if (attempts == 0) {
                    lost++;
                    yourGuess = []
                    attempts = 10;
                }

                //HANDELING INCORRECT GUESSES - OUTPUT
                //this 'if' prevents a letter selected a 2nd time from being written to the usedArray again, although it still counts as a guess
                if (yourGuess.indexOf(pGuess) >= 0) {

                } else {
                    //this pushes the players incorrect guess to the usedArray and writes it to the HTML
                    yourGuess.push(pGuess);
                    document.getElementById('pGuess').innerHTML = yourGuess;
                    console.log(yourGuess);

                }




                document.getElementById("wins").innerHTML = wins;
                document.getElementById("loss").innerHTML = losses;
                document.getElementById("guessLeft").innerHTML = attempts;
                // document.getElementById("guessSoFar").innerHTML = currAttempts;


                // document.getElementById('wins').innerHTML = "Wins: " + wins;
                // document.getElementById('losses').innerHTML = "losses: " + losses;
                // document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

            }

        }




        // attempts = attempts - 1;

        // document.getElementById("attempts").innerHTML = attempts;
        // yourGuess.push(userChoice); //append user's choice to array yourGuess

        // console.log("Your guesses so far: " + yourGuess); //test

        // document.getElementById("your-guesses").innerHTML = yourGuess;

        // console.log("Guesses Left: " + guessesLeft); //test

        // noGuessesLeft();

    }





}
