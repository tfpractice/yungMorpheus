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

            function SLSort(irisArray) {
                var tempIris, innerVal, irisCount = irisArray.length;
                for (var outerVal = 1; outerVal <= irisCount - 1; ++outerVal) {
                    tempIris = irisArray[outerVal];
                    innerVal = outerVal;
                    while (innerVal > 0 && (irisArray[innerVal - 1].SepalLength >= tempIris.SepalLength)) {
                        irisArray[innerVal] = irisArray[innerVal - 1];
                        --innerVal;
                    }
                    irisArray[innerVal] = tempIris;
                }
            }

            SLSort(setosaMap.irises);
            SLSort(virginicaMap.irises);
            SLSort(versicolorMap.irises);


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






            //console.log(setosaMap);
            var setosaAssociationChart = c3.generate({
                bindto: "#setosaAssociation",
                data: {
                    json: setosaMap.irises,
                    types: {
                        // "SepalLength": 'area-spline',
                        "PetalLength": 'scatter',
                        "SepalWidth": 'scatter',
                        "PetalWidth": 'scatter'
                    },
                    keys: {
                        x: 'SepalLength', // it's possible to specify 'x' when category axis
                        value: ["PetalLength", "PetalWidth", "SepalWidth"]
                    },
                    colors: {
                        "PetalLength": '#ee1169',
                        "SepalWidth": "#00ff00",
                        "PetalWidth": "#000000"
                    },
                    names: {
                        "SepalLength": "SepalLength"
                    },

                    labels: true

                },
                point: {
                    r: 5
                },
                axis: {
                    x: {
                        labels: true,
                        label: "SepalLength",
                        type: 'category'
                    },
                    y: {
                        label: "PetalLength"
                    }
                }
            });


            var virginicaAssociationChart = c3.generate({
                bindto: "#virginicaAssociation",
                data: {
                    json: virginicaMap.irises,
                    types: {
                        // "SepalLength": 'area-spline',
                        "PetalLength": 'scatter',
                        "SepalWidth": 'scatter',
                        "PetalWidth": 'scatter'
                    },
                    keys: {
                        x: 'SepalLength', // it's possible to specify 'x' when category axis
                        value: ["PetalLength", "PetalWidth", "SepalWidth"]
                    },
                    colors: {
                        "PetalLength": '#ee1169',
                        "SepalWidth": "#00ff00",
                        "PetalWidth": "#000000"
                    },
                    names: {
                        "SepalLength": "SepalLength"
                    },

                    labels: true

                },
                point: {
                    r: 5
                },
                axis: {
                    x: {
                        labels: true,
                        label: "SepalLength",
                        type: 'category'
                    },
                    y: {
                        label: "PetalLength"
                    }
                }
            });

            var versicolorAssociationChart = c3.generate({
                bindto: "#versicolorAssociation",
                data: {
                    json: versicolorMap.irises,
                    types: {
                        // "SepalLength": 'area-spline',
                        "PetalLength": 'scatter',
                        "SepalWidth": 'scatter',
                        "PetalWidth": 'scatter'
                    },
                    keys: {
                        x: 'SepalLength', // it's possible to specify 'x' when category axis
                        value: ["PetalLength", "PetalWidth", "SepalWidth"]
                    },
                    colors: {
                        "PetalLength": '#ee1169',
                        "SepalWidth": "#00ff00",
                        "PetalWidth": "#000000"
                    },
                    names: {
                        "SepalLength": "SepalLength"
                    },

                    labels: true

                },
                point: {
                    r: 5
                },
                axis: {
                    x: {
                        labels: true,
                        label: "SepalLength",
                        type: 'category'
                    },
                    y: {
                        label: "PetalLength"
                    }
                }
            });




        });
    };
    draw();
};
$(document).on('page:change', showVis());
$(window).resize(showVis);