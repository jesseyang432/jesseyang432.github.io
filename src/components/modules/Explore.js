import React, {Component} from 'react';
import * as d3 from "d3";
import {GiCheckMark} from 'react-icons/gi';

import whatido from '../../data/whatido';

class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            distribution: "combined",
            showSoftware: true,
            showTheoreticalCS: true,
            showMath: true,
            minFamiliarity: 0,
        };

        this.data = whatido;
    }

    el = React.createRef();
    width = 1000;
    height = 500;

    radiusScale = d3.scaleSqrt().domain([1, 10]).range([10, 70]);

    forceXCombine = d3.forceX((d) => {
        if (d.value >= this.state.minFamiliarity) {
            if (d.type === "software" && this.state.showSoftware) {
                return this.width/2;
            } else if (d.type === "theoretical cs" && this.state.showTheoreticalCS) {
                return this.width/2;
            } else if (d.type === "math" && this.state.showMath) {
                return this.width/2;
            } else {
                return d.escape;
            }
        } else {
            return d.escape;
        }
    }).strength(0.05);

    forceXSeparate = d3.forceX((d) => {
        if (d.value >= this.state.minFamiliarity) {
            if (d.type === "software") {
                if (this.state.showSoftware) {
                    if (this.state.showTheoreticalCS && this.state.showMath) {
                        return 200;
                    } else if (this.state.showTheoreticalCS || this.state.showMath) {
                        return 300;
                    } else {
                        return 500;
                    }
                } else {
                    return d.escape;
                }
            } else if (d.type === "theoretical cs") {
                if (this.state.showTheoreticalCS) {
                    if (this.state.showSoftware && this.state.showMath) {
                        return 500;
                    } else if (this.state.showSoftware) {
                        return 700;
                    } else if (this.state.showMath) {
                        return 300;
                    } else {
                        return 500;
                    }
                } else {
                    return d.escape;
                }
            } else if (d.type === "math") {
                if (this.state.showMath) {
                    if (this.state.showSoftware && this.state.showTheoreticalCS) {
                        return 800;
                    } else if (this.state.showSoftware || this.state.showTheoreticalCS) {
                        return 700;
                    } else {
                        return 500
                    }
                } else {
                    return d.escape;
                }
            }
        } else {
            return d.escape;
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
        return this.radiusScale(d.value)*1.05
    });
  
    simulation = d3.forceSimulation()
        .force("x", this.forceXCombine)
        .force("y", d3.forceY(this.height / 2).strength(0.04))
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
            return (d.type === "software" ? "#92b4f4" : (d.type === "theoretical cs" ? "#af69ef" : "#f6bdd1"))
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
        .attr("font-size", "14px")
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

    this.runSimulation();

  }

  toggleSeparate = () => {
      this.setState({
          distribution: "separate",
        }, this.runSimulation)
  }

  toggleCombined = () => {
      this.setState({
          distribution: "combined",
      }, this.runSimulation)
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
                    <p className="Explore-tooltip-content-description">{this.state.selected.description}</p>
                  </div>
                  {/* <div className="Explore-tooltip-tail"></div> */}
              </div>
          );
      }
  }

  toggleSoftware = () => {
      this.setState({
          showSoftware: !this.state.showSoftware,
      }, this.runSimulation);
  }

  toggleTheoreticalCS = () => {
      this.setState({
          showTheoreticalCS: !this.state.showTheoreticalCS,
      }, this.runSimulation);
  }

  toggleMath = () => {
      this.setState({
          showMath: !this.state.showMath,
      }, this.runSimulation);
  }

  runSimulation = () => {
    if (this.state.distribution === "separate") {
        this.simulation
        .force("x", this.forceXSeparate)
        .alphaTarget(0.5)
        .restart();
    } else if (this.state.distribution === "combined") {
        this.simulation
        .force("x", this.forceXCombine)
        .alphaTarget(0.5)
        .restart();
    }
  }

  changeMinFamiliarity = (event) => {
      this.setState({
          minFamiliarity: event.target.value
      }, this.runSimulation());
  }

  componentDidMount = () => {
    let svg = this.createSVG();
    this.drawChart(svg);
  }

  render() {
    //   console.log(this.state.minFamiliarty/5);
    let fillBreak;
    if (this.state.minFamiliarity >= 9) {
        fillBreak = (10*this.state.minFamiliarity-1).toString().concat("%");
    } else {
        fillBreak = (10*this.state.minFamiliarity).toString().concat("%");
    }
    let fill = "linear-gradient(to right, white 0%, white ".concat(fillBreak);
    fill = fill.concat(", #ffccbb ").concat(fillBreak).concat(", #ffccbb 100%)");
    //   fillWidth = fillWidth.concat((24 - 12*this.state.minFamiliarty/5).toString());
    //   fillWidth = fillWidth.concat("px)");
    //   fillWidth = "calc(".concat(fillWidth);
    //   console.log(fillWidth);
    return (
        <>
            <div className="Explore-container">
                <h1 className="exp-fadeIn">Explore What I Do</h1>
                <div className="Explore-button-aisle">
                    <button id={this.state.distribution === "separate" ? "Explore-button-selected" : "Explore-button-unselected"} className="exp-fadeIn" onClick={this.toggleSeparate}>Separate</button>
                    <div className="Explore-slider-container exp-fadeIn">
                        <div className="Explore-slider-body">
                            <p className="Explore-slider-header"><em>Familiarity Level (&#8805;)</em></p>
                            <input className="Explore-slider" type="range" min="0" max="10" step="0.1" value={this.state.minFamiliarity} onChange={this.changeMinFamiliarity} style={{background: fill}}></input>
                            {/* <div className="Explore-input-fill" style={{width: fillWidth}}></div> */}
                            <p className="Explore-slider-slight">Slight</p>
                            <p className="Explore-slider-moderate">Moderate</p>
                            <p className="Explore-slider-comfortable">Comfortable</p>
                        </div>
                    </div>
                    <button id={this.state.distribution === "combined" ? "Explore-button-selected" : "Explore-button-unselected"} 
                    className="exp-fadeIn" onClick={this.toggleCombined}>Combine</button>
                    <div className="Explore-checkboxes">
                        <div id={this.state.showSoftware ? "Explore-software-clicked" : "Explore-software"} className="Explore-checkbox exp-fadeIn" onClick={this.toggleSoftware}>
                            <div className="Explore-checkmark"><GiCheckMark/></div>
                        </div>
                        <div id={this.state.showTheoreticalCS ? "Explore-theoretical-cs-clicked" : "Explore-theoretical-cs"} className="Explore-checkbox exp-fadeIn" onClick={this.toggleTheoreticalCS}>
                            <div className="Explore-checkmark"><GiCheckMark/></div>
                        </div>
                        <div id={this.state.showMath ? "Explore-math-clicked" : "Explore-math"} className="Explore-checkbox exp-fadeIn" onClick={this.toggleMath}>
                            <div className="Explore-checkmark"><GiCheckMark/></div>
                        </div>
                    </div>
                </div>

                <div id="explore" ref={el => (this.el = el)}>{this.getTooltip()}</div>
            </div>
        </>
    );
  }
}

export default Explore;
