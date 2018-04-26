module.exports = function(arg1, arg2){
	var input = process.argv[2];
	var output = []; 
	var sNumber = input.toString(); 

	for (var i = 0, len = sNumber.length; i < len; i += 1) {
	    output.push(+sNumber.charAt(i));
	    //The above separates the input into an array that I would use for the reduce() method to add them all together.  Despite following the syntax on w3schools, it only returns the array and I don't understand why, though I believe it may have something to do with the myFunction function.

	    function getSum(total, num) {
	    	return total + num;
		}
		function myFunction(item) {
	    	output.reduce(getSum);
		}
		//It seems to me that it should be taking the output array and using the reduce() method on it like in the working example I found but...it's not. The idea would be to run it in a loop until the output was a single-digit.
		myFunction();
	}

	console.log(output);
};