   // var svg = d3.select("body").append("svg")
   //              .attr("width", width + margin.left + margin.right)
   //              .attr("height", height + margin.top + margin.bottom)
   //              .append("g")
   //              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

   //          x.domain(d3.extent(dataNormal, function(d) {
   //              return d.q;
   //          }));
   //          y.domain(d3.extent(dataNormal, function(d) {
   //              return d.p;
   //          }));

   //          svg.append("g")
   //              .attr("class", "x axis")
   //              .attr("transform", "translate(0," + height + ")")
   //              .call(xAxis);

   //          svg.append("g")
   //              .attr("class", "y axis")
   //              .call(yAxis);

   //          svg.append("path")
   //              .datum(dataNormal)
   //              .attr("class", "line")
   //              .attr("d", line);

   //          function getData() {

   //              // loop to populate data array with 
   //              // probabily - quantile pairs
   //              for (var i = 0; i < 1000; i++) {
   //                  q = normal(); // calc random draw from normal dist
   //                  p = gaussian(q); // calc prob of rand draw
   //                  el = {
   //                      "q": q,
   //                      "p": p
   //                  }
   //                  dataNormal.push(el)
   //                  // //console.log(el);
   //                  //console.log(versicolorPLZMax);
   //                  //console.log(versicolorPLZMin);
   //              };


   //              // need to sort for plotting
   //              //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   //              dataNormal.sort(function(x, y) {
   //                  return x.q - y.q;
   //              });
   //          }

   //          // from http://bl.ocks.org/mbostock/4349187
   //          // Sample from a normal distribution with mean 0, stddev 1.
   //          function normal() {
   //              var x = 0,
   //                  y = 0,
   //                  rds, c;
   //              do {
   //                  x = Math.random() * 2 - 1;
   //                  y = Math.random() * 2 - 1;
   //                  rds = x * x + y * y;
   //              } while (rds == versicolorPLZMean || rds > versicolorPLZDeviation);
   //              c = Math.sqrt(-2 * Math.log(rds) / rds); // Box-Muller transform
   //              return x * c; // throw away extra sample y * c
   //          }

   //          //taken from Jason Davies science library
   //          // https://github.com/jasondavies/science.js/
   //          function gaussian(x) {
   //              var gaussianConstant = 1 / Math.sqrt(2 * Math.PI),
   //                  mean = versicolorPLZMean,
   //                  sigma = versicolorPLZDeviation;

   //              x = (x - mean) / sigma;
   //              return gaussianConstant * Math.exp(-.5 * x * x) / sigma;
   //          };

