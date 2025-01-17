import React from 'react';
import { FaLinkedin ,FaGithub, FaFacebook,FaWhatsapp } from "react-icons/fa";
import './Contact.css';
import image from '../../assets/image/pradeep.jpg';
const Contact = () => {
    return (
        <>
            <div className="container contact" id="contact">
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xL-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <img  className="image" src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/contact-us-1280-x-720-1486069915.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" alt="contact" />
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="card2 d-flex card border-0 px-4 py-5">
        <div className="row">
                                <div className="row head">
                                    
                                
                                <h4 className="mb-4 con">Contact With 
                                <a href="http://www.linkedin.com/in/pradeepsah9761" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin   color=" blue" size="30px" className="ms-5 "/></a>



                                <a href=" https://github.com/PradeepSah9761" target="_blank" rel="noopener noreferrer">

                                <FaGithub  color="black " size="30px"  className="ms-5"/></a>

                                <a href="https://www.facebook.com/prveen.sah.5" target="_blank" rel="noopener noreferrer">
                                <FaFacebook  color="blue " size="30px"  className="ms-5"/> </a>


                                <a href="https://wa.me/+917579498406" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp    color="green " size="30px"  className="ms-5"/></a>
                                </h4>
                                </div>
                            
                            <div className="row px-3 mb-4">
                                <div className="line" />
                                <div className="small or text-center">OR</div>
                                <div className="line" />

                            </div>
                        <form action="#">
                            <div className="row px-3">
                                <input type="text"  name="name" placeholder="Type you name here" className="mb-3"/>
                                </div>
                            <div className="row px-3">

                                <input type="email"  name="email" placeholder="Enter you email here" className="mb-3"/>
                                </div>
                            <div className="row px-3">

                                <textarea type="text-area"  name="msg" placeholder="Write something here" className="mb-3"/>
                                
                                
                            </div>
                            <div className="row px-3">
                                <button className="button" onclick="">SEND MESSAGE</button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </>


    )
}
export default Contact;