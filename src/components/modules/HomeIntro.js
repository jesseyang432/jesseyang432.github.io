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
            <p>Hey! I'm</p>
            <div className="Home-intro-info">
                <h1><em>Jesse Yang</em></h1>
            </div>
            <div className="Home-intro-descriptor">
                <em>Aspiring Mathematics and Computer Science Major</em>
            </div>
            <SocialLinks/>
        </>

    );
  }
}

export default HomeIntro;
