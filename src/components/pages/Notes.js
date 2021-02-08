import React, {useRef, useState, useEffect} from 'react';
import {useIntersection} from 'react-use';
import LogoLoading from '../modules/LogoLoading';
import Nav from '../modules/Nav';

import gsap from 'gsap';

function Notes() {

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

    // expIntersection && expIntersection.intersectionRatio < 0.25 ?
    // fadeOut(".exp-fadeIn-header") :
    // fadeIn(".exp-fadeIn-header");

    expIntersection && expIntersection.intersectionRatio < 0.3 ?
    fadeOut(".exp-fadeIn") :
    fadeIn(".exp-fadeIn");

    return (
        <>
            <LogoLoading></LogoLoading>
            <div className="Notes-PageContainer">
                Hey
            </div>
                
        </>
    );

}

export default Notes;
