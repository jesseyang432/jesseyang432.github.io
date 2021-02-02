import React, {Component} from 'react';
import * as d3 from "d3";

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
    svg.append("circle").attr("r", 100);
  }

  componentDidMount = () => {
    let svg = this.createSVG();
    this.drawChart(svg);
  }

  pack(data, size) {
    return d3.pack()
    .size(size)
    .padding(3)
  }

  makeHierarchy(data) {
      d3.hierarchy({children: data})
      .sum(d => d.value)
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
