import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div id="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Your Online Study Platform</h2>
                </div>
                <img src="" alt="" className="hero-image" />
            </div>
        </div>
    )
}
export default Landing;