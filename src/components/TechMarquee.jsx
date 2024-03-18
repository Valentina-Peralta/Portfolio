import React from 'react'
import Marquee from 'react-fast-marquee'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'
import react from '../assets/images/react.png'
import node from '../assets/images/node.png'
import express from '../assets/images/express.png'
import postgresql from '../assets/images/postgresql.png'
import next from '../assets/images/next.png'
import docker from '../assets/images/docker.svg'
import kubernetes from '../assets/images/kubernetes.svg'
import concourse from '../assets/images/concourse.svg'
import mongo from '../assets/images/mongo.svg'
function TechMarquee() {
    return (
        <div className="marquee-wrapper">
            <Marquee
                pauseOnHover
                speed={120}
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
                <div className="image-wrapper">
                    <img src={next} alt="" />

                </div>
                <div className="image-wrapper">
                    <img src={docker} alt="" />

                </div>
                <div className="image-wrapper">
                    <img src={kubernetes} alt="" />

                </div>
                <div className="image-wrapper">
                    <img src={concourse} alt="" />

                </div>
                <div className="image-wrapper">
                    <img src={mongo} alt="" />

                </div>

            </Marquee>
        </div>

    )
}

export default TechMarquee