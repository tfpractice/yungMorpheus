// // jQuery.ready(showVis);


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

// // var showVis = function() {
// // 	var gonURL = gon.firstURL;

// // 	if (gonURL != null ) {
// // 		draw;
// // 	} else{
// // 		console.log("no data");
// // 	};


// //     var draw = function() {
// //         d3.selectAll("svg").remove();
// //         d3.json(gonURL, function(data) {





// //              var dExtent = d3.extent(data, function(d) {
// //                 return d.height;
// //             });
// //             var dRExtent = d3.extent(data, function(d) {
// //                 return d.radius;
// //             });
// //             var colorScaleR = d3.scale.linear().domain(dRExtent).range(["black", "white"]);
// //             var colorScaleH = d3.scale.linear().domain(dExtent).range(["black", "white"]);
// //             var screenWidth = window.innerWidth;
// //             var screenHeight = window.innerHeight;




// //           var ratio = 1.61803398875;
// //             var innerRatioBig = ratio - 1;
// //             var innerRatioSmall = 1 - innerRatioBig;
// //             var visW = screenWidth / 3;
// //             var visH = visW / ratio;
// //             var margin = 0.05;
// //             var shelfW = visW;
// //             var shelfH = shelfW / ratio;
// //             var rowW = (shelfW * (1-(2*margin)));
// //             var shelfScale = d3.scale.linear()
// //                 .domain([0, 26])
// //                 .range([0, shelfW]);
// //             var rowScale = d3.scale.linear()
// //                 .domain([0, 26])
// //                 .range([0, rowW]);

// //  var chartWidth = screenWidth / 3;
// //             var chartHeight = chartWidth / 1.61803398875;
// //             var chartMargin = chartWidth * 0.1;
// //             var chartMarginY = chartHeight * 0.05;
// //             var shelfMargin = shelfW * 0.05;

// //             var dCount = data.length;
// //             var barWidth = (chartWidth - chartMargin) / (dCount * 2.2);
// //             var barOffset = barWidth * 1.2;
// //             var yScale = d3.scale.linear().domain([0, dExtent[1]]).range([0, (chartHeight - chartMarginY)]);
// //             var yScaleAxis = d3.scale.linear().domain([0, dExtent[1]]).range([(chartHeight - chartMarginY), 0]);
// //             var yAxis = d3.svg.axis()
// //                 .scale(yScaleAxis)
// //                 .orient("left")
// //                 .ticks(10);
// //             var hMap = data.map(function(elem, index, array) {
// //                 return elem.height;
// //             });
// //             var hMean = d3.mean(hMap);
// //             var hMedian = d3.median(hMap);
// //             var hSet = d3.set(hMap);
// //             var hVals = d3.values(hMap);
           

// //             var chart0 = c3.generate({
// //                 bindto: "#unsortedSpices",
// //                 data: {
// //                     json: data,
// //                     types: {
// //                         radius: 'bar',
// //                         height: 'area-spline'
// //                     },
// //                     keys: {
// //                         x: 'name', // it's possible to specify 'x' when category axis
// //                         value: ['radius', 'height']
// //                     },
// //                     colors: {
// //                         radius: '#000000',
// //                         height: '#00ff80'
// //                     }
// //                 },

// //                 axis: {
// //                     x: {
// //                         type: 'category'
// //                     }
// //                 }
// //             });
           

// //             function Spice(name, radius, height) {
// //                 this.name = name;
// //                 this.radius = radius;
// //                 this.height = height;
// //             }

// //             function Row() {
// //                 this.spices = [];
// //                 this.width = 0;
// //                 this.widestSpice = null;
// //                 this.depth = 0;
// //             }
// //             Row.prototype.addSpice = function(spice) {
// //                 if (this.spices.indexOf(spice) > -1) {
// //                     return;
// //                 } else {
// //                     this.spices.push(spice);
// //                     this.width += ((spice.radius));
// //                     this.radiusSort();
// //                     // console.log(this.widestSpice);

