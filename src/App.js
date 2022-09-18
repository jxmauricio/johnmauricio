
import './App.css';
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import Experience from './pages/Experience.js'
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import ProjectDisplay from './pages/ProjectDisplay';
import AnimatedRoutes from './components/AnimatedRoutes';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <AnimatedRoutes/>
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
