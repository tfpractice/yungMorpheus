jQuery(document).ready(function($) {
    //The d3.json function needs a URL NOT A FILE


    d3.json(gon.firstURL, function(data) {

        console.log(data);

        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        var barWidth = 10;
        var barOffset = 5;
        var chartHeight = screenHeight / 3;
        var yScale = d3.scale.linear().domain([0, 7]).range([0, chartHeight ]);
        var colorScale = d3.scale.linear().domain([0, 7]).range(["black", "white" ]);

        var visDivSVG = d3.select(".visDiv").append('svg')
            .classed("spiceGraph", true)
            .attr({
                "height": chartHeight,
                "width": screenWidth / 3
            })
            .style("background", "#00ff00");


        var visDivUL = d3.select(".visDiv").append('ul');

        // d3.select('ul').append(data);

        visDivSVG.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .style(
                "fill", function(d) {
                    // var colorProp = Math.floor((255 * d.height) / 7);
                    // var colorString = "rgb(255,0," + colorProp + ")";
                    // console.log(colorProp);
                    // console.log(colorString);

                    // return colorString;

                    return colorScale(d.height);

                }
               

        )
            .attr("x", function(d, i) {
                    return i * (barWidth + barOffset);
                }

        )
            .attr('width', barWidth)
            .attr('height', function(d) {
                return yScale(d.height);
            })
            .attr("y", function(d) {
                return chartHeight - yScale(d.height);
            })
            .text(function(d) {
                var output = d.name;
                output += " ";
                output += d.radius;
                output += " ";
                output += d.height;

                return output;

            });


    });


});