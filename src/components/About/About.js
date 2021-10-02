import React from 'react';
import { images } from '../../assets/images';

export const About = () => {
    return (
        <section id="about">
            <div className="herowrap">
                <div className="about">
                    <video controls>
                        <source src={images.portfoliovideo} type='video/mp4'></source>
                        Your browser does not support this video.
                    </video>
                </div>
            </div>
        </section>
    )
}