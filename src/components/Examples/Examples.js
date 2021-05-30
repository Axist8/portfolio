import React from 'react';
import { images } from '../../assets/images';
import './Examples.css';

export const Examples = () => {
    return (
        <section id="examples">
            <div className="title" id="examples-title">
                <h2>my portfolio</h2>
            </div>
            <div className="examples-wrapper">

                <div className="example-wrapper">

                    <div className="ePanel">
                        <figure className="example">
                            <a href="http://spot-gen.surge.sh" rel="noreferrer" target="_blank">
                                <img src={images.spotgen} alt="spotgen thumbnail" />
                            </a>
                        </figure>
                    </div>

                    <div className="ePanel">
                        <h4>spotgen</h4>
                        <h5>A Spotify playlist generator </h5>
                        <p>This app was created using React and connects to the Spotify API. Search for your favorite music and create playlists that are saved into your Spotify account!</p>
                        <div className="gitbut">
                            <a href="https://github.com/Axist8/jammming" rel="noreferrer" target="_blank" title="View the code on github ;)">
                                <button className="sub">github</button>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="division"></div>

                <div className="example-wrapper reverse">

                    <div className="ePanel">
                        <h4>magic eight ball</h4>
                        <h5>A virtual prediction toy</h5>
                        <p>A classic toy brought to life in a virtual space using javascript.</p>
                        <div className="gitbut">
                            <a href="https://github.com/Axist8/m8b" rel="noreferrer" target="_blank" title="View the code on github ;)">
                                <button className="sub">github</button>
                            </a>
                        </div>
                    </div>

                    <div className="ePanel">
                        <figure className="example">
                            <a href="http://axeljorgensen.info/magic-eight-ball/index.html" rel="noreferrer" target="_blank">
                                <img src={images.m8b} alt="magic eight ball thumbnail" />
                            </a>
                        </figure>
                    </div>

                </div>

                <div className="division"></div>
                
                <div className="example-wrapper">

                    <div className="ePanel">
                        <figure className="example">
                            <a href="http://axeljorgensen.info/unplugged/index.html" rel="noreferrer" target="_blank">
                                <img src={images.unplugged} alt="unplugged thumbnail" />
                            </a>
                        </figure>
                    </div>

                    <div className="ePanel">
                        <h4>unplugged</h4>
                        <h5>The unplugged landing page</h5>
                        <p>This site is fully responsive to any device and aims to capture the calming aesthetic the business is showcasing.</p>
                        <div className="gitbut">
                            <a href="https://github.com/Axist8/Unplugged" rel="noreferrer" target="_blank" title="View the code on github ;)">
                                <button className="sub">github</button>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="division"></div>

                <div className="example-wrapper reverse">

                    <div className="ePanel">
                        <h4>election map</h4>
                        <h5>An interactive election map</h5>
                        <p>This election map was designed using jquery showing just how powerful some provided tools can be.</p>
                        <div className="gitbut">
                            <a href="https://github.com/Axist8/election-map-project" rel="noreferrer" target="_blank" title="View the code on github ;)">
                                <button className="sub">github</button>
                            </a>
                        </div>
                    </div>

                    <div className="ePanel">
                        <figure className="example">
                            <a href="http://axeljorgensen.info/election-map-project/index.html" rel="noreferrer" target="_blank">
                                <img src={images.elecmap} alt="election map thumbnail" />
                            </a>
                        </figure>
                    </div>

                </div>
                
            </div>
        </section>
    )
}