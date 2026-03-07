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
    <div id={id} ref={sectionRef}>
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
