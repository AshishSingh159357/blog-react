import React from 'react'
import "./componentCSS/HeaderCSS.css";

import developer from "./images/developer.svg"








export default function Header() {


    function openNav() {

        document.getElementById("mySidenav").style.width = "250px";

    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <div>
            <section className="section-1">
                <span id="menu" className="menu" onClick={openNav}>menu
                &nbsp;
            &#9776;</span>

                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                    <a href="#about">About</a>
                    <a href="#section-2">Skills</a>
                    <a href="#service">Services</a>
                    <a href="#Blog">Blog</a>
                    <a href="#contact">Contact</a>
                </div>

                <div id="section-1" className="parrallax">
                    <div className="Navbar">
                        <span>CodeHitter</span>
                    </div>

                    <div className="main-content">
                        <b>Hello, I am Ashish Singh</b>
                        <h4>I am Web Developer</h4>
                    </div>
                </div>





                <section id="about" className="text-gray-600 body-font">
                    <h1 className="px-5" style={{ fontSize: "40px" }}>About Me</h1>
                    <div id="dont-know" className="px-5">
                    </div>
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div
                            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                            <h3 id="top-intro">I am a
                        Developer</h3>
                            <h1 style={{ fontWeight: 600 }} className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                Make it work, make it right, make it fast.
                        <br className="hidden lg:inline-block" />
                            </h1>
                            <p className="mb-8 leading-relaxed">Hello! My
                            name is
                            Ashish and I enjoy creating things that live on the
                            internet. My interest in development started back in 2018 when I started making some basics
                            design
                            using other websites design. During my learning phase I have study different technologies but
                            the
                        most fascinated domain for me was development,cloud and security.</p>

                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src={developer} />
                        </div>
                    </div>
                </section>





            </section>
        </div>
    )
}
