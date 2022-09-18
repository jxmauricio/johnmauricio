import React from 'react'
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Home from '../pages/Home.js'
import Projects from '../pages/Projects.js'
import Experience from '../pages/Experience.js'

import ProjectDisplay from '../pages/ProjectDisplay';
import {AnimatePresence} from 'framer-motion'
function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location = {location} key = {location.pathname}>
            <Route path ="/" element= {<Home/>} />
            <Route path='/projects' element = {<Projects/>}/>
            <Route path ='/projects/:id' element = {<ProjectDisplay/>}/>
            <Route path='/experience' element = {<Experience/>}/>
        </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes