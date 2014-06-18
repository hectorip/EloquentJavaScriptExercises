/**
 * ChessBoard.js
 * 
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
 * At each position of the grid there, is either a space or a “#” character. The characters should form a chess board. 
 * Passing this string to console.log should look like this:
 * 
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 *  
 *  When you have a program that generates this pattern, define a variable size = 8,
 *  and change the program so that it works for any size, outputting a grid of the given width and height.
 */

var size = 8, board = '';

for(var i = 0 - 1; i < size; i++) {
    e = i%2;
    for(var j = 0; j < size; j++) {
		board += (j +e ) % 2 ? ' ' : '#';
	}
	board += "\n";
};

console.log(board);