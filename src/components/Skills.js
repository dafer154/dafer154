import React from 'react'
import Fade from 'react-reveal/Fade';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {

    const leadership = 80;
    const confidense = 100;
    const creativity = 90;
    const communication = 80;

    return (
        <div style={{ paddingTop: "4%" }}>
            <Fade top>
                <section className="skills" id="skills">
                    <h2 className="section-title">Skills</h2>

                    <div className="skills__container bd-grid">
                        <div>
                            {/* <p className="skills__text"></p> */}
                            <div className="skills__data">
                                <div className="skills__names">
                                    <i className='bx bxl-html5 skills__icon'></i>
                                    <span className="skills__name">HTML5</span>
                                </div>
                                <div className="skills__bar skills__html">

                                </div>
                                <div>
                                    <span className="skills__percentage">90%</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__names">
                                    <i className='bx bxl-css3 skills__icon'></i>
                                    <span className="skills__name">CSS3</span>
                                </div>
                                <div className="skills__bar skills__css">

                                </div>
                                <div>
                                    <span className="skills__percentage">80%</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__names">
                                    <i className='bx bxl-javascript skills__icon' ></i>
                                    <span className="skills__name">JAVASCRIPT</span>
                                </div>
                                <div className="skills__bar skills__js">

                                </div>
                                <div>
                                    <span className="skills__percentage">80%</span>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="skills__data">
                                <div className="skills__names">
                                    <i className='bx bxl-angular skills__icon'></i>
                                    <span className="skills__name">Angular</span>
                                </div>
                                <div className="skills__bar skills__angular">

                                </div>
                                <div>
                                    <span className="skills__percentage">80%</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__names">
                                    <i className='bx bxl-react skills__icon'></i>
                                    <span className="skills__name">REACT</span>
                                </div>
                                <div className="skills__bar skills__react">

                                </div>
                                <div>
                                    <span className="skills__percentage">70%</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__names">
                                    <i className='bx bxl-vuejs skills__icon'></i>
                                    <span className="skills__name">VUE JS</span>
                                </div>
                                <div className="skills__bar skills__vue">

                                </div>
                                <div>
                                    <span className="skills__percentage">50%</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="wrapp__skills">
                        <h2 className="skills__subtitle">Personal Skills</h2>
                        <div className="skills__personal">
                            <div className="personal">
                                <span className="skills__name skills__name__circle">Leadership</span>
                                <CircularProgressbar value={leadership} text={`${leadership}%`} />
                            </div>
                            <div className="personal">
                                <span className="skills__name skills__name__circle">Creativity</span>
                                <CircularProgressbar value={creativity} text={`${creativity}%`} />
                            </div>
                            <div className="personal">
                                <span className="skills__name skills__name__circle">Confidense</span>
                                <CircularProgressbar value={confidense} text={`${confidense}%`} />
                            </div>
                            <div className="personal">
                                <span className="skills__name skills__name__circle">Communication</span>
                                <CircularProgressbar value={communication} text={`${communication}%`} />
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
        </div>
    )
}

export default Skills
