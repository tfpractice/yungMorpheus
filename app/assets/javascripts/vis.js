jQuery(document).ready(function($) {
    //The d3.json function needs a URL NOT A FILE

    var draw = function() {

        d3.select("svg").remove();
        d3.json(gon.firstURL, function(data) {



            var dExtent = d3.extent(data, function(d) {
                return d.height;
            });

            var dRExtent = d3.extent(data, function(d) {
                return d.radius;
            });



            var screenWidth = window.innerWidth;
            var screenHeight = window.innerHeight;

            var chartWidth = screenWidth / 3;
            var chartHeight = chartWidth / 1.61803398875;
            var chartMargin = chartWidth * 0.1;
            var chartMarginY = chartHeight * 0.05;
            var dCount = data.length;


            var barWidth = (chartWidth - chartMargin) / (dCount * 2.2);
            var barOffset = barWidth * 1.2;
            var yScale = d3.scale.linear().domain([0, dExtent[1]]).range([0, (chartHeight - chartMarginY)]);
            var colorScale = d3.scale.linear().domain([0, dExtent[1]]).range(["black", "white"]);


            var yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient("left")
                        .ticks(10);








            var visDivSVG = d3.select(".visDiv").append('svg')
                .classed("spiceGraph", true)
                .attr({
                    "height": chartHeight,
                    "width": chartWidth
                })
                .style("background", "#00ff00");
                // .append('g').call(yAxis);


            var visDivUL = d3.select(".visDiv").append('ul');

            // d3.select('ul').append(data);

        

            var chart = visDivSVG.append('g')
                .attr('transform', function() {
                var output = "translate(";
                output += chartMargin / 2;
                output += ",";
                output += 0;
                output += ")";
                return output;


            });
                chart.append('g')
            //     .attr('transform', function() {
            //     var output = "translate(";
            //     output += chartMargin / -2;
            //     output += ",";
            //     output += 0;
            //     output += ")";
            //     return output;


            // })
                .call(yAxis);

            chart.selectAll('rect')
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

                })
                ;


        });


    };
    draw();

    $(window).resize(draw);
    // draw();


});