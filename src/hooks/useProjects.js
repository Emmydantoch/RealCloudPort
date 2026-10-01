import React, { createContext, useContext, useState, useEffect } from 'react';
import { getProjects } from '../utils/projectsApi';

const modeNames = ["Product Design", "Full-stack Development", "Digital Marketing", "Graphics"];
const categories = ["product_design", "full_stack_development", "digital_marketing", "graphics"];
const ProjectsContext = createContext(null);

export const ProjectsProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState(0);
  const [projects, setProjects] = useState({
    0: [],
    1: [],
    2: [],
    3: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const projects = await getProjects();
        const allProjects = Object.fromEntries(
          categories.map((category, mode) => [
            mode,
            projects.filter((project) => project.category === category)
          ])
        );
        setProjects(allProjects);
      } catch (error) {
        console.error('Error loading projects from Django:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const switchMode = (mode) => {
    setCurrentMode(mode);
  };

  const value = {
    currentMode,
    projects,
    modeNames,
    switchMode,
    loading,
    currentProjects: projects[currentMode] || []
  };

  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};
