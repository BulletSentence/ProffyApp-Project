import React from 'react'
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

function PageHeader() {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to='/'>
                    <img src={backIcon} alt="Back" />
                </Link>
                <img src={logoImg} alt="Logo" />
            </div>

            <div className="header-content">
                <strong>
                    This are the Avaliable Proffys!
                    </strong>
            </div>
        </header>
    )
}

export default PageHeader;