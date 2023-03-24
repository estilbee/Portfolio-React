import React from 'react';
//not sure if i need {useState, useEffect} if i'm not using a filter? or do i need a filter?

import ProjectCard from './ProjectCard';
import grrrrinder2 from '../images/grrrrinder2.png'
import Ikebanasquare from '../images/Ikebanasquare.jpg'
import Olivia_Ikebana from '../images/Olivia_Ikebana.jpg'
import Ikebana3 from '../images/Ikebana3.jpg'
import fruitfield from '../images/fruitfield.jpg'
import suitcasefloral from '../images/suitcasefloral.jpg'
import mainimage from '../images/mainimage.jpg'
import weather from '../images/weather.png'
import pword from '../images/pword.png'
import codequiz from '../images/codequiz.png'
import workday from '../images/workday.png'
import notetaker from '../images/notetaker.png'

function Projects () {

    const ProjectData = [
        {
          name: "Grrrr'inder",
          image: mainimage,
          image2: grrrrinder2,
          description: "A doggie play-date app.",
          link: "https://grrrrinder2.herokuapp.com/"
        },
        {
          name: "Weather Dashboard",
          image: Ikebanasquare,
          image2: weather,
          description: "Find this weeks weather in any given city.",
          link: "https://estilbee.github.io/Weather-Dashboard/"
        },
        {
          name: "Password Generator",
          image: suitcasefloral,
          image2: pword,
          description: "Generate a secure password.",
          link: "https://estilbee.github.io/Password-Generator/"
        },
        {
          name: "Code Quiz",
          image: fruitfield,
          image2: codequiz,
          description: "Test your coding knowledge on a time crunch.",
          link: "https://estilbee.github.io/Code-Quiz/"
        },
        {
          name: "Work Day Scheduler",
          image: Olivia_Ikebana,
          image2: workday,
          description: "Plan out your work day with this simple calendar app.",
          link: "https://estilbee.github.io/Work-Day-Scheduler/"
        },
        {
          name: "Note Taker",
          image: Ikebana3,
          image2: notetaker,
          description: "Write and save, big thoughts or small.",
          link: "https://estilbee-note-taker.herokuapp.com/"
        },
    ]

    // const [filteredData, setFilter] = useState(ProjectData);
    const imageSize = {
      maxWidth: '35rem',
      width: '35rem',
    }
    return (
      
      <div className= "card-flex" style = {{justifyContent:"center"}}>

        {ProjectData.map(project => {
          return (
            <div className="col-6 align-items-stretch" style={imageSize} key={project.name}>
            <ProjectCard name = {project.name} imageSize={imageSize} image = {project.image} image2 = {project.image2} description = {project.description} link = {project.link}></ProjectCard>
            </div>
          )
        })}
      </div>
    )
}

export default Projects;
