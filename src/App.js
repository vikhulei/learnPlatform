import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { BodyWrapper, NavbarWrapper, MainWrapper } from "./components/ui/StyledComponents"
import Navbar from './components/navbar/Navbar';
import Home from './apps/pages/01_home/Home';
import About from './apps/pages/02_about/About';



function App() {
  return (
    <BodyWrapper>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      </Router>
    </BodyWrapper>
  );
}

export default App;
