/**
 *
 * Write a function, deepEqual, that takes two values and returns true only if they are the same value,
 * or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
 *
 * To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties,
 * you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have
 * to take one silly exception into account: by a historical accident, typeof null also produces "object".
 * 
 */

function deepEqual(value1, value2)
{
  if(value1 === value2)
    return true;
  if(value1 !== null && value2 !== null && typeof value1 == 'object' && typeof value2 == 'object') {
    for(property in value1) {
      if(!deepEqual(value1[property],value2[property]))
        return false;
    }
    return true;
  }

  return false; 
}
