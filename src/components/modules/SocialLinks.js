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
                <a href="https://github.com/jesseyang432">
                    <RiGithubLine size={30}/>
                </a>
                <a href="https://www.facebook.com/jesse.yang.1272/">
                    <RiFacebookFill size={30}/>
                </a>
                <Link to="/">
                    <RiLinkedinFill size={30}/>
                </Link>
                <a href="https://www.instagram.com/jesseyang_/">
                    <RiInstagramLine size={30}/>
                </a>
            </div>
        </>
    );
  }
}

export default SocialLinks;
