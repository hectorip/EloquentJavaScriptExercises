/**
 *
 * LoopingTriangle.js
 * 
 * Write a program that makes seven calls to console.log to output the following triangle:
 * 
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 *
 */

var levels = 7, row = '', character = '#';

for(var i = 0; i < levels ; i++) {
	row += character;
	console.log(row);
}
