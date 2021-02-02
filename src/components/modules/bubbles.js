// import datapoints from '../../data/whatido';

(function() {
    let width = 500;
    let height = 500;

    let svg = d3.select("#chart")
        .append("svg")
        .attr("height", height)
        .attr("width", width)
        .append("g")
        .attr("transform", "translate(0,0)");

    d3.queue()
        .defer(d3.csv, "sales.csv")
        .await(ready)

    function ready (error, datapoints) {
        let circles = svg.selectAll(".artist")
        .data(datapoints)
        .enter().append("circle")
        .attr("class", "artist")
        .attr("r", 10)
        .attr("fill", "lightblue")
    }

})();