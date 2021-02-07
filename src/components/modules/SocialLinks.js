import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {RiGithubLine, RiInstagramLine, RiFacebookFill, RiLinkedinFill} from 'react-icons/ri';

class SocialLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
  }

  render() {
    return (
        <>
            <div className="SocialLinks-links">
                <div className="SocialLinks-single-link">
                    <a href="https://github.com/jesseyang432">
                        <RiGithubLine size={32}/>
                    </a>
                </div>
                <div className="SocialLinks-single-link">
                    <a href="https://www.facebook.com/jesse.yang.1272/">
                        <RiFacebookFill size={32}/>
                    </a>
                </div>
                <div className="SocialLinks-single-link">
                    <Link to="/">
                        <RiLinkedinFill size={32}/>
                    </Link>
                </div>
                <div className="SocialLinks-single-link">
                    <a href="https://www.instagram.com/jesseyang_/">
                        <RiInstagramLine size={32}/>
                    </a>
                </div>
            </div>
        </>
    );
  }
}

export default SocialLinks;
