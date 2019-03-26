// array with characters to choose from
var mortKomChar = ["Morpheus", "Trinity", "Agent Smith"];

// this creates a var and picks a random name from mortKomChar array
var randomChar = mortKomChar[Math.floor(Math.random() * mortKomChar.length)];

//   document.body.innerHTML = randomChar;
// creates an array for the char chosen and replaces with dashes
var pickdChar = [];
// // Loop through the array we just set up.
for (var i = 0; i < randomChar.length; i++) {
} pickdChar[i] = "-"

//var holds remaining letters
var reaminingLetters = randomChar.length;

var attempts = 11;

for (var i = 11; i < attempts.length; i--){
    
}
if (attempts == 0) {
    alert("GAME OVER");
}



    // document.onkeyup = function (event) {
    //     var userKeys = event.key;


    //     if (userKeys === "h") {
    //         car.honk();
    //         writeCarStats();
    //         document.getElementById("demo").innerHTML = "h";
    //     } if (userKeys === "d") {
    //         car.driveToWork();
    //         writeCarStats();
    //         document.getElementById("demo").innerHTML = "d";
    //     } else if (userKeys === "w") {
    //         car.driveAroundWorld();
    //         writeCarStats();
    //     } else if (userKeys === "t") {
    //         car.getTuneUp();
    //         writeCarStats();
    //     }



        // if (userKeys === "h") {
        //   console.log(car.reWriteStats())
        // }
