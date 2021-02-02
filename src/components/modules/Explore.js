import React, {Component} from 'react';
import * as d3 from "d3";

import whatido from '../../data/whatido';

class Explore extends Component {
    el = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  createSVG() {
    return d3.select(this.el)
        .append("svg")
        .attr("width", "400")
        .attr("height", 400)
        .attr("style", "border: thin red solid");
  }

  drawChart(svg) {
    let hierarchalData = this.makeHierarchy(whatido);
    let packLayout = this.pack([400 - 5, 400 -5]);
    const root = packLayout(hierarchalData);

    const leaf = svg.selectAll("g")
        .data(root.leaves())
        .join("g")
        .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

    leaf.append("circle")
        .attr("r", d => d.r)
        .attr("fill-opacity", 0.7)
        .attr("fill", "white");

    // leaf.append("clipPath")
    //     .append("use")
    //     .attr("xlink:href", d => d.leafUid.href);

    // leaf.append("text")
    //     .attr("clip-path", d => d.clipUid)
    //     .selectAll("tspan")
    //     .data(d => d.data.name.split(/(?=[A-Z][a-z])|\s+/g))
    //     .join("tspan")
    //     .attr("x", 0)
    //     .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
    //     .text(d => d);

    // leaf.append("title").text(d => `${d.data.title === undefined ? "" : `${d.data.title}`}${format(d.value)}`);

  }

  pack(size) {
    return d3.pack()
    .size(size)
    .padding(3);
  }

  makeHierarchy(data) {
      return d3.hierarchy({children: data})
      .sum(d => d.value);
  }

  componentDidMount = () => {
    let svg = this.createSVG();
    this.drawChart(svg);
  }

  render() {
    return (
        <>
            <h1>Explore What I Do</h1>
            <div id="explore" ref={el => (this.el = el)}></div>
        </>
    );
  }
}

export default Explore;
