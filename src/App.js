
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
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
