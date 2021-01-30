import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <nav>
          <Logo></Logo>
      </nav>
    );
  }
}

export default Nav;
