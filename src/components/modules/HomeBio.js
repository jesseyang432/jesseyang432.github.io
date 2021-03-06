import React, {useRef, useState, useEffect} from 'react';
import {useIntersection} from 'react-use';

import gsap from 'gsap';

function HomeBio() {

    const imageRef = useRef(null);
    const descriptionRef = useRef(null);

    const imageIntersection = useIntersection(imageRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });
    const descriptionIntersection = useIntersection(descriptionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });

    const imageIntersected = false;
    const descriptionIntersected = false;

    // const fadeIn = (element) => {
    //     gsap.to(element, {
    //         duration: 1,
    //         opacity: 1,
    //         y: -40,
    //         ease: 'power4.out',
    //         stagger: {
    //             amount: .3
    //         }
    //     });

    // };

    const fadeOut = (element) => {
        // gsap.to(element, {
        //     duration: 1,
        //     opacity: 0,
        //     y: -20,
        //     ease: 'power4.out',
        //     stagger: {
        //         amount: .3
        //     }
        // });
    };

    // imageIntersection && imageIntersection.intersectionRatio < 0.5  ?
    // fadeOut(".bio-fadeIn") :
    // fadeIn(".bio-fadeIn");

    // descriptionIntersection && descriptionIntersection.intersectionRatio < 0.5 ?
    // fadeOut(".bio-fadeIn") :
    // fadeIn(".bio-fadeIn");

    return (
        <div className="Home-bio-info">
                <div className="Home-bio-image bio-fadeIn">
                    <div id="Home-bio-image-hover" className="Home-bio-image-text">
                        <p><strong>From: Chicago, IL</strong></p>
                        <p><strong>Age: 18</strong></p>
                    </div>
                    <img src="/images/jesseyang.jpg" alt="Jesse Yang"/>
                </div>
                <div className="Home-bio-description">
                    <p className="bio-fadeIn">I'm an MIT freshman hoping to</p>
                    <ul>
                        <li className="bio-fadeIn"><span className="first-word">Build</span> something people can enjoy</li>
                        <li className="bio-fadeIn"><span className="first-word">Learn</span> something to help make the world a better place</li>
                        <li className="bio-fadeIn"><span className="first-word">Write</span> something people can relate to</li>
                    </ul>
                </div>
            </div>
    );
}

export default HomeBio;
