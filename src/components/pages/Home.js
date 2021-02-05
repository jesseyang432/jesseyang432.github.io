import React, {Component} from 'react';
import LogoLoading from '../modules/LogoLoading';
import Nav from '../modules/Nav';
import SocialLinks from '../modules/SocialLinks';
import Explore from '../modules/Explore';
import HomeBio from '../modules/HomeBio';

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

    return (
        <>
            {this.state.loading ? 
                <LogoLoading></LogoLoading> :
                <div className="Home-LogoLoading">
                    <Nav/>
                    <div className="Home-intro">
                        <p>Hey! I'm</p>
                        <div className="Home-intro-info">
                            <h1><em>Jesse Yang</em></h1>
                        </div>
                        <div className="Home-intro-descriptor">
                            <em>Aspiring Mathematics and Computer Science Major</em>
                        </div>
                        <SocialLinks/>
                    </div>
                    <div className="Home-bio-container">
                        <HomeBio/>
                    </div>
                    <div className="Home-explore">
                        <Explore/>
                    </div>
                </div>
            }
        </>
    );
  }
}

export default Home;
