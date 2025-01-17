import React from 'react';
import './Home.css' 
import TypeWriter from 'typewriter-effect';
import Resume from '../../assets/docs/pradeepResume.pdf';

const Home=()=>
{
    return(
        <>
        <div className="container-fluid home-container" id="home">
            <div className="container home-content">
                <h2>HI!👋 I </h2>
                <h1>
                <TypeWriter
                    options ={{strings:[
                        " want to become a Web Developer !",
                        "want to change  the world ! "
                        
                    ],
                        autoStart:true,
                        loop:true}
                        
}/>
                </h1>
                <div className="home-buttons">
                    <a className="btn btn-hire" href="http://api.whatsapp.com/send?phone=7579498406"
                    rel="noreferrer"
                    target="_blank">
Hire Me
                    </a>
                    
                    <a className="btn btn-cv" href={Resume} download="pradeepResume.pdf" target="_blank">Download CV</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;