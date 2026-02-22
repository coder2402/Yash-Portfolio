import React, { Suspense, lazy } from 'react';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Contact from "./components/Contact";

// Lazy load heavy components to improve initial load time
const MyWork = lazy(() => import("./components/MyWork"));
const Experience = lazy(() => import("./components/Experience"));

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Suspense fallback={<div className="h-screen w-full bg-gray-800 flex justify-center items-center text-white text-3xl">Loading My Work...</div>}>
        <MyWork />
      </Suspense>
      <Suspense fallback={<div className="h-screen w-full bg-gray-800 flex justify-center items-center text-white text-3xl">Loading Experience...</div>}>
        <Experience />
      </Suspense>
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
