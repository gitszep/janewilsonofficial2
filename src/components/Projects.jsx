import React, { useState, useEffect } from 'react';
import { projectsData } from '../data'; // Make sure this is the correct import path
import { projectsNav } from '../data';  // Make sure this is the correct import path
import Project from './Project';

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);  // Load all projects if 'all' is selected
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);  // Filter projects by category
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);  // Track the active navigation item
  };

  return (
    <div>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((item, index) => (
            <li
              key={index}
              onClick={(e) => handleClick(e, index)}
              className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Render projects */}
      <div className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {projects.map((project) => (
          <Project key={project.id} item={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
