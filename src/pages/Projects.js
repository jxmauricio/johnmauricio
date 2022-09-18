import React from 'react'
import ProjectItem from '../components/ProjectItem.js'
import {projectList} from "../helpers/ProjectList.js"
import '../styles/Project.css'
import {motion} from 'framer-motion'
function Projects() {
  return (
    <motion.div className ='projects' inital={{opacity: 0}} animate = {{opacity: 1}} exit ={{opacity:0}}>
        <h1>My Personal Projects</h1>
        <div className = "projectList">
            {projectList.map((project, idx)=>{
                return <ProjectItem id = {idx} name = {project.name} image= {project.image} />
            })}
        </div>
    </motion.div>
  )
}

export default Projects