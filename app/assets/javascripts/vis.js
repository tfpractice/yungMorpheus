jQuery(document).ready(function($) {
    //The d3.json function needs a URL NOT A FILE

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;


    function Spice(name, radius, height) {
        this.name = name;
        this.radius = radius;
        this.height = height;
    }

    function Row() {
        this.spices = [];
        this.width = 0;
        this.widestSpice = null;
        this.depth = 0;


    }
    Row.prototype.addSpice = function(spice) {
        if (this.spices.indexOf(spice) > -1) {
            console.log("spice already added");
            return


        } else {

            this.spices.push(spice);
            this.width += spice.radius;
            // console.log(this.width);
            this.radiusSort();
            this.widestSpice = this.spices[0];
            this.depth = this.widestSpice.radius;

        };
        // body...
    };

    Row.prototype.radiusSort = function() {
        var tempSpice, innerVal, spiceCount = this.spices.length;
        for (var outerVal = 1; outerVal <= spiceCount - 1; ++outerVal) {
            tempSpice = this.spices[outerVal];
            innerVal = outerVal;
            while (innerVal > 0 && ((this.spices[innerVal - 1].radius) >= tempSpice.radius)) {
                this.spices[innerVal] = this.spices[innerVal - 1];
                --innerVal;

            }
            this.spices[innerVal] = tempSpice;
        };
    };


    Row.prototype.calculateXPosition = function(spice, index) {
        var lastPos = 0;
        for (var i = 0; i < index; i++) {
            lastPos += 2 * (rowScale(this.spices[i].radius))
            console.log(lastPos);


        };
        return lastPos = rowScale(this.spices[index].radius);
        // body...
    };

    // function calculateXPosition(row, spice, index) {
    //     var lastPos = 0;
    //     for (var i = 0; i < index; i++) {
    //         lastPos += 2 * (rowScale(row.spices[i].radius))


    //     };
    //     return lastPos = rowScale(row.spices[index].radius);
    //     // body...
    // };

    Row.prototype.visualize = function(shelf) {
        var row = this;
        this.rowVis = d3.select(".shelfVis").append("svg")
            .classed("rowVis", true)
            .attr('height', rowScale(this.widestSpice.radius))
            .attr('width', rowW);
        // console.log(this.rowVis);
        // console.log(shelfVis);


        this.rowVis.selectAll(".circle")
            .data(this.spices)
            .enter()
            .append("circle")
            .attr({
                r: function(d, i) {
                    return (d.radius);
                },
                cx: function(d, i) {
                    return row.calculateXPosition(d, i);
                },

                cy: (rowScale((row.depth) / 2)),
                stroke: "#000"

            });
        console.log(this.depth);



    };



    function Shelf(w, h, d) {
        this.width = w, this.height = h;
        this.depth = d;
        this.rowLimit = this.width;
        this.widestSpice = null;
        this.spices = [];
        this.rows = [];
        this.hSpices = [];
        this.sViz = null;
    }


    Shelf.prototype.makeHeightRows = function(spices, index, pred) {
        var spiceCount = spices.length;
        var prevRow = pred;
        var currRow = new Row();
        currRow.widestSpice = this.widestSpice || this.hSpices[index];
        this.widestSpice = this.widestSpice || currRow.widestSpice;
        this.rowLimit = (pred) ? (this.width - this.widestSpice.radius) : this.width;
        for (var i = index; i < spiceCount; i++) {
            // console.log(i);

            var potentialWidth = currRow.width + this.hSpices[i].radius;
            // console.log(potentialWidth);

            if (potentialWidth <= this.rowLimit) {
                currRow.addSpice(this.hSpices[i]);
                // console.log(this.hSpices[i]);


                this.widestSpice = (currRow.widestSpice.radius > this.widestSpice.radius) ? currRow.widestSpice : this.widestSpice;
                this.rowLimit = (prevRow) ? (this.width - (this.widestSpice.radius)) : this.width;
                // console.log(this.rowLimit);

            } else {
                // console.log(i);


                this.rows.push(currRow);
                this.makeHeightRows(this.hSpices, i, true);
                // console.log(this);
                break;


            }


        };


    };

    Shelf.prototype.addSpice = function(spice) {

        this.hSpices.push(spice);
        this.heightSort();

    };


    Shelf.prototype.heightSort = function() {
        var tempSpice, innerVal, spiceCount = this.hSpices.length;
        for (var outerVal = 1; outerVal <= spiceCount - 1; ++outerVal) {
            tempSpice = this.hSpices[outerVal];
            innerVal = outerVal;
            while (innerVal > 0 && (this.hSpices[innerVal - 1].height >= tempSpice.height)) {
                this.hSpices[innerVal] = this.hSpices[innerVal - 1];
                --innerVal;
            }
            this.hSpices[innerVal] = tempSpice;
        };
    };

    Shelf.prototype.visualize = function() {
        this.sViz = d3.select(".cabinetVis")
            .append("svg")
            .classed("shelfVis", true)
            .attr({
                width: shelfW,
                height: shelfH
            })
            .style('stroke', "#ff00ff");
        $(this.sViz).css('stroke', "#ff00ff");
        // console.log(this.sViz);

        for (var i = 0; i < this.rows.length; i++) {
            this.rows[i].visualize(this);
        };


        // this.rows.forEach(function(el, id, ar){
        //     el.visualize(this);
        // });
        // return viz;

        // body...
    };



    var ratio = 1.61803398875;
    var innerRatioBig = ratio - 1;
    var innerRatioSmall = 1 - innerRatioBig;

    var visW = screenWidth / 3;
    var visH = visW / ratio;
    var margin = 0.05;


    var shelfW = innerRatioBig * (visW * (1 - (2 * margin)));
    var shelfH = innerRatioBig * (visH * (1 - (2 * margin)));

    var rowW = innerRatioBig * (shelfW * (1 - (2 * margin)));
    // var rowH = innerRatioBig * (shelfH *(1-(2* margin)));

    var shelfScale = d3.scale.linear()
        .domain([0, 48])
        .range([0, shelfW]);

    var rowScale = d3.scale.linear()
        .domain([0, 13])
        .range([0, (shelfW * (1 - (2 * margin)))]);





    var cabinetVis = d3.select(".visDiv2")
        .append("svg")
        .classed("cabinetVis", true)
        .attr({
            width: visW,
            height: visH
        })
        .attr('stroke', "#ff00ff")
        .attr('stroke-width', 4);

    $(".cabinetVis").css('background-color', "#00ff00");

    // console.log(cabinetVis);

    // var shelf1 = shelf.









    var draw = function() {

        d3.select(".spiceGraph").remove();
        d3.json(gon.firstURL, function(data) {


            // var hMap = data.map(function(index, elem) {
            //     return elem.height;
            // });
            var sampleShelf = new Shelf(36, 10, 30);


            var spiceObjects = data.map(function(elem, index) {
                var spiceO = new Spice(elem.name, elem.radius, elem.height);

                return spiceO;
            });

            // console.log(sampleShelf);

            spiceObjects.forEach(function(elem, index) {
                sampleShelf.addSpice(elem);
            });


            sampleShelf.makeHeightRows(sampleShelf.hSpices, 0, false);
            sampleShelf.visualize();

            console.log(sampleShelf);

            var dExtent = d3.extent(data, function(d) {
                return d.height;
            });

            var dRExtent = d3.extent(data, function(d) {
                return d.radius;
            });


            // var screenWidth = window.innerWidth;
            // var screenHeight = window.innerHeight;

            var chartWidth = screenWidth / 3;
            var chartHeight = chartWidth / 1.61803398875;
            var chartMargin = chartWidth * 0.1;
            var chartMarginY = chartHeight * 0.05;
            var dCount = data.length;


            var barWidth = (chartWidth - chartMargin) / (dCount * 2.2);
            var barOffset = barWidth * 1.2;
            var yScale = d3.scale.linear().domain([0, dExtent[1]]).range([0, (chartHeight - chartMarginY)]);
            var colorScale = d3.scale.linear().domain(dExtent).range(["black", "white"]);


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


            var visDivUL = d3.select(".visDiv").append('ul');




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
                .call(yAxis);
            var tempColor;

            var spiceBars = chart.selectAll('rect')
                .data(sampleShelf.hSpices)
                .enter()
                .append('rect')
                .classed('spiceBar', true)
                .style(
                    "fill", function(d) {

                        return colorScale(d.height);

                    }
                )
                .attr("x", function(d, i) {
                        return i * (barWidth + barOffset);
                    }

                )
                .attr('width', barWidth)
                .attr('height', 0)
                .attr("y", chartHeight)


            ;

            spiceBars.transition()
                .attr('height', function(d) {
                    return yScale(d.height);
                })
                .attr("y", function(d) {
                    return chartHeight - yScale(d.height);
                })
                .delay(function(d, i) {
                    return i * 10;
                })
                .ease('elastic')
                .duration(2000);

            var sBars = $(spiceBars);
            // console.log(sBars);

            $(".spiceBar").hover(function() {
                tempColor = this.style.fill;
                $(this).css("fill", "#ff00ff");


            }, function() {
                $(this).css("fill", tempColor);
            });




        });


    };
    draw();

    $(window).resize(draw);
    // draw();


});