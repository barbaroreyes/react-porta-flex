import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
const Navigation = () => {
    const [modalOpen,setModalOpen] = useState(false)
  return (
    <div className = 'Nav'>
        <button onClick ={()=> setModalOpen(true)}>Navigation</button>
        <Modal className='modal' isOpen={modalOpen}>
        <Link to ='/'>Home</Link>
     <Link to ='/'>About</Link>
     <Link to ='/'>Portafolio</Link>
     <Link to ='/'>Contact</Link>
     <button onClick ={()=> setModalOpen(false)}>Close</button>
        </Modal>
    
    </div>
  )
}

export default Navigation
