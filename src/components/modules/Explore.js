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
    let hierarchalData = this.makeHierarchy();
    let packLayout = this.pack([400 - 5, 400 -5]);
    packLayout(hierarchalData);

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
