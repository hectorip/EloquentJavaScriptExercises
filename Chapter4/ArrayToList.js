/**
 *
 * Write a function arrayToList that builds up a data structure like the one above(see the exercise in book)
 * when given [1, 2, 3] as argument, and a listToArray function that produces an array from a list.
 *
 * Also write the helper functions prepend, which takes an element and a list and creates a new list that adds
 * the element to the front of the input list, and nth, which takes a list and a number and returns the element
 * at the given position in the list, or undefined when there is no such element.
 *
 */

function arrayToList(array)
{
  var list = {}, currentElement = list;
  for(idx in array) {
    currentElement.rest = { value: array[idx], rest: null};
    currentElement= currentElement.rest; 
  }
  return list.rest;
}

function listToArray(list)
{
  array = []
  rest = list
  while (rest) {
    array.push(rest.value);
    rest = rest.rest;
  }

  return array;
}

function prepend(element, list)
{
  return {value: element, rest: list};
}

function nth(list, pos)
{
  if(pos == 0) {
    return list.value;
  } else {
    return list && nth(list.rest, pos-1);
  }
}
