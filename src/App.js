import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";

// Lazy load heavy components to improve initial load time
const MyWork = lazy(() => import("./components/MyWork"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

// OPTIMIZATION: IntersectionObserver-based LazySection wrapper component
// Defers loading the React.lazy chunk until the section is scrolled into view (or close to it)
// It also applies the `id` to the persistent wrapper, preventing the anchor target from missing if hash navigation happens before chunk loads
const LazySection = ({ id, children, fallbackText }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      {
        rootMargin: '200px', // Start loading when within 200px of viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id={id} ref={sectionRef} tabIndex={-1} className="focus:outline-none">
      {isVisible ? (
        <Suspense fallback={<div className="h-screen w-full bg-gray-800 flex justify-center items-center text-white text-3xl">{fallbackText}</div>}>
          {children}
        </Suspense>
      ) : (
        // Placeholder with the same background to avoid visual jarring, keeping height empty but present
        <div className="h-screen w-full bg-gray-800" />
      )}
    </div>
  );
};

function App() {
  return (
    <div>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800"
      >
        Skip to main content
      </a>
      <NavBar />
      <Home />
      <About />
      <LazySection id="myWork" fallbackText="Loading My Work...">
        <MyWork />
      </LazySection>
      <LazySection id="experience" fallbackText="Loading Experience...">
        <Experience />
      </LazySection>
      <LazySection id="contact" fallbackText="Loading Contact...">
        <Contact />
      </LazySection>
      <SocialLinks />
    </div>
  );
}

export default App;
