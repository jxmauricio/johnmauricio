import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from "@mui/icons-material/Email"
import Github from "@mui/icons-material/GitHub"
import "../styles/Home.css"
import Typewriter from "typewriter-effect"
import {motion} from 'framer-motion'
function Home() {
  return (
    <motion.div className = 'home' inital={{opacity: 0}} animate = {{opacity: 1}} exit ={{opacity:0}}>
        <div className = 'about'>
            <h2>
                <Typewriter className = "welcome" onInit = {(typewriter) => {
                typewriter.typeString("Welcome, My Name is John").start()
                }}
                />
            </h2>
            <div className = "prompt"> 
                <p>
                    A software developer with a passion for creating.
                </p>
                <a href = 'https://www.linkedin.com/in/john-mauricio-b427a4216/' target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                <a href = "mailto:jxmauric@ucsd.edu" target="_blank" rel="noreferrer"><EmailIcon/></a>
                <a href = "https://github.com/jxmauricio" target="_blank" rel="noreferrer"><Github/></a>
            </div>
        </div>
        <div className = 'skills'>
            <h1>Skills</h1>
            <ol className = "list">
                <li className ='item'>
                    <h2>Front-End</h2>
                    <span>React, HTML, CSS, JavaScript, AJAX, Version Control </span>
                </li>
                <li className ='item'>
                    <h2>Data Science</h2>
                    <span>Tensorflow, Keras, Numpy, Sci-kit Learn, Pandas, PostgreSQL</span>
                </li>
                <li className ='item'>
                    <h2>Languages</h2>
                    <span>Python, Java, JavaScript, C</span>
                </li>
            </ol>
        </div>
    </motion.div>
  )
}

export default Home