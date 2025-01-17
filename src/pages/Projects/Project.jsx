import React from 'react';
import './Project.css';
import chat from './../../assets/image/chat.jpg';
import portfolio from './../../assets/image/portfolio.jpg';
import hotel from './../../assets/image/hotel.webp';



const Projects = () => {
    return (
        <>
            <div className="container project" id="project">

                <h2 className="col-12 mt-3 mb-1 text-center">MY PROJECT</h2>
                <hr />
                <h4 className="pb-3  text-center ">👍Here are my some proect wtih link and source code </h4>
                <div className="row" id="ads">
                    <div className="col-md-4">

                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full Stack </span>
                                <img src={hotel} alt="project1" />
                            </div>
                            <div className="card-image-overly m-auto">
                                <span className="card-detail-badge">Php</span>
                                <span className="card-detail-badge">HTML</span>
                                <span className="card-detail-badge">CSS</span>
                                {/* <span className="card-detail-badge"></span> */}
                            </div>
                            <div className="card-body">
                                <div className="ad-title ">
                                    <h5 className="text-uppercase">Hotel Management Website </h5>

                                </div>
                                <a className="ad-btn" href="https://github.com/PradeepSah9761">View</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full Stack </span>
                                <img src={chat} alt="project1" />
                            </div>
                            <div className="card-image-overly m-auto">
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">Javascript</span>
                                <span className="card-detail-badge">HTML/CSS</span>
                            </div>
                            <div className="card-body">
                                <div className="ad-title ">
                                    <h5 className="text-uppercase">Real Time Chat Application </h5>

                                </div>
                                <a className="ad-btn" href="https://github.com/PradeepSah9761">View</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Front-End</span>
                                <img src= {portfolio} alt="project1" />
                            </div>
                            <div className="card-image-overly m-auto">
                                
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">React</span>
                            </div>
                            <div className="card-body">
                                <div className="ad-title ">
                                    <h5 className="text-uppercase"> Responsive Portfolio Website </h5>

                                </div>
                                <a className="ad-btn" href="https://pradeepsahportfolio.netlify.app/">View</a>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>

        </>
    )
}
export default Projects;
