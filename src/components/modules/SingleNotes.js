import React, {useRef, useState, useEffect} from 'react';
import {useIntersection} from 'react-use';

import {FiDownload} from 'react-icons/fi';

import gsap from 'gsap';

function SingleNotes(props) {

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
        <>
        <div className="SingleNotes-container">
            <h2>{props.note.title}</h2>
            <p>{props.note.description}</p>
            <a href={props.note.href} className="SingleNotes-download" target="_blank"><FiDownload size={24}/></a>
        </div>
        </>
    );
}

export default SingleNotes;
