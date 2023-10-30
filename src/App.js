import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { BodyWrapper, NavbarWrapper, MainWrapper } from "./components/ui/StyledComponents"
import Navbar from './components/navbar/Navbar';
import Home from './apps/pages/01_home/Home';



function App() {
  return (
    <BodyWrapper>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
      </Routes>
      </Router>
    </BodyWrapper>

  );
}

export default App;
