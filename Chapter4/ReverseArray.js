/**
 *
 * Arrays have a method reverse, which changes the array by inverting the order in
 * which its elements appear. For this excercise, write two function, reverseArray
 * and reverseArrayInPlace. The first, reverseArray, takes an array as argument and
 * produces a new array that has the same elements in the inverse order. The second,
 * reverseArrayInPlace does what the reverse method does: it modifies the array given
 * as argument in order to reverse its elements.
 * 
 */

function reverseArray(array)
{
  var reversedArray = [];
  for(idx in array)
    reversedArray.unshift(array[idx]);
  return reversedArray;
}

function reverseArrayInPlace(array)
{
  var length = array.length - 1, swap;
  var middle = Math.floor(array.length/2);
  
  for(var idx = 0; i <= middle; idx++) {
    swap = array[length-idx];
    array[length-idx] = array[idx];
    array[idx] = swap;
  }
}