// //                 }
// //             };
// //             Row.prototype.radiusSort = function() {
// //                 var tempSpice, innerVal, spiceCount = this.spices.length;
// //                 for (var outerVal = spiceCount - 2; outerVal >= 0; --outerVal) {
// //                     tempSpice = this.spices[outerVal];
// //                     innerVal = outerVal;
// //                     while (innerVal < spiceCount - 1 && ((this.spices[innerVal + 1].radius) >= tempSpice.radius)) {
// //                         this.spices[innerVal] = this.spices[innerVal + 1];
// //                         ++innerVal;
// //                     }
// //                     this.spices[innerVal] = tempSpice;
// //                 }

// //                 this.widestSpice = this.spices[0];
// //                 this.depth = this.widestSpice.radius;

// //             };
// //             Row.prototype.calculateXPosition = function(spice, index) {
// //                 var lastPos = 0;
// //                 for (var i = 0; i < index; i++) {
// //                     lastPos += (((this.spices[i].radius)));
// //                 }
// //                 return (rowScale(lastPos + (0.5 * (this.spices[index].radius))));
// //             };
// //             Row.prototype.visualize = function(shelf, i) {
// //                 var row = this;
// //                 var vis = shelf.sViz;
// //                 console.log(this.widestSpice);
// //                 this.rowVis = shelf.sViz.append('g').classed("rowGroup",true)
// //                 .attr('transform', function() {
// //                     var output = "translate(";
// //                     output += shelfMargin;
// //                     output += ",";
// //                     output += 0;
// //                     output += ")";
// //                     return output;
// //                 }).append("svg")
// //                     .classed("rowVis", true)
// //                     .attr('id', function() {
// //                         return "rowVis" + i;
// //                     })
// //                     .attr('height', rowScale(this.depth))
// //                     .attr('width', rowW)
// //                     .attr('y', shelf.setRowPosition(i));
// //                 this.rowVis.transition()
// //                     .delay(function() {
// //                         return i * 1000;
// //                     })
// //                     .ease('elastic');
// //                 var rowSpices = this.rowVis.selectAll(".circle")
// //                     .data(this.spices)
// //                     .enter()
// //                     .append("circle")
// //                     .classed("rowSpice", true)
// //                     .attr({
// //                         r: 0,
// //                         cx: function(d, i) {
// //                             return row.calculateXPosition(d, i);
// //                         },
// //                         cy: function(d, i) {
// //                             return (rowScale((row.depth) / 2));
// //                         },
// //                         // stroke: function(d) {
// //                         //     return colorScaleR(d.radius);
// //                         // },
// //                         fill: function(d) {
// //                             return colorScaleR(d.radius);
// //                         }
// //                     })
// //                     .on('mouseover', function(d) {
// //                         d3.select(this).attr('stroke', '#ff00ff');
// //                         tooltip.transition()
// //                             .style('opacity', 0.9);
// //                         tooltip.html(d.name)
// //                             .style({
// //                                 left: ((d3.event.pageX + 5) + 'px'),
// //                                 top: ((d3.event.pageY + 5) + 'px')
// //                             });
// //                     })
// //                     .on('mouseout', function(d) {
// //                         d3.select(this).attr('stroke', function(d) {
// //                             return colorScaleR(d.radius);
// //                         });
// //                     });
// //                 rowSpices.transition()
// //                     .attr('r', function(d) {
// //                         return (rowScale(0.5 * (d.radius)));
// //                     })
// //                     .style("fill", function(d) {
// //                         return colorScaleR(d.radius);
// //                     })
// //                     .delay(function(d, i) {
// //                         return i * 100;
// //                     })
// //                     .ease('elastic')
// //                     .duration(2000);
// //             };

