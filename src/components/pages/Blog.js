import React, {useRef, useState, useEffect} from 'react';
import {useIntersection} from 'react-use';
import LogoLoading from '../modules/LogoLoading';
import Nav from '../modules/Nav';

import gsap from 'gsap';

function Blog() {

    const sectionRef = useRef(null);
    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
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

    intersection && intersection.intersectionRatio < 0.5 ?
    fadeOut(".notes-header-fadeIn") :
    fadeIn(".notes-header-fadeIn");

    return (
        <>
            <LogoLoading></LogoLoading>
            <div className="Blog-PageContainer">
                <Nav/>
                <div className="Blog-header"></div>
                <div className="Blog-message">I haven't been writing much lately, but I'm planning on starting up again soon!</div>
            </div>
                
        </>
    );

}

export default Blog;
