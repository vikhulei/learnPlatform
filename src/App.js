import './App.css'
import { BodyWrapper } from "./components/ui/StyledComponents"
import Navbar from './components/navbar/Navbar'
import Home from './sections/01_home/Home'
import Overview from "./sections/02_overview/Overview"
import Projects from "./sections/03_projects/Projects"
import WhyReact from "./sections/04_why_react/WhyReact"
import Screeshots from "./sections/05_screenshots/Screenshots"
import KnowledgeBase from "./sections/06_knowledge_base/KnowledgeBase"
import Footer from "./components/footer/Footer"




function App() {
  return (
    <BodyWrapper>
      <Navbar />
      <Home />
      <Overview />
      <Projects />
      <WhyReact />
      <Screeshots />
      <KnowledgeBase />
      <Footer/>
    </BodyWrapper>
  );
}

export default App;
