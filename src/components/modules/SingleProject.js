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

    const technologies = props.project.technologies.map((tech) => (
        <p>{tech} </p>
    ));


    return (
        <>
            <div ref={projRef} className="Project-section">
                <div className={`Project-container proj-fadeIn-${props.project.id}`}>
                    <div className={`Project-img-container ${props.class[0]}`}>
                        <img src={`${props.project.src}`} alt=""/>
                    </div>
                    <div className={`Project-info-container ${props.class[1]}`}>
                        <h2>{props.project.title}</h2>
                        <div className="Project-info-description">
                            <p>{props.project.description}</p>
                        </div>
                        <div className="Project-info-tech">
                            {technologies}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default SingleProject;
