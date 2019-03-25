var martrixChars = ["Morpheus", "Trinity", "Agent Smith"];
  
  var randomChar = martrixChars[Math.floor(Math.random()*martrixChars.length)];
  
  document.body.innerHTML = randomChar;

// // Loop through the array we just set up.
// for (var i = 0; i < nums.length; i++) {
//     // If the current number is greater than 2..
//     if (nums[i] > 2) {
//       // Log "number is greater than 2".
//       console.log(nums[i] + " is greater than 2");
//     }

    var car = {
        make: "Honda",
        model: "Fit",
        color: "Blue Raspberry",
        mileage: 3000,
        isWorking: true,

        driveToWork: function () {

            console.log("Old Mileage: " + this.mileage);

            this.mileage = this.mileage + 8;

            console.log("New mileage: " + this.mileage);
        },

        driveAroundWorld: function () {

            console.log("Old Mileage: " + this.mileage);

            this.mileage = this.mileage + 24000;

            console.log("New Mileage: " + this.mileage);
            console.log("Car needs a tuneup!");

            this.isWorking = false;
        },

        getTuneUp: function () {
            console.log("Car is ready to go!");
            this.isWorking = true;
        },

        honk: function () {
            console.log("Honk! Honk!");
        }
    }

    function writeCarStats() {
        console.log("Make: " + car.make);
        console.log("Model: " + car.model);
        console.log("Color: " + car.color);
        console.log("Milage: " + car.mileage);
        console.log("Car works: " + car.isWorking);
        // console.log("Make: " + car.make);
    }

    document.onkeyup = function (event) {
        var userKeys = event.key;


        if (userKeys === "h") {
            car.honk();
            writeCarStats();
            document.getElementById("demo").innerHTML = "h";
        } if (userKeys === "d") {
            car.driveToWork();
            writeCarStats();
            document.getElementById("demo").innerHTML = "d";
        } else if (userKeys === "w") {
            car.driveAroundWorld();
            writeCarStats();
        } else if (userKeys === "t") {
            car.getTuneUp();
            writeCarStats();
        }



        // if (userKeys === "h") {
        //   console.log(car.reWriteStats())
        // }
    }