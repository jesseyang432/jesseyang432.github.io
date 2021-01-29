import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <nav>
          <h1>hello from the navbar</h1>
          <h3>Logo</h3>
          <ul className="nav-links">
              <Link to='/'>
                <li>About</li>
              </Link>
          </ul>
      </nav>
    );
  }
}

export default Nav;
