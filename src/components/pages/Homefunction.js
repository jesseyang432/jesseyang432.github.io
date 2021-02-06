import React, {useRef, useState, useEffect} from 'react';
import {useIntersection} from 'react-use';
import LogoLoading from '../modules/LogoLoading';
import Nav from '../modules/Nav';
import HomeIntro from '../modules/HomeIntro';
import HomeBio from '../modules/HomeBio';
import Explore from '../modules/Explore';
import HomeProjects from '../modules/HomeProjects';

import gsap from 'gsap';

function Home() {

    const bioRef = useRef(null);
    const bioIntersection = useIntersection(bioRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    });

    const expRef = useRef(null);
    const expIntersection = useIntersection(expRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });

    const fadeIn = (element) => {
        gsap.to(element, {
            duration: 1,
            opacity: 1,
            y: -40,
            ease: 'power4.out',
            stagger: {
                amount: .3
            }
        });
    };

    const fadeOut = (element) => {
        gsap.to(element, {
            duration: 1,
            opacity: 0,
            y: -20,
            ease: 'power4.out',
            stagger: {
                amount: .3
            }
        });
    };

    bioIntersection && bioIntersection.intersectionRatio < 0.2 ?
    fadeOut(".bio-fadeIn") :
    fadeIn(".bio-fadeIn");

    expIntersection && expIntersection.intersectionRatio < 0.3 ?
    fadeOut(".exp-fadeIn-header") :
    fadeIn(".exp-fadeIn-header");

    return (
        <>
            <LogoLoading></LogoLoading>
                <div className="Home-PageContainer">
                    <Nav/>
                    <div className="Home-intro-container">
                        <HomeIntro/>
                    </div>
                    <div ref={bioRef} className="Home-bio-container">
                        <HomeBio/>
                    </div>
                    <div ref={expRef} className="Home-explore-container">
                        <Explore/>
                    </div>
                    <div className="Home-projects-container">
                        <HomeProjects/>
                    </div>
                </div>
            {/* {loading ? 
                <LogoLoading></LogoLoading> :
                <div className="Home-LogoLoading">
                    <Nav/>
                    <div className="Home-intro-container">
                        <HomeIntro/>
                    </div>
                    <div ref={sectionRef} className="Home-bio-container fadeIn">
                        <HomeBio/>
                    </div>
                    <div className="Home-explore">
                        <Explore/>
                    </div>
                </div>
            } */}
        </>
    );

}



//   componentDidMount = () => {
//     setTimeout(() => {
//         this.setState({loading: false});
//     }, 5000);

//     sectionRef = useRef(null);

//     intersection = useIntersection(this.sectionRef, {
//         root: null,
//         rootMargin: '0px',
//         threshold: 1
//     });
//   }

export default Home;
