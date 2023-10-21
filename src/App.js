import './App.css';
import { BodyWrapper, MainWrapper } from "./components/ui/StyledComponents"
import Navbar from './components/navbar/Navbar';
import Calculator from './apps/calculator/Calculator';



function App() {
  return (
    <BodyWrapper>
      <Navbar />
      <MainWrapper>
        <Calculator />
      </MainWrapper>
    </BodyWrapper>

  );
}

export default App;
