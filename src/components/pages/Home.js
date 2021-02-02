import React, {Component} from 'react';
import LogoLoading from '../modules/LogoLoading';
import Nav from '../modules/Nav';
import SocialLinks from '../modules/SocialLinks';
import Explore from '../modules/Explore';

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
                            <h1>Jesse Yang</h1>
                        </div>
                        <div className="Home-intro-descriptor">
                            <em>Aspiring Mathematics and Computer Science Major</em>
                        </div>
                        <SocialLinks/>
                        <div className="Home-intro-bio-container">
                            <div className="Home-intro-bio-image">
                                <img src="/images/jesseyang.jpg" alt="Jesse Yang"/>
                            </div>
                            <div className="Home-intro-bio-description">
                                <p>I'm a freshman from the Chicagoland area currently studying at MIT! I hope to</p>
                                <ul>
                                    <li><span className="first-word">Build</span> something people can enjoy</li>
                                    <li><span className="first-word">Learn</span> something to help make the world a better place</li>
                                    <li><span className="first-word">Write</span> something people can relate to</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <Explore/>
                </div>
            }
        </>
    );
  }
}

export default Home;
