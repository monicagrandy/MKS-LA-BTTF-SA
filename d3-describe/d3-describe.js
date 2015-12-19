//Describe what happens with each line...

var width = 960, //Ex. This line sets the width variable
    height = 2200; 

var cluster = d3.layout.cluster() 
    .size([height, width - 160]); 

var diagonal = d3.svg.diagonal() 
    .projection(function(d) { return [d.y, d.x]; }); 

var svg = d3.select("body").append("svg") 
    .attr("width", width) 
    .attr("height", height) 
  .append("g") 
    .attr("transform", "translate(40,0)"); 
