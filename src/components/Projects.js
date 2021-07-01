import React from 'react'
import Do from '../img/do.png'
import Robot from '../img/robots.png'
import Media from '../img/Media_player.png'
import Ecomerce from '../img/ecomerce.png'
const Projects = () => {
  return (
    <div className='projects'>
        <div className='project shadow-5 grow'>
            <h3>App</h3>
            <h3>Github</h3>
            <h3>name</h3>
        <img className='pictures' src={Ecomerce} alt="Project"/>
        </div>
        <div className='project shadow-5 grow'>
        <h3>App</h3>
            <h3>Github</h3>
            <h3>name</h3>
        <img className='pictures ' src={Robot} alt="Project"/>
        </div>
        <div className='project shadow-5 grow'>
        <h3>App</h3>
            <h3>Github</h3>
            <h3>name</h3>
        <img className='pictures' src={Media} alt="Project"/>
        </div>
        <div className='project shadow-5 grow'>
        <h3>App</h3>
            <h3>Github</h3>
            <h3>name</h3>
        <img className='pictures' src={Do} alt="Project"/>
        </div>
    </div>
  )
}

export default Projects
