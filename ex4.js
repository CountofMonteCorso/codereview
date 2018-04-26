function openAll(openerFunction) {
	for(var i = 0; i < 5; i += 1) {
		setTimeout(() => {
			openerFunction(i);
		}, i * 1000);

		function openGate(gateNumber) {
			console.log(`Opening Gate #${gateNumber}`);
		};

	}
}
openAll(openGate);

//My thinking is that you need to open the specific gate one at a time, corresponding to the gateNumber, meaning that would need to be a part of the for loop.  This way each time the loop completes, the program would open the next gate. I don't know how I can test this here though.