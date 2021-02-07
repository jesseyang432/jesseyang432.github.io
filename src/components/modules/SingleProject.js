import React, {useRef, useState, useEffect} from 'react';
import {useIntersection} from 'react-use';

import gsap from 'gsap';

function SingleProject(props) {

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
    fadeOut(`.proj-fadeIn-${props.project.id}`) :
    fadeIn(`.proj-fadeIn-${props.project.id}`);


    return (
        <>
            <div ref={projRef} className="Project-section">
                <div className={`Project-container proj-fadeIn-${props.project.id}`}>
                    <h1>{props.project.title}</h1>
                </div>
            </div>
        </>

    );
}

export default SingleProject;
