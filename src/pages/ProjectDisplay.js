import React from 'react'
import {useParams} from 'react-router-dom'; 
import {projectList} from '../helpers/ProjectList.js'
import GithubIcon from '@mui/icons-material/GitHub'
import '../styles/ProjectDisplay.css'
import {motion} from 'framer-motion'
function ProjectDisplay() {
    const {id} = useParams();
    console.log('hello')
    const project = projectList[id]
  return (
    <motion.div className = 'project'  inital={{opacity: 0}} animate = {{opacity: 1}} exit ={{opacity:0}}>
        <h1> {project.name}</h1>
        <img src = {project.image} alt = 'MY PROJECT'/>
        <p>
            <b>Skills: </b>{project.skills}
        </p>
        <a href = {project.gh}><GithubIcon/></a>
        
    </motion.div>
  )
}

export default ProjectDisplay