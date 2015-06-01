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
            var chartWidth = (screenWidth) / 3;
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
                .range([0, chartHeight]);




            speciesGroup.push(setosaMap);
            speciesGroup.push(versicolorMap);
            speciesGroup.push(virginicaMap);

            function getPLZ(observation, mean, deviation) {
                observation.PLZ = ((observation.PetalLength - mean) / deviation);
                //console.log(observation.PLZ);

            }

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

            var setosaIQR = ((d3.quantile(setosaSLData, 0.75)) - (d3.quantile(setosaSLData, 0.25)));
            var setosaSLThirdQ = d3.quantile(setosaSLData, 0.75);
            var setosaSLFirstQ = d3.quantile(setosaSLData, 0.25);



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
            var setosaPLDeviation = d3.deviation(setosaPLData);

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

            var versicolorPLDeviation = d3.deviation(versicolorPLData);

            versicolorMap.irises.forEach(function(elem, index, array) {
                getPLZ(elem, versicolorPLMean, versicolorPLDeviation);


            });


            var versicolorPLZData = versicolorMap.irises.map(function(elem) {
                return elem.PLZ;
            });
            var versicolorPLZMean = d3.mean(versicolorPLZData);
            var versicolorPLZMax = d3.max(versicolorPLZData);
            var versicolorPLZMin = d3.min(versicolorPLZData);
            //console.log(versicolorPLZMax);
            //console.log(versicolorPLZMin);
            versicolorPLZDeviation = d3.deviation(versicolorPLZData);
            var versicolorNDistContainer = d3.select("#versicolorNDistContainer")
                .append('svg')
                .classed("NDistContainer", true)
                .attr({
                    width: chartWidth,
                    height: chartHeight
                });

            var versicolorPLZHistScaleY = d3.scale.linear()
                .domain([0, 0.5])
                .range([0, (chartHeight * 0.9)]);

            var versicolorPLZHistAxisScaleY = d3.scale.linear()
                .domain([0, 0.5])
                .range([(chartHeight * 0.9), 0]);

            var versicolorPLZHistScaleX = d3.scale.linear()
                .domain([d3.min(versicolorPLZData), d3.max(versicolorPLZData)])
                .range([0, (chartWidth * 0.9)]);

            var versicolorPLZHistogram = d3.layout.histogram()
                .bins(6).frequency(0)(versicolorPLZData);

            var versicolorPLZHistScaleDX = d3.scale.linear()
                .domain([0, d3.max(versicolorPLZHistogram.map(function(d) {
                    return d.dx;
                }))])
                .range([0, ((chartWidth * 0.9) / 6)]);

            var versicolorPLZHistAxisX = d3.svg.axis().scale(versicolorPLZHistScaleX).orient("bottom");
            var versicolorPLZHistAxisY = d3.svg.axis().scale(versicolorPLZHistScaleY).orient("left");
            var versicolorPLZHistAxisScaleY = d3.svg.axis().scale(versicolorPLZHistAxisScaleY).orient("left");
            //console.log(versicolorPLZHistogram);

            // var versicolorPLZHistogram = d3.layout.histogram()
            //     .bins(6).frequency(0)(versicolorPLZData);

            var versicolorPLZHistScaleY = d3.scale.linear()
                .domain([0, 0.5])
                .range([0, (chartHeight * 0.9)]);
            var versicolorPLZHistScaleX = d3.scale.linear()
                .domain([d3.min(versicolorPLZData), d3.max(versicolorPLZData)])
                .range([0, (chartWidth * 0.9)]);
            var versicolorPLZHistScaleDX = d3.scale.linear()
                .domain([0, d3.max(versicolorPLZHistogram.map(function(d) {
                    return d.dx;
                }))])
                .range([0, ((chartWidth * 0.9) / 6)]);

            var versicolorPLZHistAxisX = d3.svg.axis().scale(versicolorPLZHistScaleX).orient("bottom");
            var versicolorPLZHistAxisY = d3.svg.axis().scale(versicolorPLZHistScaleY).orient("left");

            var versicolorPLZContainer = d3.select("#versicolorPLZContainer").append('svg')
                .classed("PLZContainer", true)
                .attr({
                    width: chartWidth,
                    height: chartHeight
                });





            var versicolorPLZBars = versicolorPLZContainer.selectAll('.versicolorPLZBar')
                .data(versicolorPLZHistogram)
                .enter()
                .append('g')
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartHeight);
                    output += ")";
                    return output;
                });

            versicolorPLZBars.append('rect')
                .attr({
                    x: function(d) {
                        return (versicolorPLZHistScaleX(d.x));
                    },
                    y: function(d) {
                        return (chartHeight * 0.9) - versicolorPLZHistScaleY(d.y);
                    },
                    "height": function(d) {
                        return versicolorPLZHistScaleY(d.y);
                    },
                    "width": function(d) {
                        return Math.abs(versicolorPLZHistScaleDX(d.dx));
                    },
                    fill: "#470520",
                    stroke: '#ee1169'
                });

            var versicolorPLZAxisGroupX = versicolorPLZContainer.append('g')
                .call(versicolorPLZHistAxisX)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (chartHeight * 0.95);
                    output += ")";
                    return output;
                });
            var versicolorPLZAxisGroupY = versicolorPLZContainer.append('g')
                .call(versicolorPLZHistAxisScaleY)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartHeight);
                    output += ")";
                    return output;
                });


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
            var virginicaPLDeviation = d3.deviation(virginicaPLData);



            // var versicolorPLHistAxisX = d3.svg.axis().scale(versicolorPLHistScaleX).orient("bottom");
            // var versicolorPLHistAxisY = d3.svg.axis().scale(versicolorPLHistScaleY).orient("left");



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







            var setosaSLHistogram = d3.layout.histogram()
                .bins(6).frequency(0)(setosaSLData);

            var setosaSLHistScaleY = d3.scale.linear()
                .domain([0, 0.5])
                .range([0, (chartHeight * 0.9)]);
            var setosaSLHistScaleX = d3.scale.linear()
                .domain([d3.min(setosaSLData), d3.max(setosaSLData)])
                .range([0, (chartWidth * 0.9)]);
            var setosaSLHistScaleDX = d3.scale.linear()
                .domain([0, d3.max(setosaSLHistogram.map(function(d) {
                    return d.dx;
                }))])
                .range([0, ((chartWidth * 0.9) / 6)]);

            var setosaSLHistAxisX = d3.svg.axis().scale(setosaSLHistScaleX).orient("bottom");
            var setosaSLHistAxisY = d3.svg.axis().scale(setosaSLHistScaleY).orient("left");


            var setosaSLNormal = d3.random.normal();
            //console.log(setosaSLNormal(setosaSLMean, setosaSLDeviation));
            var setosaSLContainer = d3.select("#setosaContainer").append('svg')
                .classed("freqContainer", true)
                .attr({
                    width: chartWidth,
                    height: chartHeight
                });





            var setosaSLBars = setosaSLContainer.selectAll('.setosaSLBar')
                .data(setosaSLHistogram)
                .enter()
                .append('g')
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartHeight);
                    output += ")";
                    return output;
                });;;

            setosaSLBars.append('rect')
                .attr({
                    x: function(d) {
                        return Math.abs(setosaSLHistScaleX(d.x));
                    },
                    y: function(d) {
                        return (chartHeight * 0.9) - setosaSLHistScaleY(d.y);
                    },
                    "height": function(d) {
                        return setosaSLHistScaleY(d.y);
                    },
                    "width": function(d) {
                        return Math.abs(setosaSLHistScaleDX(d.dx));
                    },
                    fill: "#470520",
                    stroke: '#ee1169'
                });
            var setosaSLAxisGroupX = setosaSLContainer.append('g')
                .call(setosaSLHistAxisX)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (chartHeight * 0.95);
                    output += ")";
                    return output;
                });;;
            var setosaSLAxisGroupY = setosaSLContainer.append('g')
                .call(setosaSLHistAxisY)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartHeight);
                    output += ")";
                    return output;
                });


            var setosaPLHistogram = d3.layout.histogram()
                .bins(6).frequency(0)(setosaPLData);

            var setosaPLHistScaleY = d3.scale.linear()
                .domain([0, 0.5])
                .range([0, (chartHeight * 0.9)]);
            var setosaPLHistScaleX = d3.scale.linear()
                .domain([d3.min(setosaPLData), d3.max(setosaPLData)])
                .range([0, (chartWidth * 0.9)]);
            var setosaPLHistScaleDX = d3.scale.linear()
                .domain([0, d3.max(setosaPLHistogram.map(function(d) {
                    return d.dx;
                }))])
                .range([0, ((chartWidth * 0.9) / 6)]);

            var setosaPLHistAxisX = d3.svg.axis().scale(setosaPLHistScaleX).orient("bottom");
            var setosaPLHistAxisY = d3.svg.axis().scale(setosaPLHistScaleY).orient("left");

            var setosaPLContainer = d3.select("#setosaPLContainer").append('svg')
                .classed("freqContainer", true)
                .attr({
                    width: chartWidth,
                    height: chartHeight
                });





            var setosaPLBars = setosaPLContainer.selectAll('.setosaPLBar')
                .data(setosaPLHistogram)
                .enter()
                .append('g')
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartHeight);
                    output += ")";
                    return output;
                });;;

            setosaPLBars.append('rect')
                .attr({
                    x: function(d) {
                        return Math.abs(setosaPLHistScaleX(d.x));
                    },
                    y: function(d) {
                        return (chartHeight * 0.9) - setosaPLHistScaleY(d.y);
                    },
                    "height": function(d) {
                        return setosaPLHistScaleY(d.y);
                    },
                    "width": function(d) {
                        return Math.abs(setosaPLHistScaleDX(d.dx));
                    },
                    fill: "#470520",
                    stroke: '#ee1169'
                });
            var setosaPLAxisGroupX = setosaPLContainer.append('g')
                .call(setosaPLHistAxisX)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (chartHeight * 0.95);
                    output += ")";
                    return output;
                });
            var setosaPLAxisGroupY = setosaPLContainer.append('g')
                .call(setosaPLHistAxisY)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartHeight);
                    output += ")";
                    return output;
                });




            var versicolorSLHistogram = d3.layout.histogram()
                .bins(6).frequency(0)(versicolorSLData);

            var versicolorSLHistScaleY = d3.scale.linear()
                .domain([0, 0.5])
                .range([0, (chartHeight * 0.9)]);
            var versicolorSLHistScaleX = d3.scale.linear()
                .domain([d3.min(versicolorSLData), d3.max(versicolorSLData)])
                .range([0, (chartWidth * 0.9)]);
            var versicolorSLHistScaleDX = d3.scale.linear()
                .domain([0, d3.max(versicolorSLHistogram.map(function(d) {
                    return d.dx;
                }))])
                .range([0, ((chartWidth * 0.9) / 6)]);

            var versicolorSLHistAxisX = d3.svg.axis().scale(versicolorSLHistScaleX).orient("bottom");
            var versicolorSLHistAxisY = d3.svg.axis().scale(versicolorSLHistScaleY).orient("left");

            var versicolorSLContainer = d3.select("#versicolorContainer").append('svg')
                .classed("freqContainer", true)
                .attr({
                    width: chartWidth,
                    height: chartHeight
                });





            var versicolorSLBars = versicolorSLContainer.selectAll('.versicolorSLBar')
                .data(versicolorSLHistogram)
                .enter()
                .append('g')
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartHeight);
                    output += ")";
                    return output;
                });

            versicolorSLBars.append('rect')
                .attr({
                    x: function(d) {
                        return Math.abs(versicolorSLHistScaleX(d.x));
                    },
                    y: function(d) {
                        return (chartHeight * 0.9) - versicolorSLHistScaleY(d.y);
                    },
                    "height": function(d) {
                        return versicolorSLHistScaleY(d.y);
                    },
                    "width": function(d) {
                        return Math.abs(versicolorSLHistScaleDX(d.dx));
                    },
                    fill: "#470520",
                    stroke: '#ee1169'
                });
            var versicolorSLAxisGroupX = versicolorSLContainer.append('g')
                .call(versicolorSLHistAxisX)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (chartHeight * 0.95);
                    output += ")";
                    return output;
                });;;
            var versicolorSLAxisGroupY = versicolorSLContainer.append('g')
                .call(versicolorSLHistAxisY)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartHeight);
                    output += ")";
                    return output;
                });



            var versicolorPLHistogram = d3.layout.histogram()
                .bins(6).frequency(0)(versicolorPLData);

            var versicolorPLHistScaleY = d3.scale.linear()
                .domain([0, 0.5])
                .range([0, (chartHeight * 0.9)]);
            var versicolorPLHistScaleX = d3.scale.linear()
                .domain([d3.min(versicolorPLData), d3.max(versicolorPLData)])
                .range([0, (chartWidth * 0.9)]);
            var versicolorPLHistScaleDX = d3.scale.linear()
                .domain([0, d3.max(versicolorPLHistogram.map(function(d) {
                    return d.dx;
                }))])
                .range([0, ((chartWidth * 0.9) / 6)]);

            var versicolorPLHistAxisX = d3.svg.axis().scale(versicolorPLHistScaleX).orient("bottom");
            var versicolorPLHistAxisY = d3.svg.axis().scale(versicolorPLHistScaleY).orient("left");

            var versicolorPLContainer = d3.select("#versicolorPLContainer").append('svg')
                .classed("freqContainer", true)
                .attr({
                    width: chartWidth,
                    height: chartHeight
                });





            var versicolorPLBars = versicolorPLContainer.selectAll('.versicolorPLBar')
                .data(versicolorPLHistogram)
                .enter()
                .append('g')
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartHeight);
                    output += ")";
                    return output;
                });;;

            versicolorPLBars.append('rect')
                .attr({
                    x: function(d) {
                        return Math.abs(versicolorPLHistScaleX(d.x));
                    },
                    y: function(d) {
                        return (chartHeight * 0.9) - versicolorPLHistScaleY(d.y);
                    },
                    "height": function(d) {
                        return versicolorPLHistScaleY(d.y);
                    },
                    "width": function(d) {
                        return Math.abs(versicolorPLHistScaleDX(d.dx));
                    },
                    fill: "#470520",
                    stroke: '#ee1169'
                });
            var versicolorPLAxisGroupX = versicolorPLContainer.append('g')
                .call(versicolorPLHistAxisX)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (chartHeight * 0.95);
                    output += ")";
                    return output;
                });
            var versicolorPLAxisGroupY = versicolorPLContainer.append('g')
                .call(versicolorPLHistAxisY)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartHeight);
                    output += ")";
                    return output;
                });



            //_______---------------_________---------
            dataNormal = [];
            getData(); // popuate dataNormal 

            // line chart based on http://bl.ocks.org/mbostock/3883245
            var margin = {
                    top: 20,
                    right: 20,
                    bottom: 30,
                    left: 50
                },
                width = 960 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom;

            var x = d3.scale.linear()
                .range([0, width]);

            var y = d3.scale.linear()
                .range([height, 0]);

            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left");

            var line = d3.svg.line()
                .x(function(d) {
                    return x(d.q);
                })
                .y(function(d) {
                    return y(d.p);
                });

         
            //_______---------------_________---------



            var virginicaSLHistogram = d3.layout.histogram()
                .bins(6).frequency(0)(virginicaSLData);

            var virginicaSLHistScaleY = d3.scale.linear()
                .domain([0, 0.5])
                .range([0, (chartHeight * 0.9)]);
            var virginicaSLHistScaleX = d3.scale.linear()
                .domain([d3.min(virginicaSLData), d3.max(virginicaSLData)])
                .range([0, (chartWidth * 0.9)]);
            var virginicaSLHistScaleDX = d3.scale.linear()
                .domain([0, d3.max(virginicaSLHistogram.map(function(d) {
                    return d.dx;
                }))])
                .range([0, ((chartWidth * 0.9) / 6)]);

            var virginicaSLHistAxisX = d3.svg.axis().scale(virginicaSLHistScaleX).orient("bottom");
            var virginicaSLHistAxisY = d3.svg.axis().scale(virginicaSLHistScaleY).orient("left");

            var virginicaSLContainer = d3.select("#virginicaContainer").append('svg')
                .classed("freqContainer", true)
                .attr({
                    width: chartWidth,
                    height: chartHeight
                });





            var virginicaSLBars = virginicaSLContainer.selectAll('.virginicaSLBar')
                .data(virginicaSLHistogram)
                .enter()
                .append('g')
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartHeight);
                    output += ")";
                    return output;
                });

            virginicaSLBars.append('rect')
                .attr({
                    x: function(d) {
                        return Math.abs(virginicaSLHistScaleX(d.x));
                    },
                    y: function(d) {
                        return (chartHeight * 0.9) - virginicaSLHistScaleY(d.y);
                    },
                    "height": function(d) {
                        return virginicaSLHistScaleY(d.y);
                    },
                    "width": function(d) {
                        return Math.abs(virginicaSLHistScaleDX(d.dx));
                    },
                    fill: "#470520",
                    stroke: '#ee1169'
                });
            var virginicaSLAxisGroupX = virginicaSLContainer.append('g')
                .call(virginicaSLHistAxisX)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (chartHeight * 0.95);
                    output += ")";
                    return output;
                });
            var virginicaSLAxisGroupY = virginicaSLContainer.append('g')
                .call(virginicaSLHistAxisY)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartHeight);
                    output += ")";
                    return output;
                });

            var virginicaPLHistogram = d3.layout.histogram()
                .bins(6).frequency(0)(virginicaPLData);

            var virginicaPLHistScaleY = d3.scale.linear()
                .domain([0, 0.5])
                .range([0, (chartHeight * 0.9)]);
            var virginicaPLHistScaleX = d3.scale.linear()
                .domain([d3.min(virginicaPLData), d3.max(virginicaPLData)])
                .range([0, (chartWidth * 0.9)]);
            var virginicaPLHistScaleDX = d3.scale.linear()
                .domain([0, d3.max(virginicaPLHistogram.map(function(d) {
                    return d.dx;
                }))])
                .range([0, ((chartWidth * 0.9) / 6)]);

            var virginicaPLHistAxisX = d3.svg.axis().scale(virginicaPLHistScaleX).orient("bottom");
            var virginicaPLHistAxisY = d3.svg.axis().scale(virginicaPLHistScaleY).orient("left");

            var virginicaPLContainer = d3.select("#virginicaPLContainer").append('svg')
                .classed("freqContainer", true)
                .attr({
                    width: chartWidth,
                    height: chartHeight
                });





            var virginicaPLBars = virginicaPLContainer.selectAll('.virginicaPLBar')
                .data(virginicaPLHistogram)
                .enter()
                .append('g')
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartHeight);
                    output += ")";
                    return output;
                });

            virginicaPLBars.append('rect')
                .attr({
                    x: function(d) {
                        return Math.abs(virginicaPLHistScaleX(d.x));
                    },
                    y: function(d) {
                        return (chartHeight * 0.9) - virginicaPLHistScaleY(d.y);
                    },
                    "height": function(d) {
                        return virginicaPLHistScaleY(d.y);
                    },
                    "width": function(d) {
                        return Math.abs(virginicaPLHistScaleDX(d.dx));
                    },
                    fill: "#470520",
                    stroke: '#ee1169'
                });
            var virginicaPLAxisGroupX = virginicaPLContainer.append('g')
                .call(virginicaPLHistAxisX)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (chartHeight * 0.95);
                    output += ")";
                    return output;
                });
            var virginicaPLAxisGroupY = virginicaPLContainer.append('g')
                .call(virginicaPLHistAxisY)
                .attr('transform', function() {
                    var output = "translate(";
                    output += (0.05 * chartWidth);
                    output += ",";
                    output += (0.05 * chartHeight);
                    output += ")";
                    return output;
                });


            //console.log(setosaMap);






        });
    };
    draw();
};
$(document).on('page:change', showVis);
$(window).resize(showVis);