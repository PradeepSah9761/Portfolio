import React from 'react';
import TechstackList from './../../utils/TechstackList.jsx';
import './Techstack.css';
function Techstack() {
    return (
        <>

            <div className="container techstack" id="tech">
                <h2 className="col-12 mt-3 mb-1 text-center">Technology Stack</h2>
                <hr />
                <p className="pb-3  text-center">👍 Including programming language ,framworks,databases , front-end and back-end tools and API's</p>
            <div className="row">
                {TechstackList.map((tech)=>
                (
                   <div key={tech._id} className="col-md-3">
                    <div className="card m-2">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex justify-content-center">
                                    <div className="align-self-center">
                                    <tech.icon className="tech-icon"/>

                                    </div>
                                    <div className="media-body"><h5>
                                        </h5>{tech.name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                ))}
            </div>
            
            
            
            </div>
        </>
    )
}
export default Techstack;