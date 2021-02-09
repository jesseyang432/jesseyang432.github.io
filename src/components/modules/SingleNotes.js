import React, {useRef, useState, useEffect} from 'react';
import {useIntersection} from 'react-use';

import {FiDownload} from 'react-icons/fi';

import gsap from 'gsap';

function SingleNotes(props) {

    const noteRef = useRef(null);

    const intersection = useIntersection(noteRef, {
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
    fadeOut(`.SingleNotes-fadeIn-${props.note.id}`) :
    fadeIn(`.SingleNotes-fadeIn-${props.note.id}`)

    let source;

    if (props.note.source) {
        source = <p className="SingleNotes-source">~ {props.note.source}</p>
    } else {
        source = <p></p>
    }

    return (
        <>
        <div ref={noteRef} >
            <div className={`SingleNotes-container SingleNotes-fadeIn-${props.note.id}`}>
                <h2>{props.note.title}</h2>
                <p>{props.note.description}</p>
                {source}
                <span className="SingleNotes-footer"><em>{props.note.term}</em><a href={props.note.href} className="SingleNotes-download" target="_blank"><FiDownload size={24}/></a></span>
            </div>
        </div>
        </>
    );
}

export default SingleNotes;
