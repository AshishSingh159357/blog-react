import React from 'react';
import './componentCSS/services.css';
export default function Services() {
    return (
        <div>

            <section id="service" style={{paddingBottom: "10%",backgroundColor: "white"}} class="section-5">

                <section class="Moto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="inline-block w-8 h-8 text-gray-500 mb-8"
                        viewBox="0 0 975.036 975.036">
                        <path
                            d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                        </path>
                    </svg>
                    <h1 style={{fontFamily: " 'Roboto', sans-serif",color: "white"}}>Experience is the name everyone gives to their
        mistakes.</h1>

                </section>









                <div class="header">
                    <h5 style={{letterSpacing: "2px",fontWeight: "400",color: "rgb(65, 129, 247)",margin:"1%"}}><b>WHAT I DO</b></h5>
                    <h1 style={{letterSpacing: "2px",fontWeight: "400", fontSize: "40px"}}><b>I’ve got everything you need</b></h1>
                </div>
                <div class="row1-container">
                    <div class="box1 box-down cyan">
                        <h2>Web Development</h2>
                        <p>Monitors activity to identify project roadblocks</p>
                        <img style={{width:"20%"}} src="service_icon/web-programming.svg" alt="" />
                    </div>

                    <div class="box1 red">
                        <h2>Support</h2>
                        <p>Scans our talent network to create the optimal team for your project</p>
                        <img style={{width:"20%"}} src="service_icon/customer-support.svg" alt="" />
                    </div>

                    <div class="box1 box-down blue">
                        <h2>Web Design</h2>
                        <p>Uses data from past projects to provide better delivery estimates</p>
                        <img src="service_icon/web-design.png" alt="" />
                    </div>
                </div>
                <div class="row2-container">
                    <div class="box1 orange">
                        <h2>Deploy</h2>
                        <p>Regularly evaluates our talent to ensure quality</p>
                        <img src="service_icon/startup.png" alt="" />
                    </div>
                </div>



            </section>



        </div>
    )
}
