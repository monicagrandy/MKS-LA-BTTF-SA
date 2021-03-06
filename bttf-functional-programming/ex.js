// Write a pure function (no side causes, no side effects):
// - trims the list down to odd numbers only
// - then, doubles each remaining number
// - then, sums all the numbers and returns the result

var list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function pure(array){
	return array.filter(function(el){
		return el%2 !== 0
	}).map(function(el){
		return el*2
	}).reduce(function(prev, curr){
		return prev + curr;
	})
}


