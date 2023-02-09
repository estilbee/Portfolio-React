import React from 'react';
//not sure if i need {useState, useEffect} if i'm not using a filter? or do i need a filter?

import ProjectCard from './ProjectCard';
import grrrrinder from '../images/grrrrinder.png'
import Ikebanasquare from '../images/Ikebanasquare.jpg'
import Olivia_Ikebana from '../images/Olivia_Ikebana.jpg'
import fruitfield from '../images/fruitfield.jpg'
import suitcasefloral from '../images/suitcasefloral.jpg'
import mainimage from '../images/mainimage.jpg'


function Projects () {

    const ProjectData = [
        {
          name: "Grrrr'inder",
          image: mainimage,
          description: "A doggie play-date app.",
          link: "https://floating-reef-00120.herokuapp.com/login"
        },
        {
          name: "Weather Dashboard",
          image: Ikebanasquare,
          description: "Find this weeks weather in any given city.",
          link: "https://estilbee.github.io/Weather-Dashboard/"
        },
        {
          name: "Password Generator",
          image: suitcasefloral,
          description: "Generate a secure password.",
          link: "https://estilbee.github.io/Password-Generator/"
        },
        {
          name: "Code Quiz",
          image: fruitfield,
          description: "Test your coding knowledge on a time crunch.",
          link: "https://estilbee.github.io/Code-Quiz/"
        },
        {
          name: "Work Day Scheduler",
          image: Olivia_Ikebana,
          description: "Plan out your work day with this simple calendar app.",
          link: "https://estilbee.github.io/Work-Day-Scheduler/"
        },
        {
          name: "Note Taker",
          image: Olivia_Ikebana,
          description: "Write and save, big thoughts or small.",
          link: "https://estilbee-note-taker.herokuapp.com/"
        },
    ]

    // const [filteredData, setFilter] = useState(ProjectData);

    return (
      
      <div>
        {ProjectData.map(project => {
          return (
            <ProjectCard name = {project.name} image = {project.image} description = {project.description} link = {project.link}></ProjectCard>

          )
        })}
      </div>
    )
}

export default Projects;
