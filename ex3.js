var speed = [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0];
var highestSpeed = 0;

for (var i = 0; i < speed.length; i++){
	if (speed[i] > highestSpeed){
		highestSpeed = speed[i]
		console.log(Math.floor(highestSpeed));
	}
}

//not quite sure how to make this show only one highest speed and not every time it changes.

