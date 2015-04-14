jQuery(document).ready(function($) {
//The d3.json function needs a URL NOT A FILE



d3.json(gon.firstURL, function(data){

console.log(data);


	var visDiv = d3.select(".visDiv").append('ul');

	// d3.select('ul').append(data);

	visDiv.selectAll('li')
		.data(data)
		.enter().append("li").text(function(d){
			var output = d.name;
			output += " " ;
			output += d.radius ;
			output += " ";
			output += d.height;

 			return output;

		});


})


});