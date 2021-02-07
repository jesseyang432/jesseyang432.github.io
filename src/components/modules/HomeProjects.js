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
    fadeOut(".proj-fadeIn-header") :
    fadeIn(".proj-fadeIn-header");

    const myProjects = projectList.map((project) => (
      <SingleProject project={project}/>
    ));

    return (
        <>
            <div className="HomeProjects-container">
              <div ref={projRef}>
                <h1 className="proj-fadeIn-header">Projects</h1>
              </div>
                {myProjects}
            </div>
        </>

    );
}

export default HomeProjects;
