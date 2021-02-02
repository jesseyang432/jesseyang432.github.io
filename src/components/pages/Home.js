import React, {Component} from 'react';
import LogoLoading from '../modules/LogoLoading';
import Nav from '../modules/Nav';
import SocialLinks from '../modules/SocialLinks';

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
                                    <li>build something people can enjoy</li>
                                    <li>learn something to help make the world a better place</li>
                                    <li>write something people can relate to</li>
                                </ul>
                                <p> learn something to help make the world a better place, write something </p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
  }
}

export default Home;
