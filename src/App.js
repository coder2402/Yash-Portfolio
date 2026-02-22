import { Suspense, lazy } from 'react';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";

// Lazy load heavy components
const MyWork = lazy(() => import("./components/MyWork"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Suspense fallback={<div className="h-screen w-full bg-gray-800 flex justify-center items-center text-white text-2xl">Loading...</div>}>
        <MyWork />
        <Experience />
        <Contact />
      </Suspense>
      <SocialLinks />
    </div>
  );
}

export default App;
