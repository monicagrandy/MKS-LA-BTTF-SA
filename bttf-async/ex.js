// Convert the following code from using only nested callbacks
// to using separate stand-alone, non-nested functions for each
// "step", and use promises that get chained together

function doStep1(x) {
	x = x + 1;
	setTimeout(function doStep2(){
		x = x * 2;
		setTimeout(function doStep3(){
			console.log(x);
		},200);
	},100);
}

doStep1(4);


// ****************


function doStep1(x){
	return new Promise(function(resolve){
		x = x+1
		resolve(x)
	})
}

function doStep2(x){
	console.log("inside step 2!")
	return new Promise(function(resolve){
		setTimeout(function(){
			x = x*2
			console.log("inside step 2 set timeout and x = ", x)
			resolve(x)
		}, 200)	
	})
}

function doStep3(x){
	console.log("inside step 3!")
		setTimeout(function(){
		console.log("inside step 3 set timeout and x = ", x)
		console.log(x)
		},100)
}

doStep1(4).then(doStep2).then(doStep3)

// Should look like this:

// doStep1(4)
//  .then(doStep2)
//  .then(doStep3);


