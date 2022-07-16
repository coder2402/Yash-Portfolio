import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <MyWork />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;