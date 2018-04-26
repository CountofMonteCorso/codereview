module.exports = function(arg1, arg2){
	var inquirer = require('inquirer');

	inquirer.prompt([
	    {
	      type: "list",
	      message: "Select an array",
	      choices: ["first", "second", "third", "fourth"],
	      name: "prompt"
	    }
	]).then(function(inquirerResponse){
		var firstArray = [1, 2, 3, 4, 3, 2, 1];
		var secondArray = [1, 100, 50, -51, 1, 1];
		var thirdArray = [20, 10, -80, 10, 10, 15, 35];
		var fourthArray = [1, 2, 3, 4, 5, 6];
		var leftSum = 0;
		var rightSum = 0;
		var answer = 0;

			if (inquirerResponse.prompt === "first") {
				console.log("Your array: " + firstArray);
				for (var i = 0; i < firstArray.length, i++){
					//Basically I want it to take the first index of the array and add one value at a time but make it skip an index and compare it to the sum of the rest of the array (barring the skipped value) and honesty, I don't know how to make it skip.  I know I could store the sums in the variables I made and compare them and then assign the remaining index as he answer variable but I couldn't find a way around he skipping part in time :/ If I did, I could use that same formula (adjusting for the right array, of course) for every array.

				}
				console.log("The number you're looking for is " + answer);
			}
			else if (inquirerResponse.prompt === "second") {
			
			}
			else if (inquirerResponse.prompt === "third") {

			}
			else if (inquirerResponse.prompt === "fourth"){

			}
		}
	);
};