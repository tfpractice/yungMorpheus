var showVis = function() {
    var gonURL = gon.firstURL;
    if (gonURL != null) {
        draw;
    } else {};
    var draw = function() {
        d3.selectAll("svg").remove();
        d3.json(gonURL, function(data) {
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
            var chartWidth = (screenWidth) / 2.5;
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
            var SepalWidthExtent = d3.extent(data, function(d) {
                return d.SepalWidth;
            });
            var PetalLengthExtent = d3.extent(data, function(d) {
                return d.PetalLength;
            });
            var PetalWidthExtent = d3.extent(data, function(d) {
                return d.PetalWidth;
            });

            //console.log(SepalLengthExtent);
            //console.log(SepalWidthExtent);
            //console.log(PetalLengthExtent);
            //console.log(PetalWidthExtent);
            var yScale = d3.scale.linear()
                .domain([0, SepalLengthExtent[1]])
                .range([0, (chartHeight * 0.9)]);
            var yScaleAxis = d3.scale.linear().domain([0, SepalLengthExtent[1]]).range([(chartHeight * 0.9), 0]);
            var yAxis = d3.svg.axis()
                .scale(yScaleAxis)
                .orient("left")
                .ticks(10);
            speciesGroup.push(setosaMap);
            speciesGroup.push(versicolorMap);
            speciesGroup.push(virginicaMap);

            var setosaSLData = setosaMap.irises.map(function(elem) {
                return elem.SepalLength;
            });

            setosaSLData.sort();
            var setosaSLMean = d3.mean(setosaSLData);
            var setosaSLMedian = d3.median(setosaSLData);
            var setosaSLMin = d3.min(setosaSLData);
            var setosaSLMax = d3.max(setosaSLData);
            var setosaSLDeviation = d3.deviation(setosaSLData);

            var setosaIQR = ((d3.quantile(setosaSLData, 0.75)) - (d3.quantile(setosaSLData, 0.25)));
            var setosaSLThirdQ = d3.quantile(setosaSLData, 0.75);
            var setosaSLFirstQ = d3.quantile(setosaSLData, 0.25);


            var setosaSWData = setosaMap.irises.map(function(elem) {
                return elem.SepalWidth;
            });
            setosaSWData.sort();
            var setosaSWMean = d3.mean(setosaSWData);
            var setosaSWMedian = d3.median(setosaSWData);
            var setosaSWMin = d3.min(setosaSWData);
            var setosaSWMax = d3.max(setosaSWData);
            var setosaSWDeviation = d3.deviation(setosaSWData);

            var setosaSWIQR = ((d3.quantile(setosaSWData, 0.75)) - (d3.quantile(setosaSWData, 0.25)));
            var setosaSWThirdQ = d3.quantile(setosaSWData, 0.75);
            var setosaSWFirstQ = d3.quantile(setosaSWData, 0.25);


            var setosaPLData = setosaMap.irises.map(function(elem) {
                return elem.PetalLength;

            });
            setosaPLData.sort();
            var setosaPLData = setosaMap.irises.map(function(elem) {
                return elem.PetalLength;

            });
            setosaPLData.sort();
            var setosaPLMean = d3.mean(setosaPLData);
            var setosaPLMedian = d3.median(setosaPLData);
            var setosaPLMin = d3.min(setosaPLData);
            var setosaPLMax = d3.max(setosaPLData);
            var setosaPLDeviation = d3.deviation(setosaPLData);
            var setosaPLIQR = ((d3.quantile(setosaPLData, 0.75)) - (d3.quantile(setosaPLData, 0.25)));
            var setosaPLThirdQ = d3.quantile(setosaPLData, 0.75);
            var setosaPLFirstQ = d3.quantile(setosaPLData, 0.25);



            var setosaPWData = setosaMap.irises.map(function(elem) {
                return elem.PetalWidth;
            });
            setosaPWData.sort();
            console.log(setosaPWData);
            var setosaPWData = setosaMap.irises.map(function(elem) {
                return elem.PetalWidth;
            });
            setosaPWData.sort()
            var setosaPWMean = d3.mean(setosaPWData);
            var setosaPWMedian = d3.median(setosaPWData);
            var setosaPWMin = d3.min(setosaPWData);
            var setosaPWMax = d3.max(setosaPWData);
            var setosaPWDeviation = d3.deviation(setosaPWData);
            var setosaPWIQR = ((d3.quantile(setosaPWData, 0.75)) - (d3.quantile(setosaPWData, 0.25)));
            var setosaPWThirdQ = d3.quantile(setosaPWData, 0.75);
            var setosaPWFirstQ = d3.quantile(setosaPWData, 0.25);

            var versicolorSLData = versicolorMap.irises.map(function(elem) {
                return elem.SepalLength;
            });
            versicolorSLData.sort();
            var versicolorSLMean = d3.mean(versicolorSLData);
            var versicolorSLMedian = d3.median(versicolorSLData);
            var versicolorSLMin = d3.min(versicolorSLData);
            var versicolorSLMax = d3.max(versicolorSLData);
            var versicolorSLDeviation = d3.deviation(versicolorSLData);

            var versicolorIQR = ((d3.quantile(versicolorSLData, 0.75)) - (d3.quantile(versicolorSLData, 0.25)));
            var versicolorSLThirdQ = d3.quantile(versicolorSLData, 0.75);
            var versicolorSLFirstQ = d3.quantile(versicolorSLData, 0.25);



            var versicolorSWData = versicolorMap.irises.map(function(elem) {
                return elem.SepalWidth;
            });
            versicolorSWData.sort();
            var versicolorSWMean = d3.mean(versicolorSWData);
            var versicolorSWMedian = d3.median(versicolorSWData);
            var versicolorSWMin = d3.min(versicolorSWData);
            var versicolorSWMax = d3.max(versicolorSWData);
            var versicolorSWDeviation = d3.deviation(versicolorSWData);


            var versicolorSWIQR = ((d3.quantile(versicolorSWData, 0.75)) - (d3.quantile(versicolorSWData, 0.25)));
            var versicolorSWThirdQ = d3.quantile(versicolorSWData, 0.75);
            var versicolorSWFirstQ = d3.quantile(versicolorSWData, 0.25);




            var versicolorPLData = versicolorMap.irises.map(function(elem) {
                return elem.PetalLength;
            });
            versicolorPLData.sort();
            var versicolorPLMean = d3.mean(versicolorPLData);
            var versicolorPLMedian = d3.median(versicolorPLData);
            var versicolorPLMin = d3.min(versicolorPLData);
            var versicolorPLMax = d3.max(versicolorPLData);
            var versicolorPLDeviation = d3.deviation(versicolorPLData);


            var versicolorPLIQR = ((d3.quantile(versicolorPLData, 0.75)) - (d3.quantile(versicolorPLData, 0.25)));
            var versicolorPLThirdQ = d3.quantile(versicolorPLData, 0.75);
            var versicolorPLFirstQ = d3.quantile(versicolorPLData, 0.25);

            var versicolorPWData = versicolorMap.irises.map(function(elem) {
                return elem.PetalWidth;
            });
            versicolorPWData.sort();
            var versicolorPWMean = d3.mean(versicolorPWData);
            var versicolorPWMedian = d3.median(versicolorPWData);
            var versicolorPWMin = d3.min(versicolorPWData);
            var versicolorPWMax = d3.max(versicolorPWData);
            var versicolorPWDeviation = d3.deviation(versicolorPWData);
            var versicolorPWIQR = ((d3.quantile(versicolorPWData, 0.75)) - (d3.quantile(versicolorPWData, 0.25)));
            var versicolorPWThirdQ = d3.quantile(versicolorPWData, 0.75);
            var versicolorPWFirstQ = d3.quantile(versicolorPWData, 0.25);

            var virginicaSLData = virginicaMap.irises.map(function(elem) {
                return elem.SepalLength;
            });
            virginicaSLData.sort();
            var virginicaSLMean = d3.mean(virginicaSLData);
            var virginicaSLMedian = d3.median(virginicaSLData);
            var virginicaSLMin = d3.min(virginicaSLData);
            var virginicaSLMax = d3.max(virginicaSLData);
            var virginicaSLDeviation = d3.deviation(virginicaSLData);


            var virginicaIQR = ((d3.quantile(virginicaSLData, 0.75)) - (d3.quantile(virginicaSLData, 0.25)));
            var virginicaSLThirdQ = d3.quantile(virginicaSLData, 0.75);
            var virginicaSLFirstQ = d3.quantile(virginicaSLData, 0.25);


            var virginicaSWData = virginicaMap.irises.map(function(elem) {
                return elem.SepalWidth;
            });
            virginicaSWData.sort();
            var virginicaSWMean = d3.mean(virginicaSWData);
            var virginicaSWMedian = d3.median(virginicaSWData);
            var virginicaSWMin = d3.min(virginicaSWData);
            var virginicaSWMax = d3.max(virginicaSWData);
            var virginicaSWDeviation = d3.deviation(virginicaSWData);


            var virginicaSWIQR = ((d3.quantile(virginicaSWData, 0.75)) - (d3.quantile(virginicaSWData, 0.25)));
            var virginicaSWThirdQ = d3.quantile(virginicaSWData, 0.75);
            var virginicaSWFirstQ = d3.quantile(virginicaSWData, 0.25);


            var virginicaPLData = virginicaMap.irises.map(function(elem) {
                return elem.PetalLength;
            });
            virginicaPLData.sort();
            var virginicaPLMean = d3.mean(virginicaPLData);
            var virginicaPLMedian = d3.median(virginicaPLData);
            var virginicaPLMin = d3.min(virginicaPLData);
            var virginicaPLMax = d3.max(virginicaPLData);
            var virginicaPLDeviation = d3.deviation(virginicaPLData);



            var virginicaPLIQR = ((d3.quantile(virginicaPLData, 0.75)) - (d3.quantile(virginicaPLData, 0.25)));
            var virginicaPLThirdQ = d3.quantile(virginicaPLData, 0.75);
            var virginicaPLFirstQ = d3.quantile(virginicaPLData, 0.25);


            var virginicaPWData = virginicaMap.irises.map(function(elem) {
                return elem.PetalWidth;
            });
            virginicaPWData.sort();
            var virginicaPWMean = d3.mean(virginicaPWData);
            var virginicaPWMedian = d3.median(virginicaPWData);
            var virginicaPWMin = d3.min(virginicaPWData);
            var virginicaPWMax = d3.max(virginicaPWData);
            var virginicaPWDeviation = d3.deviation(virginicaPWData);


            var virginicaPWIQR = ((d3.quantile(virginicaPWData, 0.75)) - (d3.quantile(virginicaPWData, 0.25)));
            var virginicaPWThirdQ = d3.quantile(virginicaPWData, 0.75);
            var virginicaPWFirstQ = d3.quantile(virginicaPWData, 0.25);
            var yScaleSL = d3.scale.linear()
                .domain([0, SepalLengthExtent[1]])
                .range([0, (chartHeight * 0.9)]);
            var yScaleSLAxis = d3.scale.linear().domain([0, SepalLengthExtent[1]]).range([(chartHeight * 0.9), 0]);
            var yAxisSL = d3.svg.axis()
                .scale(yScaleSLAxis)
                .orient("left")
                .ticks(10);


            var boxGraph0 = d3.select("#boxGraph0").append('svg')
                .classed("boxGraph0", true)
                .attr({
                    width: chartWidth,
                    height: chartHeight
                });
            var boxPlot0 = d3.select(".boxGraph0")
                .append('g')
                .classed("boxPlot", true)
                .attr({
                    x: barWidth * 0.5
                });
            boxPlot0.append('rect')
                .classed("setosaIQRBox", true)
                .attr({
                    x: (barWidth * 0.5),
                    y: function() {
                        return (chartHeight - (yScaleSL(setosaSLThirdQ)));
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScaleSL(setosaIQR);
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
                        return (chartHeight - (yScaleSL(d3.max(setosaSLData))));
                    }
                });
            boxPlot0.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth),
                    cy: function(argument) {
                        return (chartHeight - (yScaleSL(d3.min(setosaSLData))));
                    }
                });
            boxPlot0.append('line')
                .attr({
                    x1: ((barWidth * 0.5) + 20),
                    x2: ((barWidth * 1.5) - 20),
                    y1: function() {
                        return (chartHeight - (yScaleSL(setosaSLMedian)));
                    },
                    y2: function() {
                        return (chartHeight - (yScaleSL(setosaSLMedian)));
                    },
                    "stroke-width": "8px",
                    stroke: "#00ff80"
                });
            boxPlot0.append('line')
                .attr({
                    x1: ((barWidth * 0.5) - 10),
                    x2: ((barWidth * 1.5) + 10),
                    y1: function() {
                        return (chartHeight - (yScaleSL(setosaSLMean)));
                    },
                    y2: function() {
                        return (chartHeight - (yScaleSL(setosaSLMean)));
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });
            boxGraph0.append('g')
                .call(yAxisSL)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.08 * chartWidth);
                    output += ",";
                    output += (0.05 * chartWidth);
                    output += ")";
                    return output;
                });
            var boxPlot1 = d3.select(".boxGraph0")
                .append('g')
                .classed("boxPlot", true)
                .attr({
                    x: (barWidth * 2)
                });
            boxPlot1.append('rect')
                .classed("versicolorIQRBox", true)
                .attr({
                    x: (barWidth * 2),
                    y: function() {
                        return (chartHeight - (yScaleSL(versicolorSLThirdQ)));
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScaleSL(versicolorIQR);
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
                        return (chartHeight - (yScaleSL(d3.max(versicolorSLData))));
                    }
                });
            boxPlot1.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 2.5),
                    cy: function(argument) {
                        return (chartHeight - (yScaleSL(d3.min(versicolorSLData))));
                    }
                });
            boxPlot1.append('line')
                .attr({
                    x1: ((barWidth * 2) + 20),
                    x2: ((barWidth * 3) - 20),
                    y1: function() {
                        return (chartHeight - (yScaleSL(versicolorSLMedian)));
                    },
                    y2: function() {
                        return (chartHeight - (yScaleSL(versicolorSLMedian)));
                    },
                    "stroke-width": "10px",
                    stroke: "#00ff80"
                });
            boxPlot1.append('line')
                .attr({
                    x1: ((barWidth * 2) - 10),
                    x2: ((barWidth * 3) + 10),
                    y1: function() {
                        return (chartHeight - (yScaleSL(versicolorSLMean)));
                    },
                    y2: function() {
                        return (chartHeight - (yScaleSL(versicolorSLMean)));
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });
            var boxPlot2 = d3.select(".boxGraph0")
                .append('g')
                .classed("boxPlot", true)
                .attr({
                    x: (barWidth * 3.5)
                });
            boxPlot2.append('rect')
                .classed("virginicaIQRBox", true)
                .attr({
                    x: (barWidth * 3.5),
                    y: function() {
                        return ((yScaleSL(virginicaSLFirstQ)));
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScaleSL(virginicaIQR);
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
                        return yScaleSL(d3.max(virginicaSLData));
                    }
                });
            boxPlot2.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 4),
                    cy: function(argument) {
                        return yScaleSL(d3.min(virginicaSLData));
                    }
                });
            boxPlot2.append('line')
                .attr({
                    x1: ((barWidth * 3.5) + 20),
                    x2: ((barWidth * 4.5) - 20),
                    y1: function() {
                        return yScaleSL(virginicaSLMedian);
                    },
                    y2: function() {
                        return yScaleSL(virginicaSLMedian);
                    },
                    "stroke-width": "10px",
                    stroke: "#00ff80"
                });
            boxPlot2.append('line')
                .attr({
                    x1: ((barWidth * 3.5) - 10),
                    x2: ((barWidth * 4.5) + 10),
                    y1: function() {
                        return yScaleSL(virginicaSLMean);
                    },
                    y2: function() {
                        return yScaleSL(virginicaSLMean);
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });


            //////sepal width stats
            var yScaleSW = d3.scale.linear()
                .domain([0, SepalWidthExtent[1]])
                .range([0, (chartHeight * 0.9)]);
            var yScaleSWAxis = d3.scale.linear().domain([0, SepalWidthExtent[1]]).range([(chartHeight * 0.9), 0]);
            var yAxisSW = d3.svg.axis()
                .scale(yScaleSWAxis)
                .orient("left")
                .ticks(10);


            var boxGraph1 = d3.select("#boxGraph1").append('svg')
                .classed("boxGraph1", true)
                .attr({
                    width: chartWidth,
                    height: chartHeight
                });
            var boxPlot10 = d3.select(".boxGraph1")
                .append('g')
                .classed("boxPlot1", true)
                .attr({
                    x: barWidth * 0.5
                });
            boxPlot10.append('rect')
                .classed("setosaIQRBox", true)
                .attr({
                    x: (barWidth * 0.5),
                    y: function() {
                        return (chartHeight - (yScaleSW(setosaSWThirdQ)));
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScaleSW(setosaSWIQR);
                    },
                    stroke: "#000000",
                    fill: "#470520"
                });
            boxPlot10.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth),
                    cy: function(argument) {
                        return (chartHeight - (yScaleSW(d3.max(setosaSWData))));
                    }
                });
            boxPlot10.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth),
                    cy: function(argument) {
                        return (chartHeight - (yScaleSW(d3.min(setosaSWData))));
                    }
                });
            boxPlot10.append('line')
                .attr({
                    x1: ((barWidth * 0.5) + 20),
                    x2: ((barWidth * 1.5) - 20),
                    y1: function() {
                        return (chartHeight - (yScaleSW(setosaSWMedian)));
                    },
                    y2: function() {
                        return (chartHeight - (yScaleSW(setosaSWMedian)));
                    },
                    "stroke-width": "8px",
                    stroke: "#00ff80"
                });
            boxPlot10.append('line')
                .attr({
                    x1: ((barWidth * 0.5) - 10),
                    x2: ((barWidth * 1.5) + 10),
                    y1: function() {
                        return (chartHeight - (yScaleSW(setosaSWMean)));
                    },
                    y2: function() {
                        return (chartHeight - (yScaleSW(setosaSWMean)));
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });
            boxGraph1.append('g')
                .call(yAxisSW)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.08 * chartWidth);
                    output += ",";
                    output += (0.05 * chartWidth);
                    output += ")";
                    return output;
                });
            var boxPlot11 = d3.select(".boxGraph1")
                .append('g')
                .classed("boxPlot1", true)
                .attr({
                    x: (barWidth * 2)
                });
            boxPlot11.append('rect')
                .classed("versicolorIQRBox", true)
                .attr({
                    x: (barWidth * 2),
                    y: function() {
                        return (chartHeight - (yScaleSW(versicolorSWThirdQ)));
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScaleSW(versicolorSWIQR);
                    },
                    stroke: "#000000",
                    fill: "#470520"
                });
            boxPlot11.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 2.5),
                    cy: function(argument) {
                        return (chartHeight - (yScaleSW(d3.max(versicolorSWData))));
                    }
                });
            boxPlot11.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 2.5),
                    cy: function(argument) {
                        return (chartHeight - (yScaleSW(d3.min(versicolorSWData))));
                    }
                });
            boxPlot11.append('line')
                .attr({
                    x1: ((barWidth * 2) + 20),
                    x2: ((barWidth * 3) - 20),
                    y1: function() {
                        return (chartHeight - (yScaleSW(versicolorSWMedian)));
                    },
                    y2: function() {
                        return (chartHeight - (yScaleSW(versicolorSWMedian)));
                    },
                    "stroke-width": "10px",
                    stroke: "#00ff80"
                });
            boxPlot11.append('line')
                .attr({
                    x1: ((barWidth * 2) - 10),
                    x2: ((barWidth * 3) + 10),
                    y1: function() {
                        return (chartHeight - (yScaleSW(versicolorSWMean)));
                    },
                    y2: function() {
                        return (chartHeight - (yScaleSW(versicolorSWMean)));
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });
            var boxPlot12 = d3.select(".boxGraph1")
                .append('g')
                .classed("boxPlot1", true)
                .attr({
                    x: (barWidth * 3.5)
                });
            boxPlot12.append('rect')
                .classed("virginicaIQRBox", true)
                .attr({
                    x: (barWidth * 3.5),
                    y: function() {
                        return ((yScaleSW(virginicaSWFirstQ)));
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScaleSW(virginicaSWIQR);
                    },
                    stroke: "#000000",
                    fill: "#470520"
                });
            boxPlot12.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 4),
                    cy: function(argument) {
                        return yScaleSW(d3.max(virginicaSWData));
                    }
                });
            boxPlot12.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 4),
                    cy: function(argument) {
                        return yScaleSW(d3.min(virginicaSWData));
                    }
                });
            boxPlot12.append('line')
                .attr({
                    x1: ((barWidth * 3.5) + 20),
                    x2: ((barWidth * 4.5) - 20),
                    y1: function() {
                        return yScaleSW(virginicaSWMedian);
                    },
                    y2: function() {
                        return yScaleSW(virginicaSWMedian);
                    },
                    "stroke-width": "10px",
                    stroke: "#00ff80"
                });
            boxPlot12.append('line')
                .attr({
                    x1: ((barWidth * 3.5) - 10),
                    x2: ((barWidth * 4.5) + 10),
                    y1: function() {
                        return yScaleSW(virginicaSWMean);
                    },
                    y2: function() {
                        return yScaleSW(virginicaSWMean);
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });





            /////end sepal width stats



            //Petal length

            var yScalePL = d3.scale.linear()
                .domain([0, PetalLengthExtent[1]])
                .range([0, (chartHeight * 0.9)]);
            var yScalePLAxis = d3.scale.linear().domain([0, PetalLengthExtent[1]]).range([(chartHeight * 0.9), 0]);
            var yAxisPL = d3.svg.axis()
                .scale(yScalePLAxis)
                .orient("left")
                .ticks(10);


            var boxGraph2 = d3.select("#boxGraph2").append('svg')
                .classed("boxGraph2", true)
                .attr({
                    width: chartWidth,
                    height: chartHeight
                });
            var boxPlot20 = d3.select(".boxGraph2")
                .append('g')
                .classed("boxPlot2", true)
                .attr({
                    x: barWidth * 0.5
                });
            boxPlot20.append('rect')
                .classed("setosaIQRBox", true)
                .attr({
                    x: (barWidth * 0.5),
                    y: function() {
                        return (chartHeight - (yScalePL(setosaPLThirdQ)));
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScalePL(setosaPLIQR);
                    },
                    stroke: "#000000",
                    fill: "#470520"
                });
            boxPlot20.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth),
                    cy: function(argument) {
                        return (chartHeight - (yScalePL(d3.max(setosaPLData))));
                    }
                });
            boxPlot20.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth),
                    cy: function(argument) {
                        return (chartHeight - (yScalePL(d3.min(setosaPLData))));
                    }
                });
            boxPlot20.append('line')
                .attr({
                    x1: ((barWidth * 0.5) + 20),
                    x2: ((barWidth * 1.5) - 20),
                    y1: function() {
                        return (chartHeight - (yScalePL(setosaPLMedian)));
                    },
                    y2: function() {
                        return (chartHeight - (yScalePL(setosaPLMedian)));
                    },
                    "stroke-width": "8px",
                    stroke: "#00ff80"
                });
            boxPlot20.append('line')
                .attr({
                    x1: ((barWidth * 0.5) - 10),
                    x2: ((barWidth * 1.5) + 10),
                    y1: function() {
                        return (chartHeight - (yScalePL(setosaPLMean)));
                    },
                    y2: function() {
                        return (chartHeight - (yScalePL(setosaPLMean)));
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });
            boxGraph2.append('g')
                .call(yAxisPL)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartWidth);
                    output += ")";
                    return output;
                });
            var boxPlot21 = d3.select(".boxGraph2")
                .append('g')
                .classed("boxPlot2", true)
                .attr({
                    x: (barWidth * 2)
                });
            boxPlot21.append('rect')
                .classed("versicolorIQRBox", true)
                .attr({
                    x: (barWidth * 2),
                    y: function() {
                        return (chartHeight - (yScalePL(versicolorPLThirdQ)));
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScalePL(versicolorPLIQR);
                    },
                    stroke: "#000000",
                    fill: "#470520"
                });
            boxPlot21.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 2.5),
                    cy: function(argument) {
                        return (chartHeight - (yScalePL(d3.max(versicolorPLData))));
                    }
                });
            boxPlot21.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 2.5),
                    cy: function(argument) {
                        return (chartHeight - (yScalePL(d3.min(versicolorPLData))));
                    }
                });
            boxPlot21.append('line')
                .attr({
                    x1: ((barWidth * 2) + 20),
                    x2: ((barWidth * 3) - 20),
                    y1: function() {
                        return (chartHeight - (yScalePL(versicolorPLMedian)));
                    },
                    y2: function() {
                        return (chartHeight - (yScalePL(versicolorPLMedian)));
                    },
                    "stroke-width": "10px",
                    stroke: "#00ff80"
                });
            boxPlot21.append('line')
                .attr({
                    x1: ((barWidth * 2) - 10),
                    x2: ((barWidth * 3) + 10),
                    y1: function() {
                        return (chartHeight - (yScalePL(versicolorPLMean)));
                    },
                    y2: function() {
                        return (chartHeight - (yScalePL(versicolorPLMean)));
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });
            var boxPlot22 = d3.select(".boxGraph2")
                .append('g')
                .classed("boxPlot2", true)
                .attr({
                    x: (barWidth * 3.5)
                });
            boxPlot22.append('rect')
                .classed("virginicaIQRBox", true)
                .attr({
                    x: (barWidth * 3.5),
                    y: function() {
                        return yScalePL(virginicaPLFirstQ);
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScalePL(virginicaPLIQR);
                    },
                    stroke: "#000000",
                    fill: "#470520"
                });
            boxPlot22.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 4),
                    cy: function(argument) {
                        return yScalePL(d3.max(virginicaPLData));
                    }
                });
            boxPlot22.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 4),
                    cy: function(argument) {
                        return yScalePL(d3.min(virginicaPLData));
                    }
                });
            boxPlot22.append('line')
                .attr({
                    x1: ((barWidth * 3.5) + 20),
                    x2: ((barWidth * 4.5) - 20),
                    y1: function() {
                        return yScalePL(virginicaPLMedian);
                    },
                    y2: function() {
                        return yScalePL(virginicaPLMedian);
                    },
                    "stroke-width": "10px",
                    stroke: "#00ff80"
                });
            boxPlot22.append('line')
                .attr({
                    x1: ((barWidth * 3.5) - 10),
                    x2: ((barWidth * 4.5) + 10),
                    y1: function() {
                        return yScalePL(virginicaPLMean);
                    },
                    y2: function() {
                        return yScalePL(virginicaPLMean);
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });

            ///end petal length

            //petal width

            var yScalePW = d3.scale.linear()
                .domain([0, PetalWidthExtent[1]])
                .range([0, (chartHeight * 0.9)]);
            var yScalePWAxis = d3.scale.linear().domain([0, PetalWidthExtent[1]]).range([(chartHeight * 0.9), 0]);
            var yAxisPW = d3.svg.axis()
                .scale(yScalePWAxis)
                .orient("left")
                .ticks(10);



            var boxGraph3 = d3.select("#boxGraph3").append('svg')
                .classed("boxGraph3", true)
                .attr({
                    width: chartWidth,
                    height: chartHeight
                });
            var boxPlot30 = d3.select(".boxGraph3")
                .append('g')
                .classed("boxPlot3", true)
                .attr({
                    x: barWidth * 0.5
                });
            boxPlot30.append('rect')
                .classed("setosaIQRBox", true)
                .attr({
                    x: (barWidth * 0.5),
                    y: function() {
                        return (chartHeight - (yScalePW(setosaPWThirdQ)));
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScalePW(setosaPWIQR);
                    },
                    stroke: "#000000",
                    fill: "#470520"
                });

            console.log((yScalePW(setosaPWThirdQ)));
            console.log(setosaPWThirdQ);
            console.log(setosaPWFirstQ);
            console.log(setosaPWMean);
            console.log(setosaPWMedian);
            boxPlot30.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth),
                    cy: function(argument) {
                        return (chartHeight - (yScalePW(d3.max(setosaPWData))));
                    }
                });
            boxPlot30.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth),
                    cy: function(argument) {
                        return (chartHeight - (yScalePW(d3.min(setosaPWData))));
                    }

                });
            boxPlot30.append('line')
                .attr({
                    x1: ((barWidth * 0.5) + 20),
                    x2: ((barWidth * 1.5) - 20),
                    y1: function() {
                        return (chartHeight - (yScalePW(setosaPWMedian)));
                    },
                    y2: function() {
                        return (chartHeight - (yScalePW(setosaPWMedian)));
                    },
                    "stroke-width": "8px",
                    stroke: "#00ff80"
                });
            boxPlot30.append('line')
                .attr({
                    x1: ((barWidth * 0.5) - 10),
                    x2: ((barWidth * 1.5) + 10),
                    y1: function() {
                        return (chartHeight - (yScalePW(setosaPWMean)));
                    },
                    y2: function() {
                        return (chartHeight - (yScalePW(setosaPWMean)));
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });
            boxGraph3.append('g')
                .call(yAxisPW)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartWidth);
                    output += ")";
                    return output;
                });
            var boxPlot31 = d3.select(".boxGraph3")
                .append('g')
                .classed("boxPlot3", true)
                .attr({
                    x: (barWidth * 2)
                });
            boxPlot31.append('rect')
                .classed("versicolorIQRBox", true)
                .attr({
                    x: (barWidth * 2),
                    y: function() {
                        return (chartHeight - (yScalePW(versicolorPWThirdQ)));
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScalePW(versicolorPWIQR);
                    },
                    stroke: "#000000",
                    fill: "#470520"
                });
            boxPlot31.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 2.5),
                    cy: function(argument) {
                        return (chartHeight - (yScalePW(d3.max(versicolorPWData))));
                    }
                });
            boxPlot31.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 2.5),
                    cy: function(argument) {
                        return (chartHeight - (yScalePW(d3.min(versicolorPWData))));
                    }
                });
            boxPlot31.append('line')
                .attr({
                    x1: ((barWidth * 2) + 20),
                    x2: ((barWidth * 3) - 20),
                    y1: function() {
                        return (chartHeight - (yScalePW(versicolorPWMedian)));
                    },
                    y2: function() {
                        return (chartHeight - (yScalePW(versicolorPWMedian)));
                    },
                    "stroke-width": "10px",
                    stroke: "#00ff80"
                });
            boxPlot31.append('line')
                .attr({
                    x1: ((barWidth * 2) - 10),
                    x2: ((barWidth * 3) + 10),
                    y1: function() {
                        return (chartHeight - (yScalePW(versicolorPWMean)));
                    },
                    y2: function() {
                        return (chartHeight - (yScalePW(versicolorPWMean)));
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });
            var boxPlot32 = d3.select(".boxGraph3")
                .append('g')
                .classed("boxPlot3", true)
                .attr({
                    x: (barWidth * 3.5)
                });
            boxPlot32.append('rect')
                .classed("virginicaIQRBox", true)
                .attr({
                    x: (barWidth * 3.5),
                    y: function() {
                        return ((yScalePW(virginicaPWFirstQ)));
                    },
                    "width": barWidth,
                    "height": function() {
                        return yScalePW(virginicaPWIQR);
                    },
                    stroke: "#000000",
                    fill: "#470520"
                });
            boxPlot32.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 4),
                    cy: function(argument) {
                        return yScalePW(d3.max(virginicaPWData));
                    }
                });
            boxPlot32.append('circle')
                .classed("extremum", true)
                .attr({
                    r: 10,
                    cx: (barWidth * 4),
                    cy: function(argument) {
                        return yScalePW(d3.min(virginicaPWData));
                    }
                });
            boxPlot32.append('line')
                .attr({
                    x1: ((barWidth * 3.5) + 20),
                    x2: ((barWidth * 4.5) - 20),
                    y1: function() {
                        return yScalePW(virginicaPWMedian);
                    },
                    y2: function() {
                        return yScalePW(virginicaPWMedian);
                    },
                    "stroke-width": "10px",
                    stroke: "#00ff80"
                });
            boxPlot32.append('line')
                .attr({
                    x1: ((barWidth * 3.5) - 10),
                    x2: ((barWidth * 4.5) + 10),
                    y1: function() {
                        return yScalePW(virginicaPWMean);
                    },
                    y2: function() {
                        return yScalePW(virginicaPWMean);
                    },
                    "stroke-width": "3px",
                    stroke: "#ee1189"
                });
            //end petal width

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
                        "SepalLength": 'scatter',
                        "PetalLength": 'scatter',
                        "SepalWidth": 'scatter',
                        "PetalWidth": 'scatter'
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
$(document).on('page:change', showVis());
$(window).resize(showVis);