import React, {Component} from 'react';
import * as d3 from "d3";

import whatido from '../../data/whatido';

class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.data = whatido;
    }

    el = React.createRef();
    width = 800;
    height = 600;

    radiusScale = d3.scaleSqrt().domain([1, 10]).range([10, 80]);

    forceXCombine = d3.forceX((d) => {
        return this.width/2;
    }).strength(0.05);

    forceXSeparate = d3.forceX((d) => {
        if (d.type === "software") {
            return 150;
        } else {
            return 650;
        }
    }).strength(0.05);

    // forceX = d3.forceX((d) => {
    //     if (this.status === "combined") {
    //         return this.width/2;
    //     } else if (this.status === "separate") {
    //         if (d.type === "software") {
    //             return 150
    //         } else {
    //             return 650
    //         }
    //     }
    // }).strength(0.05);

    forceCollide = d3.forceCollide((d) => {
        return this.radiusScale(d.value) + 1
    });
  
    simulation = d3.forceSimulation()
        .force("x", this.forceXCombine)
        .force("y", d3.forceY(this.height / 2).strength(0.05))
        .force("collide", this.forceCollide);

  createSVG() {
    return d3.select(this.el)
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height)
        .attr("style", "border: thin red solid")
        .attr("border-radius", "50%");
  }

  drawChart(svg) {

    let circles = svg.selectAll(".circles")
        .data(this.data)
        .enter().append("circle")
        .attr("class", "circles")
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

  toggleStatus = (value) => {
      if (value === "separate") {
        this.simulation
        .force("x", this.forceXSeparate)
        .alphaTarget(0.5)
        .restart();
      } else if (value === "combined") {
        this.simulation
        .force("x", this.forceXCombine)
        .alphaTarget(0.5)
        .restart();
      }
  }


  componentDidMount = () => {
    let svg = this.createSVG();
    this.drawChart(svg);
  }

  render() {
    return (
        <>
            <div className="Explore-container">
                <h1>Explore What I Do</h1>
                <div className="Explore-button-aisle">
                    <button id="type" onClick={() => this.toggleStatus("separate")}>Type split</button>
                    <button id="combine" onClick={() => this.toggleStatus("combined")}>Combine</button>
                </div>
                <div id="explore" ref={el => (this.el = el)}></div>
            </div>
        </>
    );
  }
}

export default Explore;
