import React, { useState, useEffect } from 'react';
//not sure if i need useState or useEffect if i'm not using a filter? or do i need a filter?

import ProjectCard from './ProjectCard';



function Projects () {

    const ProjectData = [
        {
          name: "Leonardo",
          image: "./images/leo.webp",
          description: "Leads.",
          id: "1",
          turtle: true,
          human: false,
          hero: true,
          villain: false
        },

        //array of {objects} will be here 
    ]

    const [filteredData, setFilter] = useState(ProjectData);

    return (
      <div>
        <ProjectCard projects = {ProjectData} ></ProjectCard>
      </div>
    )
}

export default Projects;
