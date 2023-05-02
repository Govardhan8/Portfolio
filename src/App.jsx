import Intro from "./components/Intro";
import Skillset from "./components/Skillset";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-primary h-screen w-screen">
      <Intro />
      <Skillset />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
