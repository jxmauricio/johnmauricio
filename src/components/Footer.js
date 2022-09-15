import React from 'react'
import TwitterIcon from "@mui/icons-material/Twitter"
import "../styles/Footer.css"
function Footer() {
  return (
    <div className = "footer">
        <div className = 'socialMedia'>
            <TwitterIcon/>
        </div>
        <p>&copy; 2022 johnmauricio.com</p>
    </div>
  )
}

export default Footer