import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { BodyWrapper } from "./components/ui/StyledComponents"
import Navbar from './components/navbar/Navbar';
import Home from './pages/01_home/Home';
import About from './pages/02_about/About';
import Contacts from './pages/03_contacts/Contacts';
import Footer from './components/footer/Footer';



function App() {
  return (
    <BodyWrapper>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer/>
      </Router>
    </BodyWrapper>
  );
}

export default App;
