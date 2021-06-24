import React from 'react'

import './componentCSS/skill.css';
import skill from './images/skill.svg';

export default function Skill() {
    return (
        <div>

            <section id="section-2" class="text-gray-600 body-font">

                <h1 class="px-5" style={{fontSize: "40px"}}>Technical Skills</h1>
                <div id="dont-know-skill" class="px-5">
                </div>

                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={skill} />
                    </div>
                    <div style={{ width: "100%" }} class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">




                        <section style={{ color: "black" }} id="my-skill" class="section-3">
                            <div style={{transform: "translateX(20%)"}} class="progress-container">
                                HTML
                <div class="progress-bar">
                                    <span class="bar">
                                        <span class="progress"></span>
                                    </span>
                                </div>
                            </div>

                            <div style={{transform: "translateX(30%)"}} class="progress-container">
                                CSS
                <div class="progress-bar">
                                    <span class="bar">
                                        <span class="progress1"></span>
                                    </span>
                                </div>
                            </div>

                            <div style={{transform: "translateX(40%)"}} class="progress-container">
                                Javascript
                <div class="progress-bar">
                                    <span class="bar">
                                        <span class="progress2"></span>
                                    </span>
                                </div>
                            </div>

                            <div style={{transform: "translateX(50%)"}} class="progress-container">
                                Python , Django
                <div class="progress-bar">
                                    <span class="bar">
                                        <span class="progress3"></span>
                                    </span>
                                </div>
                            </div>

                            <div style={{transform: "translateX(60%)"}} class="progress-container">
                                Node.js , React.js
                <div class="progress-bar">
                                    <span class="bar">
                                        <span class="progress4"></span>
                                    </span>
                                </div>
                            </div>


                        </section>




                    </div>
                </div>
            </section>









        </div>
    )
}
