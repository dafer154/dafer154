import React from 'react'
import davidZ from '../assets/img/davidZ.JPG'
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-router-dom'
// import cv from '../assets/CV_David_Zuluaga.pdf'

const Home = () => {
    return (
        <div>
            <Fade top>
                <section className="home bd-grid" id="home">
                    <div className="home__data">
                        <div style={{ width: "56%" }}>
                            <h1 className="home__title">Tikineo absoluto</h1>
                            {/* <Link to={cv} target="_blank" download="CV_David_Zuluaga.pdf">
                                <div href={cv} className="button"  target="_blank" download="CV_David_Zuluaga.pdf">DOWNLOAD MY CV</div>
                            </Link> */}

                            <div className="button">DOWNLOAD MY CV</div>

                        </div>
                        <div className="home__img" style={{ width: "30%", paddingTop: "8%" }} >
                            <img src={davidZ} alt="" className="image-custom" />
                        </div>
                    </div>

                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/davidfza25" className="home__social-icon" target="_blank"><i className='bx bxl-linkedin'></i></a>
                        <a href="https://twitter.com/David_fza" className="home__social-icon" target="_blank"><i className='bx bxl-twitter' ></i></a>
                        <a href="https://github.com/dafer154" className="home__social-icon" target="_blank"><i className='bx bxl-github' ></i></a>
                    </div>
                </section>
            </Fade>
        </div>
    )
}

export default Home
