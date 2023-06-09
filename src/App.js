import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import SocialButtons from "./components/Socials/Buttons";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialButtons />
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
