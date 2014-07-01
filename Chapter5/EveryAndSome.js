/**
 *
 * Write two functions, every and some, that behave like the built in array methods,
 * except that they take the array as their first argument, rather than being a method.
 * 
 */

function every(array, predicate)
{
	for(idx in array)
	{
		if(!predicate(array[idx]))
			return false;
	}
	return true;
}

function some(array, predicate)
{
	for(idx in array)
	{
		if(predicate(array[idx]))
			return true;
	}
	return false;
}