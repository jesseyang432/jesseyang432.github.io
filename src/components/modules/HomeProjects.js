import React, {useRef, useState, useEffect} from 'react';
import {useIntersection} from 'react-use';
import SingleProject from './SingleProject';

import projects from '../../data/projects';
import gsap from 'gsap';

function HomeProjects() {

    const projectList = projects;

    const projRef = useRef(null);

    const projIntersection = useIntersection(projRef, {
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

    projIntersection && projIntersection.intersectionRatio < 0.3 ?
    fadeOut(".proj-fadeIn") :
    fadeIn(".proj-fadeIn");

    const myProjects = projectList.map((project) => (
      <SingleProject project={project}/>
    ));

    return (
        <>
            <div ref={projRef} className="HomeProjects-container">
                <h1 className="proj-fadeIn">Projects</h1>
                {myProjects}
            </div>
        </>

    );
}

export default HomeProjects;