// //             function Shelf(w, h, d) {
// //                 this.width = w, this.height = h;
// //                 this.depth = d;
// //                 this.rowLimit = this.width;
// //                 this.widestSpice = null;
// //                 this.spices = [];
// //                 this.rows = [];
// //                 this.hSpices = [];
// //                 this.sViz = null;
// //             }
// //             Shelf.prototype.makeHeightRows = function(spices, index, pred) {
// //                 var num = 0;
// //                 var index1 = index;
// //                 var spiceCount = spices.length;
// //                 var prevRow = pred;
// //                 var currRow = new Row();
// //                 currRow.widestSpice = this.widestSpice || this.hSpices[index1];
// //                 this.widestSpice = this.widestSpice || currRow.widestSpice;
// //                 this.rowLimit = (prevRow) ? (this.width - this.widestSpice.radius) : this.width;
// //                 rowLoop: for (var i = index1; i < spiceCount; i++) {
// //                     var potentialWidth = currRow.width + this.hSpices[i].radius;
// //                     if (potentialWidth <= this.rowLimit) {
// //                         currRow.addSpice(this.hSpices[i]);
// //                         //console.log(this.hSpices[i].name);
// //                         //console.log(i);
// //                         this.widestSpice = (currRow.widestSpice.radius > this.widestSpice.radius) ? currRow.widestSpice : this.widestSpice;
// //                         this.rowLimit = (prevRow) ? (this.width - (this.widestSpice.radius)) : this.width;
// //                     } else {
// //                         num++;
// //                         this.rows.push(currRow);
// //                         this.visualize();
// //                         currRow = new Row();
// //                         index1 = i;
// //                         prevRow = true;
// //                         continue rowLoop;
// //                     }
// //                 }
// //                 this.rows.push(currRow);
// //             };
// //             Shelf.prototype.addSpice = function(spice) {
// //                 this.hSpices.push(spice);
// //                 this.heightSort();
// //             };
// //             Shelf.prototype.heightSort = function() {
// //                 var tempSpice, innerVal, spiceCount = this.hSpices.length;
// //                 for (var outerVal = 1; outerVal <= spiceCount - 1; ++outerVal) {
// //                     tempSpice = this.hSpices[outerVal];
// //                     innerVal = outerVal;
// //                     while (innerVal > 0 && (this.hSpices[innerVal - 1].height >= tempSpice.height)) {
// //                         this.hSpices[innerVal] = this.hSpices[innerVal - 1];
// //                         --innerVal;
// //                     }
// //                     this.hSpices[innerVal] = tempSpice;
// //                 }
// //             };
// //             Shelf.prototype.visualize = function() {
// //                 d3.selectAll(".shelfVis").remove();
// //                 this.sViz = d3.select("#visDiv2")
// //                     .append("svg")
// //                     .classed("shelfVis", true)
// //                     .attr({
// //                         width: shelfW,
// //                         height: shelfH
// //                     })
// //                     .style("background", "rgba(0,255,128, 0.2)").style("border", "1px solid #aaaaaa");

// //                     // .style('stroke', "#ff00ff").style("border", "1px solid #aaaaaa");
// //                 $(this.sViz).css('stroke', "#ff00ff");
// //                 for (var i = 0; i < this.rows.length; i++) {
// //                     this.rows[i].visualize(this, i);
// //                 }
// //             };
// //             Shelf.prototype.setRowPosition = function(index) {
// //                 var lastPos = 0;
// //                 for (var i = 0; i < index; i++) {
// //                     lastPos += (((this.rows[i].depth)));
// //                 }
// //                 return (rowScale(lastPos + (0.5 * (this.rows[index].depth))));
// //             };
  
// //             var tooltip = d3.select('body')
// //                 .append('div')
// //                 .classed("tooltip", true)
// //                 .style({
// //                     position: 'absolute',
// //                     padding: '5px 5px',
// //                     background: 'rgba(255,0,255,0.5)',
// //                     opacity: '0'
// //                 });
// //             var sampleShelf = new Shelf(26, 10, 30);
// //             var spiceObjects = data.map(function(elem, index) {
// //                 var spiceO = new Spice(elem.name, elem.radius, elem.height);
// //                 return spiceO;
// //             });
// //             spiceObjects.forEach(function(elem, index) {
// //                 sampleShelf.addSpice(elem);
// //             });

// //             //console.log(sampleShelf.hSpices);





// //             var hChart = c3.generate({
// //                 bindto: "#heightSortedSpices",

