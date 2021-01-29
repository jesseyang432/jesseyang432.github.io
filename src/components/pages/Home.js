import React, {Component} from 'react';
import LogoLoading from '../modules/LogoLoading';
import Nav from '../modules/Nav';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <>
            {/* <Nav/> */}
            {/* <div className="Home-title">
                <h1><em>Jesse Yang</em></h1>
            </div> */}
            <div className="Home-LogoLoading">
                <LogoLoading></LogoLoading>
            </div>
        </>
    );
  }
}

export default Home;
