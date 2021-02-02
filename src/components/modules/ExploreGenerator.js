import React, {Component} from 'react';
import * as d3 from "d3";

import whatido from '../../data/whatido';

class ExploreGenerator extends Component {
    el = React.createRef();
    width = 800;
    height = 600;
  
    simulation = d3.forceSimulation()
        .force("x", d3.forceX(this.width / 2).strength(0.05))
        .force("y", d3.forceY(this.height / 2).strength(0.05));

    constructor(props) {
        super(props);
        this.state = {
        };

        this.data = whatido;
    }

  createSVG() {
    return d3.select(this.el)
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height)
        .attr("style", "border: thin red solid");
  }

  ready(svg, root) {
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

    leaf.append("text")
        .attr("clip-path", d => d.clipUid)
        .selectAll("tspan")
        .data(d => d.data.title.split(/(?=[A-Z][a-z])|\s+/g))
        .join("tspan")
        .attr("x", 0)
        .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
        .attr("text-anchor", "middle")
        // .attr("alignment-baseline", "central")
        .text(d => d);

    let ticked = () => {
        leaf
            .attr("x", (d) => {
                return d.x
            })
            .attr("y", (d) => {
                return d.y
            });
    }

    this.simulation.nodes(root.leaves())
        .on('tick', ticked);
  }

  drawChart(svg) {
    // let hierarchalData = this.makeHierarchy(this.data);
    // let packLayout = this.pack([this.width - 5, this.height -5]);
    // const root = packLayout(hierarchalData);

    let circles = svg.selectAll("g")
        .data(this.data)
        .enter().append("circle")
        .attr("r", 10)
        .attr("fill", "white")
        .attr("cx", 100)
        .attr("cy", 300)

    let ticked = () => {
        circles
            .attr("cx", (d) => {
                return d.x
            })
            .attr("cy", (d) => {
                return d.y
            });
    }

    this.simulation.nodes(this.data)
        .on('tick', ticked);

    // this.ready(svg, root);

    

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

export default ExploreGenerator;
