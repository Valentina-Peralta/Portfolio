import React from 'react'
import Marquee from 'react-fast-marquee'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'
import react from '../assets/images/react.png'
import node from '../assets/images/node.png'
import express from '../assets/images/express.png'
import postgresql from '../assets/images/postgresql.png'
function TechMarquee() {
    return (

        <Marquee
            pauseOnHover
            speed={10}
        >
            <div className="image-wrapper">
                <img src={html} alt="" />
            </div>
            <div className="image-wrapper">
                <img src={css} alt="" />

            </div>
            <div className="image-wrapper">
                <img src={js} alt="" />

            </div>
            <div className="image-wrapper">
                <img src={react} alt="" />

            </div>
            <div className="image-wrapper">
                <img src={node} alt="" />

            </div>
            <div className="image-wrapper">
                <img src={express} alt="" />

            </div>
            <div className="image-wrapper">
                <img src={postgresql} alt="" />

            </div>

        </Marquee>

    )
}

export default TechMarquee