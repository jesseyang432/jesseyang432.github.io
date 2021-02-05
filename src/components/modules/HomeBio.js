import React, {useRef, useState, useEffect} from 'react';
import {useIntersection} from 'react-use';

import gsap from 'gsap';

function HomeBio() {

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
    fadeOut(".fadeIn") :
    fadeIn(".fadeIn");

    return (
        <div className="Home-bio-info">
                <div className="Home-bio-image">
                    <div id="Home-bio-image-hover" className="Home-bio-image-text">
                        <p><strong>From: Chicago, IL</strong></p>
                        <p><strong>Age: 18</strong></p>
                    </div>
                    <img src="/images/jesseyang.jpg" alt="Jesse Yang"/>
                </div>
                <div className="Home-bio-description">
                    <p>I'm an MIT freshman hoping to</p>
                    <ul>
                        <li><span className="first-word">Build</span> something people can enjoy</li>
                        <li><span className="first-word">Learn</span> something to help make the world a better place</li>
                        <li><span className="first-word">Write</span> something people can relate to</li>
                    </ul>
                </div>
            </div>
    );
}

export default HomeBio;
