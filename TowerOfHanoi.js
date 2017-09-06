//This is my tower of hanoi code

// ================================= BEGIN: Input processing for Node.js ================================= \\
let input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (data) {
	//console.log(`Received new chunk [${data}]`);
	input += data;
	let enter = input.indexOf("\r\n");
	if (enter !== -1) {
		let a = input.substring(0, enter);
		input = input.substring(enter+2);
		//console.log(`New full entry [${a}], residual input is [${input}]`);
		recieved(Number(a));
	}
});
// ================================= E N D: Input processing for Node.js ================================= \\

let moves = [];  // This is defined outside of the recursive function, to be persistent

function hanoiSolve(hoops, from, to) {
	if (hoops === 0) return;

	//console.log("called");

	hanoiSolve(hoops-1, from, 6-from-to);

	moves.push(from + "->" + to);

	hanoiSolve(hoops-1, 6-from-to, to);
}

hanoiSolve(4, 1, 3);
console.log(moves);
