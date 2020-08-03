import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div id="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Your Online Study Platform</h2>
                </div>
                <img
                    src={landingImg}
                    alt="Study Platform"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <a href="#" className="study">
                        <img src={studyIcon} alt="Estudar" />
                    </a>

                    <a href="#" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas" />
                    </a>
                </div>
                <span className="total-connections">
                    200 Connections Total! <img src={purpleHeartIcon} alt="" />
                </span>
            </div>
        </div>
    )
}
export default Landing;