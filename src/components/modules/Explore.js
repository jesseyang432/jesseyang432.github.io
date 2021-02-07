import React, {Component} from 'react';
import * as d3 from "d3";

import whatido from '../../data/whatido';

class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
        };

        this.data = whatido;
    }

    el = React.createRef();
    width = 1000;
    height = 500;

    radiusScale = d3.scaleSqrt().domain([1, 10]).range([10, 80]);

    forceXCombine = d3.forceX((d) => {
        return this.width/2;
    }).strength(0.05);

    forceXSeparate = d3.forceX((d) => {
        if (d.type === "software") {
            return 200;
        } else if (d.type === "theoretical cs") {
            return 500;
        } else if (d.type === "math") {
            return 800;
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
        return this.radiusScale(d.value)+2
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
        .attr("viewBox", "0 0 1000 500")
        .attr("overflow", "visible")
        // .attr("preserveAspectRatio", "xMinYMin meet")
        // .attr("style", "border: thin red solid")
        // .attr("borderRadius", "50%");
  }

  drawChart(svg) {

    let circles = svg.selectAll(".circle")
        .data(this.data)
        .enter().append("circle")
        .attr("class", "circle exp-fadeIn")
        .attr("r", (d) => {
            return this.radiusScale(d.value);
        })
        .attr("fill", (d) => {
            return (d.type === "software" ? "#92b4f4" : (d.type === "theoretical cs" ? "#e39ff6" : "#f6bdd1"))
        })
        .attr("cx", 100)
        .attr("cy", 300)
        .on("click", (event, d) => this.bubbleClicked(d));

    let labels = svg.selectAll(".label")
        .data(this.data)
        .enter().append("text")
        .attr("class", "label exp-fadeIn")
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "central")
        .attr("fill", "white")
        .attr("font-size", "20px")
        .text((d) => {
            return d.title;
        })
        .on("click", (event, d) => this.bubbleClicked(d));

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

  bubbleClicked = (bubble) => {
      this.setState({selected: bubble});
  }

  getTooltip = () => {
      if (this.state.selected) {
          return (
              <div className="Explore-tooltip exp-fadeIn">
                  <div onClick={() => this.setState({selected: null})}className="Explore-tooltip-close">+</div>
                  <div className="Explore-tooltip-content">
                    <p><strong>{this.state.selected.title}</strong> -- <em>{this.state.selected.type.toUpperCase()}</em></p>
                    <p><em>Familiarity: {this.state.selected.value}/10</em></p>
                    <hr/>
                    <p>{this.state.selected.description}</p>
                  </div>
                  {/* <div className="Explore-tooltip-tail"></div> */}
              </div>
          );
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
                <h1 className="exp-fadeIn">Explore What I Do</h1>
                <div className="Explore-button-aisle">
                    <button className="exp-fadeIn" id="type" onClick={() => this.toggleStatus("separate")}>Type split</button>
                    <button className="exp-fadeIn" id="combine" onClick={() => this.toggleStatus("combined")}>Combine</button>
                </div>
                <div id="explore" ref={el => (this.el = el)}>{this.getTooltip()}</div>
            </div>
        </>
    );
  }
}

export default Explore;
