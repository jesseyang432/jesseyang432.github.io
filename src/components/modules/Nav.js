import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import {FaArrowCircleUp} from 'react-icons/fa';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
        displayed: true,
        // active: false, 
        lastScrollTop: 0,
        showToTop: false,
    }
  }

  changeBackground = () => {
    let scrollTop = window.pageYOffset;
    if (scrollTop <= 80) {
        this.setState({
            displayed: true,
            showToTop: false,
        });
    }
    if (scrollTop > this.state.lastScrollTop && window.scrollY >= 80) {
        this.setState({
            displayed: false,
            showToTop: false,
            lastScrollTop: scrollTop,
        });
    } else if (scrollTop <= this.state.lastScrollTop) {
        if (window.scrollY >= 120) {
            this.setState({showToTop: true});
        } else {
            this.setState({showToTop: false});
        }
        this.setState({
            // displayed: true,
            lastScrollTop: scrollTop,
        });
    }
    // if (window.scrollY >= 80) {
    //     this.setState({active: true});
    // } else {
    // this.setState({active: false});
    // }
  }

  componentDidMount() {
      window.addEventListener('scroll', this.changeBackground);
  }

  render() {
    return (
        <>
        <div className={this.state.showToTop ? 'Nav-totop' : 'Nav-totop-hidden'}><FaArrowCircleUp size={35} fill="white"/></div>
        <nav className={this.state.displayed ? 'Nav-bar' : 'Nav-hidden'}>
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
        </>
    );
  }
}

export default Nav;
