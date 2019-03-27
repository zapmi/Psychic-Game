window.onload = function () {

    // Creates an array that lists out all of the options.
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var attempts = 10;
    var currAttempts = "";
    // var yourGuess = [];
    // Randomly chooses a letter from the choices array. This is the Computer's guess.
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


    // document.addEventListener("keydown", function (event) {
    //     var input = array.computerChoices(event.keyCode);

    // checkLetter();

    // function checkLetter() {

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

    document.onkeypress = function (event) {
        var yourGuess = event.key;

        if (yourGuess === randLett) {
            wins++;
        } else {
            attempts--;
            guessLeft--;
        }

        if (attempts === 0) {
            losses++




            document.getElementById("wins").innerHTML = wins;
            document.getElementById("loss").innerHTML = losses;
            document.getElementById("guessLeft").innerHTML = attempts;
            document.getElementById("guessSoFar").innerHTML = currAttempts;
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

};






