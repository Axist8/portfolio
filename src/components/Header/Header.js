import React from 'react';
import Navbar from '../Navbar/Navbar';

function Header() {
    return (
        <header>
            <div className="wrapper">
                <div className="thehead">
                    <div className="titlename">
                        <p className="axe">&lt;Axel Jorgensen | Front End Engineer&gt;</p>
                    </div>
                    <div class="navwrap">
                        <Navbar />
                    </div>
                </div>
            </div>
            <div className="herowrap">
                <div className="hero">
                    <h1><br /><br /><br /><br /><br /><br /><br />Let's &nbsp;&nbsp;<span>code</span>
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;something&nbsp;&nbsp; <span>cool</span></h1>
                </div>
            </div>
        </header>
    )
}

export default Header;