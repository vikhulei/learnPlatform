import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { BodyWrapper } from "./components/ui/StyledComponents"
import Navbar from './components/navbar/Navbar';
import Home from './sections/01_home/Home';
import About from './old/02_about/About';
import Contacts from './old/03_contacts/Contacts';
import Footer from './components/footer/Footer';



function App() {
  return (
    <BodyWrapper>
      <Navbar />
      <Home />
      {/* <Footer/> */}
    </BodyWrapper>
  );
}

export default App;
