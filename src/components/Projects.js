import React from 'react'
import Do from '../img/do.png'
import Robot from '../img/robots.png'
import Media from '../img/Media_player.png'
import Beers from '../img/app-store-beers.png'
const Projects = () => {
  return (
    <div className='projects'>
        <div className='project shadow-5 grow'>
        <h3><a href='https://barbaro-store-beers.netlify.app/'>App</a></h3>
            <h3><a href='https://github.com/barbaroreyes/app-store-beers'>Github</a></h3>
            <h3>App Store Beers</h3>
        <img className='pictures' src={Beers} alt="Project"/>
        </div>
        <div className='project shadow-5 grow'>
        <h3><a href='https://main.d1t4o2etqu2abr.amplifyapp.com/'>App</a></h3>
            <h3><a href=''>Github</a></h3>
            <h3>name</h3>
        <img className='pictures ' src={Robot} alt="Project"/>
        </div>
        <div className='project shadow-5 grow'>
        <h3><a href='https://main.d1t4o2etqu2abr.amplifyapp.com/'>App</a></h3>
            <h3><a href='https://github.com/barbaroreyes/app-m-player/tree/main'>Github</a></h3>
            <h3>Media-Player_App</h3>
        <img className='pictures' src={Media} alt="Project"/>
        </div>
        <div className='project shadow-5 grow'>
        <h3><a href='https://main.d20zwbvpcwy8fb.amplifyapp.com/'>App</a></h3>
            <h3><a href='https://github.com/barbaroreyes/dogs-app-frontend'>Github</a></h3>
            <h3>Pets-Pictures</h3>
        <img className='pictures' src={Do} alt="Project"/>
        </div>
    </div>
  )
}

export default Projects
