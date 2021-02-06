import React, {Component} from 'react';
import SocialLinks from './SocialLinks';

class HomeIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <>
            <div className="Home-intro">
                <p>Hey! I'm</p>
                <div className="Home-intro-name">
                    <h1><em>Jesse Yang</em></h1>
                </div>
                <div className="Home-intro-descriptor">
                    <em>Aspiring Mathematics and Computer Science Major</em>
                </div>
                <SocialLinks/>
            </div>
        </>

    );
  }
}

export default HomeIntro;
