import React from 'react';
import logo1 from '../../images/images.jpg'
import './About.css'
const About = () => {
    return (
        <div className="backgroundClr">
            <div className="container pt-5 pb-5 mx-auto">
                <div>
                    <h1> We will provide free online courses to <br /> achieve your goals</h1>
                    <p>Looking to add new skills? Is there a hobby you’ve wanted to try? We’re Udemy, a leading destination for learning and teaching online.</p>
                    <p>
                        If you’re new to online learning and not sure where to start, you’re not alone. We’ve curated a free collection of courses for professionals. Take one of these courses and learn new skills (on us).</p>
                </div>
                <div className="d-flex pt-5 justify-content-between">
                    <div><img src={logo1} alt="Skills" style={{ width: '350px', height: '300px' }}></img></div>
                    <div className="text-left mx-auto px-5">
                        <h2>Skills that you suit</h2>
                        <p>Learn valuable, practical skills from free online video courses. Explore tech essentials and keep pace with change. Become more focused and productive. Top it off with courses that round out your skills and enrich your day to day.</p>
                        <h4>* Essential Tech Skills </h4>
                        <h4>* Productivity and Professional Skills </h4>
                        <h4>* Soft skills</h4>
                        <h4>* Problem solving </h4>
                        <h4>* Leadership</h4>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;