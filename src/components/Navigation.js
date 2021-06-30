import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
const Navigation = () => {
    const [modalOpen,setModalOpen] = useState(false)
  return (
    <div className = 'Nav'>
        <button onClick ={()=> setModalOpen(true)}>Navigation</button>
        <Modal className='modal' isOpen={modalOpen}>
        <ul>
      <a href="#home">Home</a>
      <a href="https://barbaroreyes.github.io/First-Responsive-WebsiteBarbaro/">About</a>
      <a href="https://barbaroreyes.github.io/tablas/">Portfolio</a>
      <a href="#Ch">Contact</a>
      </ul>
     <button onClick ={()=> setModalOpen(false)}>Close</button>
        </Modal>
    
    </div>
  )
}

export default Navigation
