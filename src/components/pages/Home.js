import React, {Component} from 'react';
import LogoLoading from '../modules/LogoLoading';
import Nav from '../modules/Nav';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
        this.setState({loading: false});
    }, 5000);
  }

  render() {
      console.log(this.state.loading);
    return (
        <>
            ({this.state.loading ? 
                <LogoLoading></LogoLoading> :
                <div className="Home-LogoLoading">
                <Nav/>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                <h1>lots of content</h1>
                </div>
            })
        </>
    );
  }
}

export default Home;
