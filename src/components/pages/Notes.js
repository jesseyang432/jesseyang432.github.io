import React, {useRef, useState, useEffect} from 'react';
import {useIntersection} from 'react-use';
import LogoLoading from '../modules/LogoLoading';
import Nav from '../modules/Nav';
import SingleNotes from '../modules/SingleNotes';

import notes from '../../data/notes';

import gsap from 'gsap';

function Notes() {

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

    const myNotes = notes.map((note, i) => (
        <SingleNotes key ={i} note={note}></SingleNotes>
    ));

    return (
        <>
            <LogoLoading></LogoLoading>
            <div ref={sectionRef} className="Notes-PageContainer">
                <Nav/>
                <div className="Notes-header notes-header-fadeIn"></div>
                <div className="Notes-message">
                    <p>This is a section for my class notes! I'm sure my notes are filled with typos and confusing bits, but I'll be happy if they can help anyone serve as a reference for or a glimpse into a class.</p>
                    <p className="Notes-message-name">~ Jesse Yang</p>
                </div>
                {myNotes}
            </div>
                
        </>
    );

}

export default Notes;
