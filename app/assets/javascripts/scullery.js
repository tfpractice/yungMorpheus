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
            var sinkScaleX = d3.scale.linear()
                .domain([0, 24])
                .range([0, (chartWidth * 0.95)]);
            var sinkScaleY = d3.scale.linear()
                .domain([0, 16])
                .range([(chartHeight * 0.95), 0]);
            var dishHeightExtent = d3.extent(data, function(d) {
                return d.height;
            });
            var dishWidthExtent = d3.extent(data, function(d) {
                return d.width;
            });
            var colorScale = d3.scale.linear()
                .domain([0, dishWidthExtent[1]])
                .range(["#000", "#fff"]);
            var sinkPlateContainerW = sinkScaleX(dishWidthExtent[1]);
            var sinkPlateContainerH = sinkScaleX(dishHeightExtent[1]);

            function Dish(width, height, fill, stroke) {
                this.width = width, this.height = height, this.fill = fill, this.status = 0, this.stroke = stroke;
            }

            function Sink(width, height, length, rack) {
                this.dishes = [];
                this.width = width;
                this.height = height;
                this.length = length;
                this.plates = [];
                this.bowls = [];
                this.utensils = [];
                this.equipment = [];
                this.cookware = [];
                this.rack = rack;
                this.rackHeightLimit = this.rack.slotHeight;
            }
            Sink.prototype.sortDishesByRack = function() {
                this.dishes.forEach(function(dish, index, array) {
                    if (dish.height < this.rackHeightLimit) {
                        this.plates.push(dish);
                    } else if (dish.height >= this.rackHeightLimit) {
                        this.bowls.push(dish);
                    }
                }, this);
            };
            Sink.prototype.addDish = function(dish) {
                this.dishes.push(dish);
            };
            Sink.prototype.sortDishesByWidth = function(dishArray) {
                var tempDish, innerVal, dishCount = dishArray.length;
                for (var outerVal = dishCount - 2; outerVal >= 0; outerVal--) {
                    tempDish = dishArray[outerVal];
                    innerVal = outerVal;
                    while (innerVal < dishCount - 1 && ((dishArray[innerVal + 1].width >= tempDish.width))) {
                        dishArray[innerVal] = dishArray[innerVal + 1];
                        ++innerVal;
                    }
                    dishArray[innerVal] = tempDish;
                };
            };
            Sink.prototype.checkFit = function(dish) {
                var result = this.rack.checkFit(dish);
                return result;
            };
            Sink.prototype.storeDish = function(dish) {
                this.rack.addDish(dish);
            };
            Sink.prototype.visualize = function(vSelector) {
                this.visObj = d3.select(vSelector)
                    .append('svg').classed("sinkVis", true)
                    .attr({
                        width: chartWidth,
                        height: chartHeight
                    });
                var dishVisW = sinkScaleX(12);
                var dishVisH = sinkScaleX(16);
                var platesContainer = d3.select(".sinkVis").append('g')
                    .classed("platesContainer", true)
                    .attr({
                        width: dishVisW,
                        height: dishVisH,
                    });
                platesContainer.selectAll(".plateVis")
                    .data(this.plates).enter()
                    .append('circle')
                    .classed(".plateVis", true)
                    .attr({
                        cx: sinkScaleX(6),
                        cy: chartHeight - sinkScaleX(6),
                        r: function(d) {
                            return (sinkScaleX(d.width) / 2);
                        },
                        fill: function(d) {
                            return (d.fill);
                        },
                        stroke: "#f00"
                    });
                var bowlsContainer = d3.select(".sinkVis").append('g')
                    .classed("bowlsContainer", true)
                    .attr({
                        width: dishVisW,
                        height: dishVisH,
                    });
                bowlsContainer.selectAll(".bowlVis")
                    .data(this.bowls).enter()
                    .append('circle')
                    .classed(".bowlVis", true)
                    .attr({
                        cx: sinkScaleX(18),
                        cy: chartHeight - sinkScaleX(6),
                        r: function(d) {
                            return (sinkScaleX(d.width) / 2);
                        },
                        fill:function(d) {
                            return (d.fill);
                        },
                        stroke: "#f00"
                    });
            };

            function Slot(width, height) {
                this.width = width;
                this.height = height;
                this.dishes = [];
                this.freeSpace = this.width;
                this.usedSpace = 0;
                this.currentPosition = 0;
            };
            Slot.prototype.checkFit = function(dish) {
                if (this.freeSpace > dish.width) {
                    return true;
                } else {
                    return false;
                };
            };
            Slot.prototype.checkPartial = function(dish, position) {
                var result;
                if (this.currentPosition > position) {
                    console.log("this slot CANNOT BE PLACED HERE is currently at " + this.currentPosition + "and this dish should be placed at " + position);
                    result = false;
                } else if ((this.currentPosition + dish.width) >= this.width) {
                    result = false;

                    // console.log("FAIL the combined width would be ~ " + (this.currentPosition + dish.width));
                    console.log("this slot is currently at " + this.currentPosition + "and this ~" + dish.width + "dish should be placed at " + position + " the combined width would be ~ " + (this.currentPosition + dish.width) + "and this slot only has this much freeSpace~ " + (this.freeSpace));
                    // console.log("FAIL and this slot only has this much freeSpace~ " + (this.freeSpace));
                } else if ((this.currentPosition + dish.width) < this.width) {
                    result = true;
                    console.log("IT WORKS the combined width would be ~ " + (this.currentPosition + dish.width));
                    console.log("IT WORKS and this slot only has this much freeSpace~ " + (this.freeSpace));

                }
                return result;
            }
            Slot.prototype.addDish = function(dish) {
                this.dishes.push(dish);
                this.freeSpace = (this.width - this.usedSpace);
                this.usedSpace += dish.width;
                this.currentPosition += dish.width;
            };
            Slot.prototype.addPartial = function(dish, position) {
                if (this.dishes.indexOf(dish) < 0) {
                    this.currentPosition = position;
                    this.dishes.push(dish);
                    this.freeSpace -= dish.width;
                    this.usedSpace += dish.width;
                    this.currentPosition += dish.width;
                } else if (this.dishes.indexOf(dish) > -1) {
                    console.log("this dish is already here");
                };
            };

            function Rack(baseSlot, slotCount) {
                this.baseSlot = baseSlot;
                this.slotCount = slotCount;
                this.slotHeight = this.baseSlot.height;
                this.width = this.baseSlot.width;
                this.slots = [];
                this.dishes = [];
                this.plates = [];
                this.bowls = [];
                for (var i = 0; i < this.slotCount; i++) {
                    var tempSlot = new Slot(this.width, this.slotHeight);
                    this.slots.push(tempSlot);
                };
                this.currentIndex = 0;
            }
            Rack.prototype.checkFit = function(dish) {
                var result;
                if (dish.height < this.slotHeight) {
                    for (var i = 0; i < this.slotCount; i++) {
                        var modIndex = ((this.currentIndex + i) % this.slotCount);
                        result = this.slots[modIndex].checkFit(dish);
                        if (result == true) {
                            return result;
                        };
                    };
                    return result;
                } else if (dish.height > this.slotHeight) {
                    var slotSpan = Math.ceil(dish.width / this.slotHeight);
                    var indexLimit = this.slotCount - slotSpan;
                    for (var i = 0; i < this.slotCount; i++) {
                        var modIndex = ((this.currentIndex + i) % (this.slotCount));
                        if (modIndex > indexLimit) {
                            console.log("skipping slot " + modIndex);
                            continue;
                        };
                        var currSlot = this.slots[modIndex];
                        console.log("currently testing index ~ " + modIndex);
                        var curPosition = currSlot.currentPosition;
                        var potentialSlots = [];
                        for (var c = 0; c < slotSpan; c++) {
                            potentialSlots.push(this.slots[modIndex + c]);
                        };
                        result = potentialSlots.every(function(pSlot, pIndex, pArray) {
                            return pSlot.checkPartial(dish, curPosition);
                        }, this);
                        console.log("results coming");

                        if (result == true) {
                            // console.log("results coming");


                            console.log(potentialSlots);
                            return result;
                        } else if (result != true) {
                            console.log("will not fit at index ~ " + modIndex);
                            continue;
                        };
                    }
                };
                return result;
            };
            Rack.prototype.findFit = function(dish) {
                var result;
                if (dish.height < this.slotHeight) {
                    for (var i = 0; i < this.slotCount; i++) {
                        var modIndex = ((this.currentIndex + i) % this.slotCount);
                        result = this.slots[modIndex].checkFit(dish);
                        if (result == true) {
                            return modIndex;
                        };
                    };
                    return result;
                } else if (dish.height > this.slotHeight) {
                    var slotSpan = Math.ceil(dish.width / this.slotHeight);
                    var indexLimit = this.slotCount - slotSpan;
                    for (var i = 0; i < this.slotCount; i++) {
                        var modIndex = ((this.currentIndex + i) % this.slotCount);
                        if (modIndex > indexLimit) {
                            continue;
                        };
                        var currSlot = this.slots[modIndex];
                        var curPosition = currSlot.currentPosition;
                        var potentialSlots = [];
                        for (var c = 0; c < slotSpan; c++) {
                            potentialSlots.push(this.slots[modIndex + c]);
                        };
                        result = potentialSlots.every(function(pSlot, pIndex, pArray) {
                            return pSlot.checkPartial(dish, curPosition);
                        });
                        if (result == true) {
                            console.log("the result is ~ " + result + " for these slots ~" + potentialSlots);
                            console.log("so start with this index ~" + modIndex);
                            console.log(potentialSlots);
                            return modIndex;
                        } else if (result == false) {
                            continue;
                        };
                    }
                };
                return result;
            };
            Rack.prototype.addDish = function(dish) {
                var availableSlotIndex;
                if (dish.height < this.slotHeight) {
                    availableSlotIndex = this.findFit(dish);
                    if (availableSlotIndex != undefined) {
                        this.currentIndex = availableSlotIndex;
                        var availablePosition = this.slots[availableSlotIndex].currentPosition;
                        dish.slotIndex = availableSlotIndex;
                        dish.slot = this.slots[availableSlotIndex];
                        dish.slotPosition = availablePosition;
                        this.slots[availableSlotIndex].addDish(dish);
                        this.currentIndex = ((this.currentIndex + 1) % this.slotCount);
                        this.plates.push(dish);
                    } else {
                        return 'no space avaiable for dish';
                    };
                } else if (dish.height > this.slotHeight) {
                    var slotSpan = Math.ceil(dish.width / this.slotHeight);
                    availableSlotIndex = this.findFit(dish);
                    this.currentIndex = availableSlotIndex || this.currentIndex;
                    if (availableSlotIndex != undefined) {
                        var fittingSlots = [];
                        var availablePosition = this.slots[availableSlotIndex].currentPosition;

                        for (var c = 0; c < slotSpan; c++) {
                            fittingSlots.push(this.slots[availableSlotIndex + c]);
                        };
                        fittingSlots.forEach(function(fSlot, findex, fArray) {
                            fSlot.addPartial(dish, availablePosition);
                        });

                        dish.slotIndex = (availableSlotIndex + Math.floor(slotSpan / 2));
                        dish.rackPosition = (dish.slotIndex + (this.slotHeight / 2));
                        dish.slotPosition = availablePosition;
                        this.bowls.push(dish);
                        console.log("currentIndex = " + this.currentIndex);
                        this.currentIndex = ((availableSlotIndex + slotSpan) % this.slotCount);
                    } else {
                        return 'no space avaiable for dish';
                    };
                };
            };
            var rackScale = d3.scale.linear()
                .domain([0, 16])
                .range([0, (chartHeight * 0.95)]);
            Rack.prototype.visualize = function(vSelector) {
                this.visObj = d3.select(vSelector)
                    .append('svg').classed("rackVis", true)
                    .attr({
                        width: chartWidth,
                        height: chartHeight
                    });
                var rackContainer = d3.select(".rackVis").append('g')
                    .classed("rackContainer", true)
                    .attr({
                        width: rackScale(this.width),
                        height: rackScale((this.slotHeight * this.slotCount)),
                    });
                rackContainer.selectAll(".rackSlot")
                    .data(this.slots).enter()
                    .append('rect')
                    .classed("rackSlot", true)
                    .attr({
                        x: function(d, i) {
                            return (rackScale(0));
                        },
                        y: function(d, i) {
                            return (rackScale(d.height * i));
                        },
                        width: function(d) {
                            return (rackScale(d.width));
                        },
                        height: function(d) {
                            return (rackScale(d.height));
                        },
                        fill: "none",
                        stroke: "#000"
                    });
                rackContainer.selectAll(".rackPlate")
                    .data(this.plates).enter()
                    .append("rect")
                    .classed("rackPlate", true)
                    .attr({
                        x: function(d) {
                            return rackScale((d.slotPosition));
                        },
                        y: function(d) {
                            return (rackScale(d.slotIndex));
                        },
                        width: function(d) {
                            return rackScale(d.width);
                        },
                        height: function(d) {
                            return rackScale(d.height);
                        },
                        fill:  function(d) {
                            return (d.fill);
                        },
                        stroke: "#ee1169"
                    });
                rackContainer.selectAll(".rackBowl")
                    .data(this.bowls).enter()
                    .append("circle")
                    .classed("rackBowl", true)
                    .attr({
                        cx: function(d) {
                            console.log((d.slotPosition) + (d.width / 2));
                            console.log(d);
                            return rackScale((d.slotPosition) + (d.width / 2));
                        },
                        cy: function(d) {
                            console.log(d.rackPosition);
                            return rackScale(d.rackPosition);
                        },
                        r: function(d) {
                            return rackScale(d.width / 2);
                        },
                        fill: function(d) {
                            return (d.fill);
                        },
                        stroke: "#ff00ff"
                    });
            };
            var mySlot = new Slot(22, 1);
            var myRack = new Rack(mySlot, 16);
            var mySink = new Sink(22, 6, 16, myRack);
            data.forEach(function(d, i, a) {
                var myDish = new Dish(d.width, d.height, d.fill, d.stroke);
                mySink.addDish(myDish);
            });
            mySink.sortDishesByRack();
            mySink.sortDishesByWidth(mySink.plates);
            mySink.sortDishesByWidth(mySink.bowls);
            mySink.plates.forEach(function(dish, index, array) {
                if (mySink.checkFit(dish) == true) {
                    mySink.storeDish(dish);
                } else {};
            }, mySink);
            mySink.bowls.forEach(function(bowl, index, array) {
                if (mySink.checkFit(bowl) == true) {
                    mySink.storeDish(bowl);
                } else {};
            }, mySink);
            mySink.visualize(".sinkDiv");
            myRack.visualize(".rackDiv");
        });
    };
    draw();
};
$(document).on('page:change', showVis);
$(window).resize(showVis);