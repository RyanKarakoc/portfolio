import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SocialButtons from "./components/Socials/Buttons";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialButtons />
      <Header />
    </div>
  );
}

export default App;
