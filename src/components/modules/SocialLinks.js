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
        </>
    );
  }
}

export default SocialLinks;
