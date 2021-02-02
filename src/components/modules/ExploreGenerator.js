import React, {Component} from 'react';
import * as d3 from "d3";

import whatido from '../../data/whatido';

class ExploreGenerator extends Component {
    el = React.createRef();
    width = 800;
    height = 600;

    radiusScale = d3.scaleSqrt().domain([1, 10]).range([10, 80]);

    forceX = d3.forceX((d) => {
        return this.width/2
    }).strength(0.05);

    forceCollide = d3.forceCollide((d) => {
        return this.radiusScale(d.value) + 1
    });
  
    simulation = d3.forceSimulation()
        .force("x", this.forceX)
        .force("y", d3.forceY(this.height / 2).strength(0.05))
        .force("collide", this.forceCollide);

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

  drawChart(svg) {

    let circles = svg.selectAll(".hi")
        .data(this.data)
        .enter().append("circle")
        .attr("class", "hi")
        .attr("r", (d) => {
            return this.radiusScale(d.value);
        })
        .attr("fill", "white")
        .attr("cx", 100)
        .attr("cy", 300)

    let labels = svg.selectAll(".labels")
        .data(this.data)
        .enter().append("text")
        .attr("class", "label")
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "central")
        .attr("fill", "black")
        .attr("font-size", "12px")
        .text((d) => {
            return d.title;
        });

    let ticked = () => {
        circles
            .attr("cx", (d) => {
                return d.x
            })
            .attr("cy", (d) => {
                return d.y
            });

        labels
            .attr("x", (d) => {
                return d.x
            })
            .attr("y", (d) => {
                return d.y
            });
    }

    this.simulation.nodes(this.data)
        .on('tick', ticked);

  }

  componentDidMount = () => {
    let svg = this.createSVG();
    this.drawChart(svg);
  }

  render() {
    return (
        <>
            <h1>Explore What I Do</h1>
            <button id="type" onClick={() => {console.log("You clicked me")}}>Type split</button>
            <button id="combine">Combine</button>
            <div id="explore" ref={el => (this.el = el)}></div>
        </>
    );
  }
}

export default ExploreGenerator;
