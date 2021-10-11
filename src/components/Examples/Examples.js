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
                            <a href="https://gameofwarreact.netlify.app/" rel="noreferrer" target="_blank">
                                <img src={images.gameofwar} alt="game of war thumbnail" />
                            </a>
                        </figure>
                    </div>

                    <div className="ePanel">
                        <h4>game of war</h4>
                        <h5>A React application using the Deck of Cards API</h5>
                        <p>The Game of War was a staple of my childhood and I very much enjoyed bringing it to life with react to create a lightning fast approach to playing the game.</p>
                        <div className="gitbut">
                            <a href="https://github.com/Axist8/gameofwarreact" rel="noreferrer" target="_blank" title="View the code on github ;)">
                                <button className="sub">github</button>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="division"></div>

                <div className="example-wrapper reverse">

                    <div className="ePanel">
                        <h4>exist better</h4>
                        <h5>A habit tracking Application</h5>
                        <p>This habit tracking application was designed and built completely on my own. It has the capacity to track routines, behaviors, todos, goals, and even has a wishlist. (still in development)</p>
                        <div className="gitbut">
                            <a href="https://github.com/Axist8/existbetter" rel="noreferrer" target="_blank" title="View the code on github ;)">
                                <button className="sub">github</button>
                            </a>
                        </div>
                    </div>

                    <div className="ePanel">
                        <figure className="example">
                            <a href="https://existbetter.netlify.app/" rel="noreferrer" target="_blank">
                                <img src={images.existbetter} alt="exist better thumbnail" />
                            </a>
                        </figure>
                    </div>

                </div>

                <div className="division"></div>

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
                        <h4>unplugged</h4>
                        <h5>Unplugged brochure site</h5>
                        <p>A clean and fully responsive brochure site for the Unplugged retreat. This site is intuitive and simple to get around to make finding information and getting in contact a breeze.</p>
                        <div className="gitbut">
                            <a href="https://github.com/Axist8/unplugged" rel="noreferrer" target="_blank" title="View the code on github ;)">
                                <button className="sub">github</button>
                            </a>
                        </div>
                    </div>

                    <div className="ePanel">
                        <figure className="example">
                            <a href="http://axeljorgensen.info/unplugged/index.html" rel="noreferrer" target="_blank">
                                <img src={images.unplugged} alt="unplugged thumbnail" />
                            </a>
                        </figure>
                    </div>

                </div>
                
            </div>
        </section>
    )
}