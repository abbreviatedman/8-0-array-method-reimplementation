/**
 * Appends an element to the end of an array. Do not use the push method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {Array[*]} element - an element of any kind.
 * @returns {number} the new length of the array.
 */
 function myPushFunction(array, ...elements) {
  //const element = Array.from(arguments)
  //for (const element of elements.slice(1))
  for (const element of elements) {
    array[array.length] = element;
  }
  
  return array.length;
}

/**
 * Removes the last element of the array and returns the removed element, or undefined if the array is empty. Do not use the pop method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @returns {*} - the removed element
 */
 function myPopFunction(array) {
  if (array.length === 0) {
    return undefined;
  }

  let removedElement = array[array.length - 1];
  array.length = array.length - 1;

  return removedElement;
}

/**
 * Determines whether an array includes a specific value within its entries. Do not use the includes method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @param {number} [startIdx] - an optional index from which to start searching.
 * @returns {boolean} returns true if the searchElement is found in the array and false if it is not.
 */
 function myIncludesFunction(array, searchElement, startdIdx = 0) {
  if (startdIdx < 0) {
    startdIdx = array.length + startdIdx;
  }
  for (let i = startdIdx; i < array.length; i++) {
    if (array[i] === searchElement) {
      return true;
    }
  }
  return false;
}

/**
 * Returns the first index in an array where a specified value is found. Do not use the indexOf method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @param {number} [startIdx] - an optional index from which to start searching.
 * @returns {number} returns the index at which the searchElement is found, or -1 if it is not found.
 */
 function myIndexOfFunction(array, searchElement, startdIdx = 0) {
  if (startdIdx < 0) {
    startdIdx = array.length + startdIdx;
  }
  for (let i = startdIdx; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
}
/**
 * Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. Do not use the slice method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {number} [startIdx] - an optional number representing the starting index of the extraction. The startIdx can be negative.
 * @param {number} [endIdx] - an optional number representing the ending index of the extraction (non-inclusive). The endIdx can be negative.
 * @returns {Array[*]} returns a new array containing the extracted elements.
 */
 function mySliceFunction(array, startIdx = 0, endIdx = array.length) {
  // this takes care of the negative argument
  if (startIdx < 0) {
    startIdx = array.length + startIdx;
  }
  if (endIdx < 0) {
    endIdx = array.length + endIdx;
  }

  if (endIdx > array.length) {
    endIdx = array.length;
  }

  let newArray = [];
  for (let i = startIdx; i < endIdx; i++) {
    newArray[newArray.length] = array[i];
    //newArray.push(array[i]);
  }

  return newArray;

  // if(startIdx === undefined || endIdx === undefined){

  //       newArr = array;

  // }
  // if (endIdx === undefined || endIdx > array.length) {
  //   endIdx = array.length;
  // }

  // for (let i = startIdx; i < endIdx; i++) {
  //   newArray.push(array[i]);
  // }

  // return newArray;
}


/**
 * Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. Do not use the join method.
 * @param {Array[*]} array - an array of any kind of elements
 * @param {string} [separator] - an optional string to separate each pair of adjacent elements of the array. If no separator is specific the default separator should be a comma (",")
 * @returns {string} returns the concatenated string.
 */
 function myJoinFunction(array, separator = ",") {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      str += array[i] + separator;
    } else {
      str += array[i];
    }
  }
  return str;
}

/**
 * Reverses the elements in the given array, returning the array. The first array element becomes the last, and the last array element becomes the first. Mutates the original array. Do not use the reverse method.
 * @param {Array[*]} array - an array of any kind of elements
 * @returns {Array[*]} returns a new array with the elements reversed.
 */
 function myReverseFunction(array) {
  //Soln 1
  // let i = 0;
  // while (i < array.length - 1) {
  //   array.splice(i, 0, array.pop());
  //   i++;
  // }
  // return array;

  //Soln 2
  //Temporal storage
  let temp;
  //first index
  let i = 0;
  //last index
  let end = array.length - 1;
  while (i < end) {
    temp = array[i];
    array[i] = array[end];
    array[end] = temp;
    i++;
    end--;
 
  }
  return array;
}

/**
 * Adds an element to the front of the array. Do not use the unshift method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {*} newElement - an element of any type to add to the front of the array.
 * @returns {number} returns the new length of the array.
 */
function myUnshiftFunction() {

}

/**
 * Removes the first element of the array and returns the removed element, or undefined if the array is empty. Do not use the shift method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @returns {*} - the removed element
 */
function myShiftFunction() {

}

module.exports = {
  myPushFunction,
  myPopFunction,
  myIncludesFunction,
  myIndexOfFunction,
  mySliceFunction,
  myJoinFunction,
  myReverseFunction,
  myUnshiftFunction,
  myShiftFunction,
};
