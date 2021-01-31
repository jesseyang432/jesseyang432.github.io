import React, {Component} from 'react';
import LogoLoading from '../modules/LogoLoading';
import Nav from '../modules/Nav';
import {Link} from 'react-router-dom';
import {RiGithubLine, RiInstagramLine, RiFacebookFill, RiLinkedinFill} from 'react-icons/ri';

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
                            <Link to="/">
                                <RiGithubLine size={30}/>
                            </Link>
                            <Link to="/">
                                <RiFacebookFill size={30}/>
                            </Link>
                            <Link to="/">
                                <RiLinkedinFill size={30}/>
                            </Link>
                            <Link to="/">
                                <RiInstagramLine size={30}/>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    );
  }
}

export default Home;
