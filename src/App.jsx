import Intro from "./components/Intro";
import Skillset from "./components/Skillset";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex justify-center bg-primary min-h-screen min-w-screen p-4 text-white ">
      <div className="flex flex-col w-9/12">
        <Intro />
        <Skillset />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
