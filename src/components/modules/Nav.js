import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
        active: false, 
    }
  }

  changeBackground = () => {
      console.log("working");
    //   if (window.scrollY >= 80) {
    //       this.setState({active: true});
    //   } else {
    //     this.setState({active: false});
    //   }
  }

  componentDidMount() {
      window.addEventListener('scroll', this.changeBackground);
  }

  render() {
    return (
        <nav className="Nav-bar">
            <div className="Nav-logo">
                <Link to="/">
                    <Logo></Logo>
                </Link>
            </div>
            <ul className="Nav-links">
                <li>
                    <Link to="/">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Notes
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
  }
}

export default Nav;
