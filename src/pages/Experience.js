import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"
import '../styles/Experience.css'
import {motion} from 'framer-motion'
function Experience() {
  return (
    <motion.div className = "experience"  inital={{opacity: 0}} animate = {{opacity: 1}} exit ={{opacity:0}}>
        <VerticalTimeline lineColor ="#3e497a">
            <VerticalTimelineElement
             className="vertical-timeline-element--education"
             date = "2015 - 2019" 
             iconStyle = {{background:"#3e497a",color:'#fff'}}
             icon = {<SchoolIcon/>}>
                <h3 className = "vertical-timeline-element-title">
                    Deer Valley Highschool
                </h3>
                <p> High Shcool Diploma</p>

             </VerticalTimelineElement>
             <VerticalTimelineElement
             className="vertical-timeline-element--education"
             date = "2020 - 2023" 
             iconStyle = {{background:"#3e497a",color:'#fff'}}
             icon = {<SchoolIcon/>}>
                <h3 className = "vertical-timeline-element-title">
                    University of California, San Diego
                </h3>
                <p> Bachelors of Science, Data Science</p>

             </VerticalTimelineElement>
             <VerticalTimelineElement
             className="vertical-timeline-element--work"
             date = "June, 2022 - August, 2022" 
             iconStyle = {{background:"gold",color:'#fff'}}
             icon = {<WorkIcon/>}>
                <h3 className = "vertical-timeline-element-title">
                    ID Tech, Course Instructor
                </h3>
                <p>
                    <li>Taught Deep learning,Computer Vision, and Python</li>
                    <li>Managed coursework for each student</li>
                    <li>Developed material to be used in course intruction</li>
                </p>

             </VerticalTimelineElement>
             <VerticalTimelineElement
             className="vertical-timeline-element--work"
             date = "May, 2022 - June, 2022" 
             iconStyle = {{background:"gold",color:'#fff'}}
             icon = {<WorkIcon/>}>
                <h3 className = "vertical-timeline-element-title">
                    UC San Diego, Machine Learning Researcher
                </h3>
                <p>  
                    <li>Developed segmentation models to capture aquatic life using OpenCV and TensorFlow</li>
                    <li>Worked with Scripps Institute Oceanography divers and state-of-the-art camera technology to capture fish biomarkers using computer vision</li>
                    <li>Researched, designed and deployed next generation of architectures, workflows and standards to integrate with key products</li>
                </p>

             </VerticalTimelineElement>
             <VerticalTimelineElement
             className="vertical-timeline-element--work"
             date = "June 2022 - Current" 
             iconStyle = {{background:"gold",color:'#fff'}}
             icon = {<WorkIcon/>}>
                <h3 className = "vertical-timeline-element-title">
                    Data Science Intern
                </h3>
                <p>
                    <li>Developed data visualizations and dashboards using SQL and Meta Base</li>
                    <li>Built out rigorous observability and optimizations across the Symba stack</li>
                    <li>Preprocessed data in python to allow for easy data extraction</li>
                    <li>Helped develop and optimize Symba's relational databases</li>
                    <li>Worked closely with CTO and engineering team to understand how users interact with Symba</li>
                     
                </p>

             </VerticalTimelineElement>
            
        </VerticalTimeline>
    </motion.div>
  );
}

export default Experience