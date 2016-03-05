// Change the following prototypal code to "OLOO" style, where two objects
// A and B are linked via prototype.

function A() {}

A.prototype.speak = function() {
	console.log("Hello, my name is " + this.name);
};

var B = new A();
B.name = "Billy";

B.speak();		// Hello, my name is Billy"
