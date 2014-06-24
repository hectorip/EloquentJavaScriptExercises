/**
 *
 * Write a range function that takes two arguments, start and end, and returns
 * an array containing all the numbers from start up to (and including) end.
 * 
 * Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
 * Run:
 *  console.log(sum(range(1,10)));
 * and see whether it does indeed return 55;
 * 
 * As a bonus assignment, modify your range function to take an optional third argument that
 * indicates the "step" value used to build up the array. If no step is given, the array elements
 * go up by increments of one, corresponding to the old behavior. The functiona call range(1, 10, 2)
 * should return [1, 3, 5, 7, 9]. Make sure it also works with negative steps values, so that
 * range(5, 2, -1) produces [5, 4, 3, 2]. 
 *
 */

function range(start, end, step) {
  var result=[];
  step = step || 1;
  evaluate = step > 0 ? function (current) { return (current <= end); } 
                      : function (current) { return (current >= end); }
  for(var i=start; evaluate(i) ; i += step){
    result.push(i);
  }
 return result;
}

function sum(arrayToSum) {
	var result = 0;
	for(i in arrayToSum)
		result += arrayToSum[i];
	return result;
}