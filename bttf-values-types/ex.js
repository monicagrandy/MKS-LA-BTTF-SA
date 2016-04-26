// Fix the following code to correctly print out:
// "The meaning of life: 42"
//
// Identify with a code comment if you used explicit or implicit coercion.

var a = 11, b = 31;

console.log( "The meaning of life: " + (a + b) );



// Now, write a snippet of code that demonstrates at least 3
// explicit coercions and 3 implicit coercions.

//explicit
var a = 42;
var b = String( a );

var c = "3.14";
var d = Number( c );

var a = 42;
var b = a.toString();

var c = "3.14";
var d = +c;

var a = "42";
var b = "42px";

Number( a );    
parseInt( a );  

Number( b );    
parseInt( b );  

//implicit
var a = [1,2];
var b = [3,4];

a + b; // "1,23,4"

var a = "3.14";
var b = a - 0;

b; // 3.14

var a = 42;
var b = "abc";
var c;
var d = null;

if (a) {
    console.log( "yep" );       // yep
}

while (c) {
    console.log( "nope, never runs" );
}

c = d ? a : b;
c;                              // "abc"

if ((a && d) || c) {
    console.log( "yep" );       // yep
}

function foo() {
    console.log( a );
}

var a = 42;

a && foo(); // 42







