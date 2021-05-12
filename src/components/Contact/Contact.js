import React from 'react';
import { DrumKit } from '../DrumKit/DrumKit';
import { images } from '../../assets/images';

export const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-wrapper">
                <h2>let's connect</h2>
                <div className="panels">
                    <div className="panel">
                        <h4>Hire me</h4>
                        <p className="email">code@axeljorgensen.info</p>
                    </div>
                    <div className="panel">
                        <h4>Follow me</h4>
                        <div className="icons">
                            <div className="icon">
                                <figure>
                                    <a href="https://github.com/Axist8" target="_blank"><img src={images.github} alt="github" /></a>
                                </figure>
                            </div>
                            <div className="icon">
                                <figure>
                                    <a href="https://www.linkedin.com/in/c-axel-jorgensen-37521bb1/" target="_blank"><img src={images.linkedin} alt="linked in" /></a>
                                </figure>
                            </div>
                            <div className="icon">
                                <figure>
                                    <a href="https://www.instagram.com/axistcoding/" target="_blank"><img src={images.instagram} alt="instagram" /></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="panel" id='drumkit'>
                        <p>Use your keyboard!</p>
                        <DrumKit />
                    </div>
                </div>
            </div>
        </section>
    )
}