// //                 data: {
// //                     json: sampleShelf.hSpices,
// //                     types: {
// //                         radius: 'bar',
// //                         height: 'area-spline'
// //                     },
// //                     keys: {
// //                         x: 'name', // it's possible to specify 'x' when category axis
// //                         value: ['radius', 'height']
// //                     },
// //                     colors: {
// //                         radius: '#000000',
// //                         height: '#00ff80'
// //                     }
// //                 },

// //                 axis: {
// //                     x: {
// //                         type: 'category'
// //                     }
// //                 }
// //             });

// //             sampleShelf.makeHeightRows(sampleShelf.hSpices, 0, false);
// //             //console.log(sampleShelf.rows);





// //             var row0Chart = c3.generate({
// //                 bindto: "#radialSpices0",
// //                 data: {
// //                     json: sampleShelf.rows[0].spices,
// //                     types: {
// //                         radius: 'bar',
// //                         height: 'area-spline'
// //                     },
// //                     keys: {
// //                         x: 'name', // it's possible to specify 'x' when category axis
// //                         value: ['radius', 'height']
// //                     },
// //                     colors: {
// //                         radius: '#000000',
// //                         height: '#00ff80'
// //                     }
// //                 },

// //                 axis: {
// //                     x: {
// //                         type: 'category'
// //                     }
// //                 }
// //             });

// //             var row1Chart = c3.generate({
// //                 bindto: "#radialSpices1",
// //                 data: {
// //                     json: sampleShelf.rows[1].spices,
// //                     types: {
// //                         radius: 'bar',
// //                         height: 'area-spline'
// //                     },
// //                     keys: {
// //                         x: 'name', // it's possible to specify 'x' when category axis
// //                         value: ['radius', 'height']
// //                     },
// //                     colors: {
// //                         radius: '#000000',
// //                         height: '#00ff80'
// //                     }
// //                 },

// //                 axis: {
// //                     x: {
// //                         type: 'category'
// //                     }
// //                 }
// //             });

// //             var row2Chart = c3.generate({
// //                 bindto: "#radialSpices2",
// //                 data: {
// //                     json: sampleShelf.rows[2].spices,
// //                     types: {
// //                         radius: 'bar',
// //                         height: 'area-spline'
// //                     },
// //                     keys: {
// //                         x: 'name', // it's possible to specify 'x' when category axis
// //                         value: ['radius', 'height']
// //                     },
// //                     colors: {
// //                         radius: '#000000',
// //                         height: '#00ff80'
// //                     },
// //                 },

// //                 axis: {
// //                     x: {
// //                         type: 'category'
// //                     }
// //                 }
// //             });
// //             var row3Chart = c3.generate({
// //                 bindto: "#radialSpices3",
// //                 data: {
// //                     json: sampleShelf.rows[3].spices,
// //                     types: {
// //                         radius: 'bar',
// //                         height: 'area-spline'
// //                     },
// //                     keys: {
// //                         x: 'name', // it's possible to specify 'x' when category axis
// //                         value: ['radius', 'height']
// //                     },

// //                     colors: {
// //                         radius: '#000000',
// //                         height: '#00ff80'
// //                     }
// //                 },

