// jQuery.ready(showVis);
// var notifyLoad = function() {
// 	alert("LOAD");
// };
// var notifyReady = function() {
// 	alert("READY");
// };
// var notifyChange = function() {
// 	alert("CHANGE");
// };
// $(document).on('ready ', notifyReady);
// $(document).on('page:load', notifyLoad);
// $(document).on('page:change', notifyChange);
var showVis = function() {
    var gonURL = gon.firstURL;
    if (gonURL != null) {
        draw;
    } else {};
    var draw = function() {
        d3.selectAll("svg").remove();
        d3.json(gonURL, function(data) {
            // });
            // var colorScaleR = d3.scale.linear().domain(dRExtent).range(["black", "white"]);
            // var colorScaleH = d3.scale.linear().domain(dExtent).range(["black", "white"]);
            var screenWidth = window.innerWidth;
            var screenHeight = window.innerHeight;
            var ratio = 1.61803398875;
            var innerRatioBig = ratio - 1;
            var innerRatioSmall = 1 - innerRatioBig;
            var visW = screenWidth / 3;
            var visH = visW / ratio;
            var margin = 0.05;
            var shelfW = visW;
            var shelfH = shelfW / ratio;
            var chartWidth = (screenWidth * 2) / 3;
            var chartHeight = chartWidth / 1.61803398875;
            var chartMargin = chartWidth * 0.1;
            var chartMarginY = chartHeight * 0.05;
            var barWidth = chartWidth / 5;
            var barOffset = barWidth;


            var allSpecies = data.map(function(elem) {
                return elem.Species;
            });
            var spciesMap = d3.map(data, function(d) {
                return d.Species;
            });
            var speciesList = d3.set(allSpecies);
            var speciesGroup = [];
            var setosaMap = {
                Species: "setosa",
                irises: [],
                iCount: function(argument) {
                    this.count = this.irises.length;
                },
                count: this.iCount
            };
            var versicolorMap = {
                Species: "virginica",
                irises: [],
                iCount: function(argument) {
                    this.count = this.irises.length;
                },
                count: this.iCount
            };
            var virginicaMap = {
                Species: "virginica",
                irises: [],
                iCount: function(argument) {
                    this.count = this.irises.length;
                },
                count: this.iCount
            };
            data.forEach(function(d) {
                switch (d.Species) {
                    case "setosa":
                        setosaMap.irises.push(d);
                        setosaMap.iCount();
                        break;
                    case "versicolor":
                        versicolorMap.irises.push(d);
                        versicolorMap.iCount();
                        break;
                    case "virginica":
                        virginicaMap.irises.push(d);
                        virginicaMap.iCount();
                        break;
                }
            });

            var SepalLengthExtent = d3.extent(data, function(d) {
                return d.SepalLength;
            });



            var yScale = d3.scale.linear()
                .domain([0, SepalLengthExtent[1]])
                .range([0, (chartHeight * 0.9)]);

            var yScaleAxis = d3.scale.linear().domain([0, SepalLengthExtent[1]]).range([(chartHeight * 0.9), 0]);

            var yAxis = d3.svg.axis()
                .scale(yScaleAxis)
                .orient("left")
                .ticks(10);

            // var yScale = d3.scale.linear()
            //     .domain(SepalLengthExtent)
            //     .range([chartHeight, 0]);


            console.log(yScale(SepalLengthExtent[1]));
            speciesGroup.push(setosaMap);
            speciesGroup.push(versicolorMap);
            speciesGroup.push(virginicaMap);
            // SepalLength Stats //


            var setosaSLMean = d3.mean(setosaMap.irises, function(d) {
                return d.SepalLength;
            });
            var setosaSLMedian = d3.median(setosaMap.irises, function(d) {
                return d.SepalLength;
            });
            var setosaSLMin = d3.min(setosaMap.irises, function(d) {
                return d.SepalLength;
            });
            var setosaSLMax = d3.max(setosaMap.irises, function(d) {
                return d.SepalLength;
            });
            var setosaSLDeviation = d3.deviation(setosaMap.irises, function(d) {
                return d.SepalLength;
            });

            var setosaSLData = setosaMap.irises.map(function(elem) {
                return elem.SepalLength;
            });
            setosaSLData.sort();
            console.log(setosaSLData);
            var setosaIQR = ((d3.quantile(setosaSLData, 0.75)) - (d3.quantile(setosaSLData, 0.25)));
            var setosaSLThirdQ = d3.quantile(setosaSLData, 0.75);
            var setosaSLFirstQ = d3.quantile(setosaSLData, 0.25);
            // var soretedSetosaSL = d3.ascending()


            var setosaSWData = setosaMap.irises.map(function(elem) {
                return elem.SepalWidth;
            });
            var setosaSWMean = d3.mean(setosaMap.irises, function(d) {
                return d.SepalWidth;
            });
            var setosaSWMedian = d3.median(setosaMap.irises, function(d) {
                return d.SepalWidth;
            });
            var setosaSWMin = d3.min(setosaMap.irises, function(d) {
                return d.SepalWidth;
            });
            var setosaSWMax = d3.max(setosaMap.irises, function(d) {
                return d.SepalWidth;
            });
            var setosaSWDeviation = d3.deviation(setosaMap.irises, function(d) {
                return d.SepalWidth;
            });
            setosaSWData.sort();
            console.log(setosaSWData);

            var setosaSWIQR = ((d3.quantile(setosaSWData, 0.75)) - (d3.quantile(setosaSWData, 0.25)));
            var setosaSWThirdQ = d3.quantile(setosaSWData, 0.75);
            var setosaSWFirstQ = d3.quantile(setosaSWData, 0.25);

            var setosaPLData = setosaMap.irises.map(function(elem) {
                return elem.PetalLength;
            });
            var setosaPLMean = d3.mean(setosaMap.irises, function(d) {
                return d.PetalLength;
            });
            var setosaPLMedian = d3.median(setosaMap.irises, function(d) {
                return d.PetalLength;
            });
            var setosaPLMin = d3.min(setosaMap.irises, function(d) {
                return d.PetalLength;
            });
            var setosaPLMax = d3.max(setosaMap.irises, function(d) {
                return d.PetalLength;
            });
            var setosaPLDeviation = d3.deviation(setosaMap.irises, function(d) {
                return d.PetalLength;
            });
            var setosaPLIQR = ((d3.quantile(setosaPLData, 0.75)) - (d3.quantile(setosaPLData, 0.25)));
            var setosaPLThirdQ = d3.quantile(setosaPLData, 0.75);
            var setosaPLFirstQ = d3.quantile(setosaPLData, 0.25);

            var setosaPWData = setosaMap.irises.map(function(elem) {
                return elem.PetalLength;
            });
            var setosaPWMean = d3.mean(setosaMap.irises, function(d) {
                return d.PetalLength;
            });
            var setosaPWMedian = d3.median(setosaMap.irises, function(d) {
                return d.PetalLength;
            });
            var setosaPWMin = d3.min(setosaMap.irises, function(d) {
                return d.PetalLength;
            });
            var setosaPWMax = d3.max(setosaMap.irises, function(d) {
                return d.PetalLength;
            });
            var setosaPWDeviation = d3.deviation(setosaMap.irises, function(d) {
                return d.PetalLength;
            });
            var setosaPWIQR = ((d3.quantile(setosaPWData, 0.75)) - (d3.quantile(setosaPWData, 0.25)));
            var setosaPWThirdQ = d3.quantile(setosaPWData, 0.75);
            var setosaPWFirstQ = d3.quantile(setosaPWData, 0.25);




            var versicolorSLMean = d3.mean(versicolorMap.irises, function(d) {
                return d.SepalLength;
            });
            var versicolorSLMedian = d3.median(versicolorMap.irises, function(d) {
                return d.SepalLength;
            });
            var versicolorSLMin = d3.min(versicolorMap.irises, function(d) {
                return d.SepalLength;
            });
            var versicolorSLMax = d3.max(versicolorMap.irises, function(d) {
                return d.SepalLength;
            });
            var versicolorSLDeviation = d3.deviation(versicolorMap.irises, function(d) {
                return d.SepalLength;
            });
            var versicolorSLData = versicolorMap.irises.map(function(elem) {
                return elem.SepalLength;
            });
            versicolorSLData.sort();
            console.log(versicolorSLData);
            var versicolorIQR = ((d3.quantile(versicolorSLData, 0.75)) - (d3.quantile(versicolorSLData, 0.25)));
            var versicolorSLThirdQ = d3.quantile(versicolorSLData, 0.75);
            var versicolorSLFirstQ = d3.quantile(versicolorSLData, 0.25);

            var versicolorSWData = versicolorMap.irises.map(function(elem) {
                return elem.SepalWidth;
            });

            var versicolorSWMean = d3.mean(versicolorMap.irises, function(d) {
                return d.SepalWidth;
            });
            var versicolorSWMedian = d3.median(versicolorMap.irises, function(d) {
                return d.SepalWidth;
            });
            var versicolorSWMin = d3.min(versicolorMap.irises, function(d) {
                return d.SepalWidth;
            });
            var versicolorSWMax = d3.max(versicolorMap.irises, function(d) {
                return d.SepalWidth;
            });
            var versicolorSWDeviation = d3.deviation(versicolorMap.irises, function(d) {
                return d.SepalWidth;
            });

            versicolorSWData.sort();
            var versicolorSWIQR = ((d3.quantile(versicolorSWData, 0.75)) - (d3.quantile(versicolorSWData, 0.25)));
            var versicolorSWThirdQ = d3.quantile(versicolorSWData, 0.75);
            var versicolorSWFirstQ = d3.quantile(versicolorSWData, 0.25);


            var versicolorPLData = versicolorMap.irises.map(function(elem) {
                return elem.PetalLength;
            });

            var versicolorPLMean = d3.mean(versicolorMap.irises, function(d) {
                return d.PetalLength;
            });
            var versicolorPLMedian = d3.median(versicolorMap.irises, function(d) {
                return d.PetalLength;
            });
            var versicolorPLMin = d3.min(versicolorMap.irises, function(d) {
                return d.PetalLength;
            });
            var versicolorPLMax = d3.max(versicolorMap.irises, function(d) {
                return d.PetalLength;
            });
            var versicolorPLDeviation = d3.deviation(versicolorMap.irises, function(d) {
                return d.PetalLength;
            });

            versicolorPLData.sort();
            var versicolorPLIQR = ((d3.quantile(versicolorPLData, 0.75)) - (d3.quantile(versicolorPLData, 0.25)));
            var versicolorPLThirdQ = d3.quantile(versicolorPLData, 0.75);
            var versicolorPLFirstQ = d3.quantile(versicolorPLData, 0.25);



            var versicolorPWData = versicolorMap.irises.map(function(elem) {
                return elem.PetalLength;
            });

            var versicolorPWMean = d3.mean(versicolorMap.irises, function(d) {
                return d.PetalLength;
            });
            var versicolorPWMedian = d3.median(versicolorMap.irises, function(d) {
                return d.PetalLength;
            });
            var versicolorPWMin = d3.min(versicolorMap.irises, function(d) {
                return d.PetalLength;
            });
            var versicolorPWMax = d3.max(versicolorMap.irises, function(d) {
                return d.PetalLength;
            });
            var versicolorPWDeviation = d3.deviation(versicolorMap.irises, function(d) {
                return d.PetalLength;
            });

            versicolorPWData.sort();
            var versicolorPWIQR = ((d3.quantile(versicolorPWData, 0.75)) - (d3.quantile(versicolorPWData, 0.25)));
            var versicolorPWThirdQ = d3.quantile(versicolorPWData, 0.75);
            var versicolorPWFirstQ = d3.quantile(versicolorPWData, 0.25);




            var virginicaSLMean = d3.mean(virginicaMap.irises, function(d) {
                return d.SepalLength;
            });
            var virginicaSLMedian = d3.median(virginicaMap.irises, function(d) {
                return d.SepalLength;
            });
            var virginicaSLMin = d3.min(virginicaMap.irises, function(d) {
                return d.SepalLength;
            });
            var virginicaSLMax = d3.max(virginicaMap.irises, function(d) {
                return d.SepalLength;
            });
            var virginicaSLDeviation = d3.deviation(virginicaMap.irises, function(d) {
                return d.SepalLength;
            });

            var virginicaSLData = virginicaMap.irises.map(function(elem) {
                return elem.SepalLength;
            });

            virginicaSLData.sort();
            console.log(virginicaSLData);
            var virginicaIQR = ((d3.quantile(virginicaSLData, 0.75)) - (d3.quantile(virginicaSLData, 0.25)));
            var virginicaSLThirdQ = d3.quantile(virginicaSLData, 0.75);
            var virginicaSLFirstQ = d3.quantile(virginicaSLData, 0.25);



            var virginicaSWData = virginicaMap.irises.map(function(elem) {
                return elem.SepalWidth;
            });


            var virginicaSWMean = d3.mean(virginicaMap.irises, function(d) {
                return d.SepalWidth;
            });
            var virginicaSWMedian = d3.median(virginicaMap.irises, function(d) {
                return d.SepalWidth;
            });
            var virginicaSWMin = d3.min(virginicaMap.irises, function(d) {
                return d.SepalWidth;
            });
            var virginicaSWMax = d3.max(virginicaMap.irises, function(d) {
                return d.SepalWidth;
            });
            var virginicaSWDeviation = d3.deviation(virginicaMap.irises, function(d) {
                return d.SepalWidth;
            });


            virginicaSWData.sort();
            var virginicaSWIQR = ((d3.quantile(virginicaSWData, 0.75)) - (d3.quantile(virginicaSWData, 0.25)));
            var virginicaSWThirdQ = d3.quantile(virginicaSWData, 0.75);
            var virginicaSWFirstQ = d3.quantile(virginicaSWData, 0.25);


            var virginicaPLData = virginicaMap.irises.map(function(elem) {
                return elem.PetalLength;
            });


            var virginicaPLMean = d3.mean(virginicaMap.irises, function(d) {
                return d.PetalLength;
            });
            var virginicaPLMedian = d3.median(virginicaMap.irises, function(d) {
                return d.PetalLength;
            });
            var virginicaPLMin = d3.min(virginicaMap.irises, function(d) {
                return d.PetalLength;
            });
            var virginicaPLMax = d3.max(virginicaMap.irises, function(d) {
                return d.PetalLength;
            });
            var virginicaPLDeviation = d3.deviation(virginicaMap.irises, function(d) {
                return d.PetalLength;
            });


            virginicaPLData.sort();
            var virginicaPLIQR = ((d3.quantile(virginicaPLData, 0.75)) - (d3.quantile(virginicaPLData, 0.25)));
            var virginicaPLThirdQ = d3.quantile(virginicaPLData, 0.75);
            var virginicaPLFirstQ = d3.quantile(virginicaPLData, 0.25);



            var virginicaPWData = virginicaMap.irises.map(function(elem) {
                return elem.PetalLength;
            });


            var virginicaPWMean = d3.mean(virginicaMap.irises, function(d) {
                return d.PetalLength;
            });
            var virginicaPWMedian = d3.median(virginicaMap.irises, function(d) {
                return d.PetalLength;
            });
            var virginicaPWMin = d3.min(virginicaMap.irises, function(d) {
                return d.PetalLength;
            });
            var virginicaPWMax = d3.max(virginicaMap.irises, function(d) {
                return d.PetalLength;
            });
            var virginicaPWDeviation = d3.deviation(virginicaMap.irises, function(d) {
                return d.PetalLength;
            });


            virginicaPWData.sort();
            var virginicaPWIQR = ((d3.quantile(virginicaPWData, 0.75)) - (d3.quantile(virginicaPWData, 0.25)));
            var virginicaPWThirdQ = d3.quantile(virginicaPWData, 0.75);
            var virginicaPWFirstQ = d3.quantile(virginicaPWData, 0.25);



            console.log(virginicaSLMean);
            console.log(virginicaSLMedian);
            console.log(virginicaSLMax);
            console.log(virginicaSLMin);
            console.log(virginicaSLDeviation);






            var boxGraph = d3.select("#boxGraph0").append('svg')
                .classed("boxGraph", true)
                .attr({
                    width: chartWidth,
                    height: chartHeight
                });



            var boxPlot0 = d3.select(".boxGraph")
                .append('g')
                .classed("boxPlot", true)
                .attr({
                    x: barWidth * 0.5
                    // y: 'value2'
                });


            boxPlot0.append('rect')
                .classed("setosaIQRBox", true)
                .attr({
                    x: (barWidth * 0.5),
                    y: function() {
                        return (chartHeight - (yScale(setosaSLThirdQ)));
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScale(setosaIQR);
                    },
                    stroke: "#000000",
                    fill: "#470520"
                });

            boxPlot0.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth),
                    cy: function(argument) {
                        return (chartHeight-(yScale(d3.max(setosaSLData))));
                        // body...
                    }
                });

            boxPlot0.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth),
                    cy: function(argument) {
                        return (chartHeight - (yScale(d3.min(setosaSLData))));
                        // body...
                    }
                });
            boxPlot0.append('line')
                .attr({
                    x1: ((barWidth * 0.5) + 20),
                    x2: ((barWidth * 1.5) - 20),
                    y1: function() {
                        return (chartHeight-(yScale(setosaSLMedian)));
                    },
                    y2: function() {
                        return (chartHeight - (yScale(setosaSLMedian)));
                    },
                    "stroke-width": "8px",
                    stroke: "#ffffff"
                });

            boxPlot0.append('line')
                .attr({
                    x1: ((barWidth * 0.5) - 10),
                    x2: ((barWidth * 1.5) + 10),
                    y1: function() {
                        return (chartHeight - (yScale(setosaSLMean)));
                    },
                    y2: function() {
                        return (chartHeight - (yScale(setosaSLMean)));
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });
            boxGraph.append('g')
                .call(yAxis)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartWidth);
                    output += ")";
                    return output;
                });



            var boxPlot1 = d3.select(".boxGraph")
                .append('g')
                .classed("boxPlot", true)
                .attr({
                    x: (barWidth * 2)
                    // y: 'value2'
                });


            boxPlot1.append('rect')
                .classed("versicolorIQRBox", true)
                .attr({
                    x: (barWidth * 2),
                    y: function() {
                        return (chartHeight - (yScale(versicolorSLThirdQ)));
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScale(versicolorIQR);
                    },
                    stroke: "#000000",
                    fill: "#470520"
                });

            boxPlot1.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 2.5),
                    cy: function(argument) {
                        return (chartHeight - (yScale(d3.max(versicolorSLData))));
                        // body...
                    }
                });

            boxPlot1.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 2.5),
                    cy: function(argument) {
                        return (chartHeight - (yScale(d3.min(versicolorSLData))));
                        // body...
                    }
                });
            boxPlot1.append('line')
                .attr({
                    x1: ((barWidth * 2) + 20),
                    x2: ((barWidth * 3) - 20),
                    y1: function() {
                        return(chartHeight- ( yScale(versicolorSLMedian)));
                    },
                    y2: function() {
                        return (chartHeight-(yScale(versicolorSLMedian)));
                    },
                    "stroke-width": "10px",
                    stroke: "#ffffff"
                });

            boxPlot1.append('line')
                .attr({
                    x1: ((barWidth * 2) - 10),
                    x2: ((barWidth * 3) + 10),
                    y1: function() {
                        return (chartHeight-(yScale(versicolorSLMean)));
                    },
                    y2: function() {
                        return (chartHeight- (yScale(versicolorSLMean)));
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });


            var boxPlot2 = d3.select(".boxGraph")
                .append('g')
                .classed("boxPlot", true)
                .attr({
                    x: (barWidth * 3.5)
                    // y: 'value2'
                });


            boxPlot2.append('rect')
                .classed("virginicaIQRBox", true)
                .attr({
                    x: (barWidth * 3.5),
                    y: function() {
                        return yScale(virginicaSLFirstQ);
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScale(virginicaIQR);
                    },
                    stroke: "#000000",
                    fill: "#470520"
                });

            boxPlot2.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 4),
                    cy: function(argument) {
                        return yScale(d3.max(virginicaSLData));
                        // body...
                    }
                });

            boxPlot2.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 4),
                    cy: function(argument) {
                        return yScale(d3.min(virginicaSLData));
                        // body...
                    }
                });
            boxPlot2.append('line')
                .attr({
                    x1: ((barWidth * 3.5) + 20),
                    x2: ((barWidth * 4.5) - 20),
                    y1: function() {
                        return yScale(virginicaSLMedian);
                    },
                    y2: function() {
                        return yScale(virginicaSLMedian);
                    },
                    "stroke-width": "10px",
                    stroke: "#ffffff"
                });

            boxPlot2.append('line')
                .attr({
                    x1: ((barWidth * 3.5) - 10),
                    x2: ((barWidth * 4.5) + 10),
                    y1: function() {
                        return yScale(virginicaSLMean);
                    },
                    y2: function() {
                        return yScale(virginicaSLMean);
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });


            var chart0 = c3.generate({
                bindto: "#irisChart",
                data: {
                    json: data,
                    types: {
                        "SepalLength": 'area-spline',
                        "SepalWidth": 'bar'
                    },
                    keys: {
                        x: 'Species', // it's possible to specify 'x' when category axis
                        value: ['SepalLength', "SepalWidth"]
                    },
                    colors: {
                        "SepalLength": '#ee1169',
                        "SepalWidth": '#000000'
                    }
                },
                axis: {
                    x: {
                        type: 'category'
                    }
                }
            });
            var chart1 = c3.generate({
                bindto: "#irisChart1",
                data: {
                    json: speciesGroup,
                    types: {
                        "count": 'bar'
                    },
                    keys: {
                        x: 'Species', // it's possible to specify 'x' when category axis
                        value: ["count"]
                    },
                    colors: {
                        "count": '#470520'
                    }
                },
                axis: {
                    x: {
                        type: 'category'
                    }
                }
            });

            var chart2 = c3.generate({
                bindto: "#irisChart2",
                data: {
                    json: data,
                    types: {
                        "SepalLength": 'area-spline',
                        "PetalLength": 'area-spline',
                        "SepalWidth": 'area-spline',
                        "PetalWidth": 'area-spline'
                    },
                    keys: {
                        x: 'Species', // it's possible to specify 'x' when category axis
                        value: ['SepalLength', "SepalWidth", "PetalLength", "PetalWidth"]
                    },
                    colors: {
                        "SepalLength": '#ee1169',
                        "SepalWidth": '#000000'
                    }
                },
                axis: {
                    x: {
                        type: 'category'
                    }
                }
            });


        });
    };
    draw();
};
$(document).on('page:change', showVis);
$(window).resize(showVis);