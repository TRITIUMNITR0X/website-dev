import React, {Fragment, useEffect} from 'react';
import './App.css';

function App() {

    useEffect(() => {
        window.addEventListener("scroll", reveal)
        reveal();
    }, [])

    function reveal() {
        const reveals = document.querySelectorAll(".description");
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = Math.max(windowHeight * .2, 500);
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    return (
        <Fragment>

            <div className={'app'}>
                <div className={'banner-wrapper'}>
                    <div className={'banner-inner'}>
                        <div className={'banner-label-wrapper'}>
                            <label className={'banner-label'}>Software</label>
                        </div>
                        <div className={'banner-label-wrapper'}>
                            <label className={'banner-label'}>About</label>
                        </div>
                        <div className={'banner-label-wrapper'}>
                            <label className={'banner-label'}>Contact</label>
                        </div>
                    </div>
                </div>

                <div className={'hero-background'} style={{backgroundColor:"black"}}>
                    <div className={'hero-inner'}>
                        <div style={{display:"flex", margin:"auto"}}>
                            <div style={{display:"flex", margin:"auto"}}>
                                <div style={{display:"inline-block", margin:"auto"}}>
                                    <div className={'image-wrapper'} style={{marginBottom: 32}}>
                                        <div className={'hero-logo'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'content-inner'}>
                    <div style={{minHeight: 1000}}>
                        <div>
                            Tritium Gaming Studios is an small business that aims to bring innovative mobile software solutions to the forefront.
                        </div>
                    </div>
                </div>


                <footer style={{display: "flex"}}>
                    <div className={'footer-wrapper'}>
                        <div className={'footer-outer'}>
                            <div className={'image-wrapper-2'} style={{display:"flex", margin:"auto"}}>
                                <div className={'dev-logo'} style={{maxWidth:"30vw"}}/>
                            </div>
                            <div className="footer">{/*
                                <div className="row">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-youtube"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </div>*/}
                                <div className="row">
                                    <ul>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Developer</a></li>
                                    </ul>
                                </div>

                                <div className="row">
                                    Tritium Gaming Studios Copyright © 2023 Tritium Gaming Studios - All rights reserved
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Fragment>
    );
}

export default App;
