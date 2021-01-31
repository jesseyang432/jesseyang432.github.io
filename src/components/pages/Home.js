import React, {Component} from 'react';
import LogoLoading from '../modules/LogoLoading';
import Nav from '../modules/Nav';
import {FaGithubSquare, FaInstagramSquare, FaFacebookSquare, FaLinkedin} from "react-icons/fa";
import {FiGithub, FiInstagram, FiFacebook, FiLinkedin} from "react-icons/fa";
import {RiGithubLine, RiInstagramLine, RiFacebookFill, RiFacebookLine, RiLinkedinFill, RiLinkedinLine} from "react-icons/ri";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
        this.setState({loading: false});
    }, 5000);
  }

  render() {
      console.log(this.state.loading);
    return (
        <>
            {this.state.loading ? 
                <LogoLoading></LogoLoading> :
                <div className="Home-LogoLoading">
                    <Nav/>
                    <div className="Home-intro">
                        <p>Hey! I'm</p>
                        <div className="Home-intro-info">
                            <h1>Jesse Yang</h1>
                        </div>
                        <div className="Home-intro-links">
                            <RiGithubLine size={30}/>
                            <RiFacebookFill size={30}/>
                            <RiLinkedinFill size={30}/>
                            <RiInstagramLine size={30}/>
                        </div>
                    </div>
                </div>
            }
        </>
    );
  }
}

export default Home;
