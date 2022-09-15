import React from 'react'
import {useParams} from 'react-router-dom'; 
import {projectList} from '../helpers/ProjectList.js'
import GithubIcon from '@mui/icons-material/GitHub'
import '../styles/ProjectDisplay.css'
function ProjectDisplay() {
    const {id} = useParams();
    console.log('hello')
    const project = projectList[id]
  return (
    <div className = 'project'>
        <h1> {project.name}</h1>
        <img src = {project.image} alt = 'MY PROJECT'/>
        <p>
            <b>Skills: </b>{project.skills}
        </p>
        <GithubIcon/>
    </div>
  )
}

export default ProjectDisplay