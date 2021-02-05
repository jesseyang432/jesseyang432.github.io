import React, {Component} from 'react';
import LogoLoading from '../modules/LogoLoading';
import Nav from '../modules/Nav';
import SocialLinks from '../modules/SocialLinks';
import Explore from '../modules/Explore';
import HomeBio from '../modules/HomeBio';
import HomeIntro from '../modules/HomeIntro';

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
                    <div className="Home-intro-container">
                        <HomeIntro/>
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
