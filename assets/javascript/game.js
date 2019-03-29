window.onload = function () {

    // Creates an array that lists out all of the options.

    var wins = 0;
    var losses = 0;
    var attempts = 10;
    var currAttempts = [];
    
    // var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var computerChoices = "Thequickbrownfxjmpsvlazydg";
    // Randomly chooses a letter from the choices array. This is the Computer's guess.
    // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // var randLett = computerGuess;
    // This function is run whenever the user presses a key.
    // document.onkeyup = function (event) {

    // Determines which key was pressed.
    // var userGuess = event.key;


    // Displays wins, losses, attempts,etc
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loss").innerHTML = losses;
    document.getElementById("guessLeft").innerHTML = attempts;
    document.getElementById("guessSoFar").innerHTML = currAttempts;


    // document.addEventListener("keydown", function (event) {
    //     var input = array.computerChoices(event.keyCode);

    // checkLetter();
    document.onkeydown = function (event) {
        // document.getElementById("inputBox").onkeyup = function checkLetter(event) {
        var yourGuess = event.key;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        document.getElementById("inputBox").style.backgroundColor = "red";
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


        // document.onkeyup = function (event) {
        //     var yourGuess = event.key;
        if(event.which <= 90 && event.which >= 58){

        


        if (yourGuess === computerGuess) {
            wins++;
            attempts = 10;
            currAttempts = [];

        }

        if (attempts == 0) {
            losses++
            attempts = 11;
            currAttempts = [];
        }

        if (yourGuess !== computerGuess) {
            attempts--;
            // yourGuess = [];

            // }
        }


            // if (yourGuess !== computerGuess) {
            //     attempts--;

            // }

            // //when remaining attempts equals zero, lost is incrimented by 1; attempts is reset to 10, and used letters array is cleared
            // if (attempts == 0) {
            //     lost++;
            //     yourGuess = []
            //     attempts = 10;
            // }

            //HANDELING INCORRECT GUESSES - OUTPUT
            //this 'if' prevents a letter selected a 2nd time from being written to the usedArray again, although it still counts as a guess
            // if (yourGuess.indexOf(pGuess) >= 0) {

            // } else {
            //     //this pushes the players incorrect guess to the usedArray and writes it to the HTML
            //     yourGuess.push(pGuess);
            //     document.getElementById('pGuess').innerHTML = yourGuess;
            //     console.log(yourGuess);

            // }

            document.getElementById("wins").innerHTML = "" + wins;
            document.getElementById("loss").innerHTML = "" + losses;
            document.getElementById("guessLeft").innerHTML = "" + attempts;

            currAttempts.push(yourGuess);
            document.getElementById("guessSoFar").innerHTML = " " + currAttempts;


            // document.getElementById("wins").innerHTML = wins;
            // document.getElementById("loss").innerHTML = losses + ;
            // document.getElementById("guessLeft").innerHTML = attempts;
            




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







