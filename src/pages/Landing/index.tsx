import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';

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
                    <a href="" className="study">
                        <img src={studyIcon} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Landing;