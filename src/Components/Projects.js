import React from 'react';
//not sure if i need {useState, useEffect} if i'm not using a filter? or do i need a filter?

import ProjectCard from './ProjectCard';
import grrrrinder from '../images/grrrrinder.png'


function Projects () {

    const ProjectData = [
        {
          name: "Grrrr'inder",
          image: grrrrinder,
          description: "A doggie dating app",
          link: "https://floating-reef-00120.herokuapp.com/login"
        },

        //array of {objects} will be here 
    ]

    // const [filteredData, setFilter] = useState(ProjectData);

    return (
      
      <div>
        {/* <Card name={ProjectData.name} image={ProjectData.image} description={ProjectData.description} /> */}
        {/* why is this breaking too??^^ */}
        {ProjectData.map(project => {
          return (
            <ProjectCard name = {project.name} image = {project.image} description = {project.description} link = {project.link}></ProjectCard>

          )
        })}
      </div>
    )
}

export default Projects;
