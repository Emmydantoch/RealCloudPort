import React from 'react';
import { ProjectsProvider } from './hooks/useProjects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <ProjectsProvider>
      <div className="bg-zinc-950 text-zinc-100 dark">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </ProjectsProvider>
  );
}

export default App;
