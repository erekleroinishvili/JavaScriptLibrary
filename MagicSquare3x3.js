//This is my magic square finder
//It finds all 3x3 magic squares (technically it is only one stored as 8 including the rotations and reflections


// Magic square finder
let allMagics = [];  // Here we will add store all the magic squares (including the rotations and reflections)

let s = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; // Here we store the current magic square candidate

for (s[0][0] = 1; s[0][0] <= 9; s[0][0]++)
	for (s[0][1] = 1; s[0][1] < 15 - s[0][0] && s[0][1] <= 9; s[0][1]++)
		if (s[0][0] !== s[0][1])
			for (s[1][0] = 1; s[1][0] < 15 - s[0][0] && s[1][0] <= 9; s[1][0]++)
				if (s[1][0] !== s[0][0] && s[1][0] !== s[0][1])
					for (s[1][1] = 1; s[1][1] < 15 - Math.max(s[0][0], s[0][1], s[1][0]) && s[1][1] <= 9; s[1][1]++)
						if (s[1][1] !== s[0][0] && s[1][1] !== s[0][1] && s[1][1] !== s[1][0]) {
							s[0][2] = 15 - s[0][0] - s[0][1];
							s[1][2] = 15 - s[1][0] - s[1][1];
							s[2][0] = 15 - s[0][0] - s[1][0];
							s[2][1] = 15 - s[0][1] - s[1][1];
							s[2][2] = 15 - s[0][2] - s[1][2];
							if (s[0][0] + s[1][1] + s[2][2] === 15 && s[0][2] + s[1][1] + s[2][0] === 15) {
								let isMagic = true, unique = new Set();
								for (let i = 0; i <= 2 && isMagic; i++)
									for (let j = 0; j <= 2 && isMagic; j++)
										if (s[i][j] < 1 || s[i][j] > 9 || unique.has(s[i][j])) isMagic = false;
										else unique.add(s[i][j]);
								if (isMagic) allMagics.push([   [ s[0][0], s[0][1], s[0][2] ],   [ s[1][0], s[1][1], s[1][2] ],   [ s[2][0], s[2][1], s[2][2] ]]);
							}
						}

console.log(allMagics);
// let allMagics = [
// 	[ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ],
// 	[ [ 2, 9, 4 ], [ 7, 5, 3 ], [ 6, 1, 8 ] ],
// 	[ [ 4, 3, 8 ], [ 9, 5, 1 ], [ 2, 7, 6 ] ],
// 	[ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 6 ] ],
// 	[ [ 6, 1, 8 ], [ 7, 5, 3 ], [ 2, 9, 4 ] ],
// 	[ [ 6, 7, 2 ], [ 1, 5, 9 ], [ 8, 3, 4 ] ],
// 	[ [ 8, 1, 6 ], [ 3, 5, 7 ], [ 4, 9, 2 ] ],
// 	[ [ 8, 3, 4 ], [ 1, 5, 9 ], [ 6, 7, 2 ] ]
// ];
 
