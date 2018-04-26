var request = require("request");

//gets random joke
function joke(error, response, body) {

	var options = {
		url: "https://icanhazdadjoke.com/",
		method: "GET",
		headers: {
	        "Accept" : "application/json"
	        }
	};

	if (!error && response.statusCode == 200) {
	    var info = JSON.parse(body);
	}

}
request(options, function(err, res, body){
	console.log(res.body);
});
 
//jokes by ID
function getJokeById (error, response, body){
	var jokeID = process.env[2];
	var options = {
	url: "https://icanhazdadjoke.com/j/" + jokeID,
	method: "GET",
	headers: {
        "Accept" : "application/json"
        }
    };

	if (!error && response.statusCode == 200) {
   		var info = JSON.parse(body);
 	 }
}
request(options, function(err, res, body){
	console.log(res.body);
});

//search by term
function searchJokes (error, response, body){
	var query = process.env[2];
	var options = {
	url: "https://icanhazdadjoke.com/search?term=" + query,
	method: "GET",
	headers: {
        "Accept" : "application/json"
        }
    };

	if (!error && response.statusCode == 200) {
   		var info = JSON.parse(body);
 	 }
}
request(options, function(err, res, body){
	console.log(res.body);
});

//I know this doesn't quite work yet but I know it's close because I was able to get the first function to work. It wasn't until I added the others that it stopped working.  I think it's related to request being outside the function but when it's inside it doesn't work either. I don't know; it's super late and my brain is mush.