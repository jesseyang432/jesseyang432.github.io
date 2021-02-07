import React, {useRef, useState, useEffect} from 'react';
import {useIntersection} from 'react-use';

import gsap from 'gsap';

function SingleProject() {

    const projRef = useRef(null);

    const projIntersection = useIntersection(projRef, {
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

    projIntersection && projIntersection.intersectionRatio < 0.5 ?
    fadeOut(".proj-fadeIn") :
    fadeIn(".proj-fadeIn");


    return (
        <>
            hey
        </>

    );
}

export default SingleProject;
