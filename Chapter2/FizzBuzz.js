/**
 * FizzBuzz.js
 * 
 * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
 * For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. 
 * When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.
 * 
 */

var limit = 100, fizz = 3, buzz =5;

for (var i = 1; i <= limit; i++) {
    
	fizzResult = ! (i % fizz);
	buzzResult = ! (i % buzz);
    
    result  = (fizzResult && 'Fizz') || '';
    result +=(buzzResult && 'Buzz')  || ''; 
    
	console.log( result || i );
}
