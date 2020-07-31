import React from 'react'
import profile from '../assets/img/profile.jpg';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div style={{paddingTop:'6%'}}>
            <Fade top>
                <section className="about" id="about">
                    <h2 className="section-title">About</h2>

                    <div className="about__container bd-grid">
                        <div className="about__img">
                            <img src={profile} alt="" />
                        </div>

                        <div>
                            <h2 className="about__subtitle">HI I'M DAVID FERNANDO ZULUAGA</h2>
                            <p className="about__text">My name is David Fernando Zuluaga. I am 28 years old. Software Engineer with 2+ years in software development with knowledge in Front-End Technologies such as Angular, React, HTML5, CSS3, JQuery, JavaScript and Typescript, and in Backend technologies such as Python, Django rest framework and PostgreSQL, I also have experience in Database design and Service Oriented Architectures.</p>
                        </div>
                    </div>
                </section>
            </Fade>
        </div>
    )
}

export default About
