// Please write a module that includes:
// - at least 2 private variables
// - at least 2 private functions
// - at least 2 public methods on the API



var theModule = (function theModule(){
		var name;
		var age;
		
		var publicAPI = {
			start: start,
			makeName: makeName,
			name: name,
			age: age
		};
		
		return publicAPI;
		
		function start(fullName, currentAge){
			name = fullName;
			age = currentAge;
			incrementAge()
			sayHello()
		}
		
		function makeName(){
			return name
		}
		
		function incrementAge(){
			age += 1
		}
		
		function sayHello(){
			var greet = "Hello, my name is " + name
			console.log(greet)
		}
})();

theModule.start("Monica", 27)
theModule.makeName()



// Now, write a snippet that shows using the public
// methods from your module.
