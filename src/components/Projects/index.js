import React, { useState } from "react";
import ProjectCard from '../ProjectCard';
import Wrapper from "../Wrapper";
import CardDeck from 'react-bootstrap/CardDeck'
import initialProjects from './initialProjects.json';
import './style.css';

const App = () => {
  const [projects, setProjects] = useState(initialProjects)

    return (
      <div className='justify-content-center centered' >
        <Wrapper>
          <h1 className="title">Project List</h1>
          <CardDeck >
              {projects.map(project => 
              <ProjectCard
                  key={project.title}
                  name={project.title}
                  description={project.description}
                  imgSrc={project.imgSrc}
                  repoSrc={project.repoSrc}
                  demoSrc={project.demoSrc}
              />
              )}
          </CardDeck>
        </Wrapper>
      </div>

    );
  
}

export default App;
