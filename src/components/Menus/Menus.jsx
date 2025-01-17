import React from 'react';
import './Menus.css';
import { FcBiotech, FcBusinessContact, FcHome, FcReadingEbook, FcVideoProjector, FcAbout } from "react-icons/fc";
import {Link} from 'react-scroll';
import image from '../../assets/image/pradeep.jpg';

const Menus = ({ toggle }) => {
    return (

        <>
            {toggle ?
             (<>
              <div className="navbar-profile pic">
            <img src={image}  alt="profile-pic" />
        </div>

        <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link"> <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>< FcHome/>Home</Link></div>
                <div className="nav-link"><Link to="about" spy={true} smooth={true} offset={-100} duration={100}> < FcAbout/>About Us</Link></div>
                <div className="nav-link"><Link to="tech" spy={true} smooth={true} offset={-100} duration={100}> < FcBiotech/>Tech-Stack</Link></div>
                <div className="nav-link"><Link to="Education" spy={true} smooth={true} offset={-100} duration={100}>< FcReadingEbook/> Education</Link></div>
                <div className="nav-link"><Link to="project" spy={true} smooth={true} offset={-100} duration={100}> < FcVideoProjector/>Project</Link></div>
                <div className="nav-link"><Link to="contact" spy={true} smooth={true} offset={-100} duration={100}> < FcBusinessContact/>Contact-Us</Link></div>
            </div>
        </div>
             </>)  :(
          
<div className="nav-items">
            <div className="nav-item">
                <div className="nav-links"> <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>< FcHome/></Link></div>
                <div className="nav-links"><Link to="about" spy={true} smooth={true} offset={-100} duration={100}> < FcAbout/></Link></div>
                <div className="nav-links"><Link to="tech" spy={true} smooth={true} offset={-100} duration={100}> < FcBiotech/></Link></div>
                <div className="nav-links"><Link to="Education" spy={true} smooth={true} offset={-100} duration={100}>< FcReadingEbook/> </Link></div>
                <div className="nav-links"><Link to="project" spy={true} smooth={true} offset={-100} duration={100}> < FcVideoProjector/></Link></div>
                <div className="nav-links"><Link to="contact" spy={true} smooth={true} offset={-100} duration={100}> < FcBusinessContact/></Link></div>
            </div>
        </div>

                
             ) }


            
        </>)
    
}
export default Menus;