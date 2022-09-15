import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from "@mui/icons-material/Email"
import Github from "@mui/icons-material/GitHub"
import "../styles/Home.css"
function Home() {
  return (
    <div className = 'home'>
        <div className = 'about'>
            <h2>Welcome, My Name is John</h2>
            <div className = "prompt"> 
                <p>
                    A software developer with a passion for creating.
                </p>
                <LinkedInIcon/>
                <EmailIcon/>
                <Github/>
            </div>
        </div>
        <div className = 'skills'>
            <h1>Skills</h1>
            <ol className = "list">
                <li className ='item'>
                    <h2>Front-End</h2>
                    <span>Put SKills here</span>
                </li>
                <li className ='item'>
                    <h2>Back-End</h2>
                    <span>put skills here</span>
                </li>
                <li className ='item'>
                    <h2>Languages</h2>
                    <span>Python, Java, JavaScript, C</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home