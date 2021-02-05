import React, {Component} from 'react';

class HomeBio extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <>
            <div className="Home-bio-info">
                <div className="Home-bio-image">
                    <div id="Home-bio-image-hover" className="Home-bio-image-text">
                        <p><strong>From: Chicago, IL</strong></p>
                        <p><strong>Age: 18</strong></p>
                    </div>
                    <img src="/images/jesseyang.jpg" alt="Jesse Yang"/>
                </div>
                <div className="Home-bio-description">
                    <p>I'm an MIT freshman hoping to</p>
                    <ul>
                        <li><span className="first-word">Build</span> something people can enjoy</li>
                        <li><span className="first-word">Learn</span> something to help make the world a better place</li>
                        <li><span className="first-word">Write</span> something people can relate to</li>
                    </ul>
                </div>
            </div>
        </>

    );
  }
}

export default HomeBio;
