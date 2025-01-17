import React from 'react';
import './About.css';
import Image from '../../assets/image/pradeep.jpg';

const About=()=>
{
    return(
        <>
        <div className="about" id="about">
            <div className="row">
        
                <div className="col-md-6 col-xl-6 col-lg-6 about-img">
            <img src={Image}  alt="profile-pic" />

                </div>
                <div className="col-md-6 aboutme"><h1>About Me</h1>
                <p>
                Hello! I'm Pradeep Sah, a budding web developer eager to start my career in building innovative web
                solutions. I have done My Diploma in I.T from Polytechnic College Dwarahat. I recently graduated with a
                degree in BCA and have spent the last 3 Years honing
                my skills in front-end technologies like HTML, CSS, and JavaScript, as well as learning frameworks like
                React and Node.js.
    
                I am passionate about efficient code and creating websites that are both functional and visually
                appealing. Though I am new to the industry, I am committed to growing my skills and staying up-to-date with
                the latest web development trends.
    
                I am excited to collaborate with others, learn new techniques, and contribute to meaningful projects. Feel
                free to connect with me! and I'm learning backend technologies to broaden my skill set.

                                
                </p></div>
            </div>
        </div>
        </>
    )
}
export default About;