// //                 axis: {
// //                     x: {
// //                         type: 'category'
// //                     }
// //                 }
// //             });


           
// //             var heightHistogram = d3.layout.histogram().bins(10).frequency(0)(hMap);
// //             var histDiv = d3.select("#histogramDiv").append("svg").classed("histDiv", true)
// //                 .attr({
// //                     "height": chartHeight,
// //                     "width": chartWidth
// //                 }).style("border", "1px solid black");
// //             var histScaleY = d3.scale.linear()
// //                 .domain([0, 1])
// //                 .range([0, chartHeight]);
// //             var histScaleX = d3.scale.linear()
// //                 .domain([0, d3.max(hMap)])
// //                 .range([0, chartWidth]);
// //             var histScaleDX = d3.scale.linear()
// //                 .domain([0, d3.max(hMap)])
// //                 .range([0, chartWidth]);
// //             var histAxisX = d3.svg.axis().scale(histScaleX).orient("bottom");
// //             var axisGroupX = d3.select(".histDiv").append('g').call(histAxisX);
// //             var histBars = histDiv.selectAll(".hBar").data(heightHistogram).enter()
// //                 .append('g');
// //             histBars.append("rect")
// //                 .classed("hBar", true)
// //                 .attr({
// //                     x: function(d) {
// //                         return Math.abs(histScaleX(d.x));
// //                     },
// //                     y: function(d) {
// //                         return chartHeight - histScaleY(d.y);
// //                     },
// //                     "height": function(d) {
// //                         return histScaleY(d.y);
// //                     },
// //                     "width": function(d) {
// //                         return Math.abs(histScaleDX(d.dx));
// //                     }
// //                 });
// //             histBars.append('text')
// //                 .attr({
// //                     x: function(d) {
// //                         return Math.abs(histScaleX(d.x));
// //                     },
// //                     y: function(d) {
// //                         return chartHeight - histScaleY(d.y);
// //                     },
// //                     fill: "#ff00ff",
// //                 })
// //                 .text(function(d) {
// //                     return d.y;
// //                 });
// //             var visDivSVG = function() {
// //                  d3.select(".spiceGraph").remove();
// //                 var visObj = d3.select("#visDiv0").append('svg')
// //                 .classed("spiceGraph", true)
// //                 .attr({
// //                     "height": chartHeight,
// //                     "width": chartWidth
// //                 })
// //                 .style("background", "rgba(0,255,128, 0.2)").style("border", "1px solid #aaaaaa");
            
// //             return visObj;
// //         }
           

// //             var chart =
// //             visDivSVG().append('g')
// //                 .attr('transform', function() {
// //                     var output = "translate(";
// //                     output += chartMargin * 0.75;
// //                     output += ",";
// //                     output += 0;
// //                     output += ")";
// //                     return output;
// //                 });
// //             chart.append('g')
// //                 .call(yAxis)
// //                 .attr('transform', function() {
// //                     var output = "translate(";
// //                     output += (-0.5 * shelfMargin);
// //                     output += ",";
// //                     output += shelfMargin;
// //                     output += ")";
// //                     return output;
// //                 });
// //             var tempColor;
// //             var spiceBars = chart.selectAll('rect')
// //                 .data(sampleShelf.hSpices)
// //                 .enter()
// //                 .append('rect')
// //                 .classed('spiceBar', true)
// //                 .style(
// //                     "fill", function(d) {
// //                         return colorScaleH(d.height);
// //                     }
// //                 )
// //                 .attr("x", function(d, i) {
// //                     return i * (barWidth + barOffset);
// //                 })
// //                 .attr('width', barWidth)
// //                 .attr('height', 0)
// //                 .attr("y", chartHeight)
// //                 .on('mouseover', function(d) {
// //                     tooltip.transition()
// //                         .style('opacity', 0.9);
// //                     tooltip.html(d.name + ": " + d.height + " inches")
// //                         .style({
// //                             left: ((d3.event.pageX + 5) + 'px'),
// //                             background: "#bbbbbb",
// //                             top: ((d3.event.pageY + 5) + 'px')
// //                         });
// //                 });
// //             spiceBars.transition()
// //                 .attr('height', function(d) {
// //                     return yScale(d.height);
// //                 })
// //                 .attr("y", function(d) {
// //                     return chartHeight - yScale(d.height);
// //                 })
// //                 .delay(function(d, i) {
// //                     return i * 10;
// //                 })
// //                 .ease('elastic')
// //                 .duration(2000);
// //             var sBars = $(spiceBars);
// //             $(".spiceBar").hover(function() {
// //                 tempColor = this.style.fill;
// //                 $(this).css("fill", "#ff00ff");
// //             }, function() {
// //                 $(this).css("fill", tempColor);
// //             });
// //         });
// //     };
// //     draw();
  
// // };

// // console.log(gon.firstURL);
// // $(document).on('page:load', showVis);
// //   $(window).resize(showVis);