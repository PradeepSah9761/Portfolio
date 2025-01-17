import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { 
    
} from "react-icons/io5";

import { LiaSchoolSolid } from "react-icons/lia";
import './Education.css';
import { IoSchool } from "react-icons/io5";

const Education = () => {
    return (
        <>
            <div className="container education" id="Education">
                <div className="col-12 mt-3 mb-1 text-center text-uppercase">
                    <h2>
                        educational report

                    </h2>
                    <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work edu"
                        contentStyle={{ background: '', color: 'black' }}
                        contentArrowStyle={{ borderRight: '37px solid white' }}
                        iconStyle={{ background: '#138781', color: '#fff'  }}
                        // date="2017-2020"
                        icon={<LiaSchoolSolid/>}
                        >
                        <h3 className="vertical-timeline-element-title">Diploma In IT</h3>
                        <h4 className="vertical-timeline-element-subtitle">Government Polytechnic College Dwarahat<br />(2017-2020)</h4>
                        
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work edu"
                        // date="2020-2024"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '37px solid white' }}
                        iconStyle={{ background: '#138781', color: '#fff'  }}
                        icon={<IoSchool/>}
                        >
                        <h3 className="vertical-timeline-element-title">BCA</h3>
                        <h4 className="vertical-timeline-element-subtitle">IGNOU<br/>2020-2024</h4>
                        
                    </VerticalTimelineElement>


                </VerticalTimeline>
                        </div>
            </div>
        </>
    )
}
export default Education;