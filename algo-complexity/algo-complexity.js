/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/


// Problem 1: Retrieval of a value from a hash table using the following function with regard to the size of the hash table.

/*
 Complexity:
 */



var retrieve = function(key){
  var hash = 0;
  for (var i = 0; i < key.length; i++){
    hash = (hash + Math.pow(i,hash)) % array.length;
  }
  return array[hash];
};


// Problem 2: sortedArrayContainsItem

/*
 Complexity:
 */



var sortedArrayContainsItem = function(array, item){
  if (array.length === 0){
    return false;
  }

  var recurse = function(start, finish){
    var center = Math.floor(((finish - start) / 2) + start);

    // Base cases
    if (start === finish) {
      return array[start] === item;
    } else if (array[center] === item) {
      return true;
    }

    // Recursion
    if (item < array[center]) {
      return recurse(start, center - 1);
    } else {
      return recurse(center + 1, finish)
    }
  };

  return recurse(0, array.length - 1);
};


// Problem 3: hasDuplicates

/*
 Complexity:
 */



var hasDuplicates = function(array){
  for(var i = 0; i < array.length; i++){
    var item = array[i];
    if(array.slice(i+1).indexOf(item) !== -1){
      return true;
    }
  }
  return false;
};
