import React from 'react';
import Navbar from '../Navbar/Navbar';
import axist from '../../assets/axist.png';

function Header() {
    return (
        <header>
            <div className="wrapper">
                <div className="thehead">
                    <div className="topofpage">
                        <div className="logo">
                            <img src={axist} className="logoImage" alt="logo" />
                        </div>
                        <div className="titlename">
                            <p className="axe">&lt;Axel Jorgensen | Front-End Engineer&gt;</p>
                        </div>
                        <div className="division"></div>
                        <div className="navwrap">
                            <Navbar />
                        </div>
                    </div>
                    <div className="underline"></div>
                </div>
            </div>
            <div className="herowrap">
                <div className="hero">
                    <h1>Let's &nbsp;&nbsp;<span>code</span>
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;something&nbsp;&nbsp; <span>cool</span></h1>
                </div>
            </div>
        </header>
    )
}

export default Header;