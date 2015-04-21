// function Spice(name, radius, height) {
//     this.name = name;
//     this.radius = radius;
//     this.height = height;
// }

// function Row() {
//     this.spices = [];
//     this.width = 0;
//     this.widestSpice = null;
//     this.depth = 0;


// }
// Row.prototype.addSpice = function(spice) {
//     if (this.indexOf(spice) < 0) {

//         this.spices.push(spice);
//         this.width += spice.radius;
//         this.radiusSort();
//         this.widestSpice = this.spices[0];
//         this.depth = this.widestSpice.radius;

//     };
//     // body...
// };

// Row.prototype.radiusSort = function() {
//     var tempSpice, innerVal, spiceCount = this.spices.length;
//     for (var outerVal = 0; i <= spiceCount - 1; i++) {
//         tempSpice = this.spices[outerVal];
//         innerVal = outerVal;
//         while (innerVal > 0 && (this.spices[innerVal - 1].radius >= tempSpice.radius)) {
//             this.spices[innerVal] = this.spices[innerVal - 1];
//             innerVal--;

//         }
//         this.spices[innerVal = tempSpice];
//     };
// };


// Row.prototype.calculateXPosition = function(spice, index) {
//     var lastPos = 0;
//     for (var i = 0; i < index; i++) {
//         lastPos += 2 * (rowScale(this.spices[i].radius))


//     };
//     return lastPos = rowScale(this.spices[index].radius);
//     // body...
// };

// Row.prototype.visualize = function(shelfVis) {
//     this.rowVis = shelfVis.append("svg")
//         .classed("rowVis", true)
//         .attr('height', rowScale(this.widestSpice.radius));

//     this.spices.forEach(function(elem, index, array) {
//         this.rowVis.append("circle")
//             .attr({
//                 r: rowScale(elem.radius),
//                 cx: calculateXPosition(elem, index),
//                 cy: (this.depth) / 2
//             });

//     })

// };



// function Shelf(w, h, d) {
//     this.width = w, this.height = h;
//     this.depth = d;
//     this.rowLimit = this.width;
//     this.widestSpice = null;
//     this.spices = [];
//     this.rows = [];
//     this.hSpices = [];
// }


// Shelf.prototype.makeHeightRows = function(spices, index, pred) {
//     var spiceCount = this.hSpices.length,
//         prevRow = pred,
//         currRow = new Row();
//     var currWidest = this.widestSpice || this.hSpices[index];
//     // currRow.widestSpice = this.widestSpice || this.spices[index]; 
//     this.widestSpice = this.widestSpice || currRow.widestSpice;
//     this.rowLimit = (pred) ? (this.width - this.widestSpice.radius) : this.width;
//     for (var i = index; i < spiceCount; i++) {
//         var potentialWidth = currRow.width + this.hSpices[i].radius;

//         if (potentialWidth <= rowLimit) {
//             currRow.addSpice(this.spices[i]);
//             this.widestSpice = (currRow.widestSpice.radius > this.widestSpice.radius) ? currRow.widestSpice : this.widestSpice;
//             this.rowLimit = (prevRow) ? (this.width - this.widestSpice.radius) : this.width;

//         } else {

//             this.rows.push(currRow);
//             this.makeHeightRows(spices, i, true);

//         }



//     };


// };

// Shelf.prototype.addSpice = function(spice) {
//     // this.spices.push(spice);
//     // this.spices.alphabetize;
//     this.hSpices.push(spice);
//     this.heightSort(hSpices);
//     // body...
// };


// Shelf.prototype.heightSort = function() {
//     var tempSpice, innerVal, spiceCount = this.spices.length;
//     for (var outerVal = 0; i <= spiceCount - 1; i++) {
//         tempSpice = this.hSpices[outerVal];
//         innerVal = outerVal;
//         while (innerVal > 0 && (this.hSpices[innerVal - 1].height >= tempSpice.height)) {
//             this.hSpices[innerVal] = this.hSpices[innerVal - 1];
//             innerVal--;

//         }
//         this.hSpices[innerVal = tempSpice];
//     };
// };



// var ratio = 1.61803398875; 
// var innerRatioBig = 1- ratio;
// var innerRatioSmall = 1 - innerRatioBig;

// var visW = screenWidth/ 3;
// var visH = visW/ratio;
// var margin = 0.05;


// var shelfW = innerRatioBig * (visW *(1-(2* margin)));
// var shelfH = innerRatioBig * (visH *(1-(2* margin)));

// var rowW = innerRatioBig * (shelfW *(1-(2* margin)));
// // var rowH = innerRatioBig * (shelfH *(1-(2* margin)));

// var shelfScale = d3.scale.linear()
// 					.domain([0, 48])
// 					.range([0, shelfW]);

// var rowScale = d3.scale.linear()
// 					.domain([0, 48])
// 					.range([0, (shelfW * (1- (2*margin)))]);

					



// var cabinetVis = d3.select(".visDiv")
// 					.classed("cabinetVis", true)
// 					.append('svg').attr({
// 						w: visW,
// 						h: visH
// 					});











