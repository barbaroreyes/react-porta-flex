import React from 'react'
import work from '../img/work.jpg'

const Name = () => {
  return (
    <div className ='name'>
    <h1>Barbaro Reyes</h1>
    <img className='work' src={work} alt=''/>
    <p className='parraph'><i class="fab fa-html5">
          </i>HTML/CSS<i className=" fab fa-css3-alt">
          </i>|JavaScript<i class="fab fa-node-js">
          </i>|React<i class="fab fa-react"></i>
          </p>
          
         
          <div className='socials-liks'>
           <a className ='link' href="https://www.linkedin.com/in/barbaro-reyes-b023aa1a7/" 
               rel='noopener noreferrer' target='_black'><i 
               className=" fab fa-linkedin"></i></a>
           <a className ='link' href="https://github.com/barbaroreyes" 
              rel='noopener noreferrer'
              target='_black'><i className=" link fab fa-github-square"></i></a>
           <a className ='link'href="http://google.com"
              rel='noopener noreferrer' target='_black'>
             <i className="  fab fa-facebook-square"></i></a>
          </div>
          
          <hr className='line'/>
    </div>
  )
}

export default Name
