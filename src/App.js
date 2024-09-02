import ProfessionalJourneyContainer from "./components/Office/ProfessionalJourneyContainer";
import Awards from "./components/awards/Awards";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ProjectContainer from "./components/personalProjects/ProjectContainer";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <Header />
      <Home />
      <ProfessionalJourneyContainer />
      <Skills />
      <ProjectContainer />
      <Awards />
      <Contact />
    </div>
  );
}

export default App;
