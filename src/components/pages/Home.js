import React, {Component, useRef} from 'react';
import {useIntersection} from 'react-use';
import LogoLoading from '../modules/LogoLoading';
import Nav from '../modules/Nav';
import Explore from '../modules/Explore';
import HomeBio from '../modules/HomeBio';
import HomeIntro from '../modules/HomeIntro';

import gsap from 'gsap';

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

    // sectionRef = useRef(null);

    // intersection = useIntersection(this.sectionRef, {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 1
    // });
  }

  render() {

    return (
        <>
            {this.state.loading ? 
                <LogoLoading></LogoLoading> :
                <div className="Home-LogoLoading">
                    <Nav/>
                    <div className="Home-intro-container">
                        <HomeIntro/>
                    </div>
                    <div ref={this.sectionRef} className="Home-bio-container">
                        <HomeBio/>
                    </div>
                    <div className="Home-explore">
                        <Explore/>
                    </div>
                </div>
            }
        </>
    );
  }
}

export default Home;
