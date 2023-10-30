import './App.css';
import { BodyWrapper, NavbarWrapper, MainWrapper } from "./components/ui/StyledComponents"
import Navbar from './components/navbar/Navbar';
import Home from './apps/pages/01_home/Home';



function App() {
  return (
    <BodyWrapper>
      <Navbar />
      <Home />
    </BodyWrapper>

  );
}

export default App;
