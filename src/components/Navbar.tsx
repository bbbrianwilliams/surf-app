import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    
      <nav className='bg-stone-300 flex justify-center h-11 text-center'>
        <Link className='p-2 h-auto hover:bg-blue-200 ease-in-out' to='/'>Home</Link>
        <Link className='p-2 h-auto hover:bg-blue-200 ease-in-out' to='about'>About</Link>
        <Link className='p-2 h-auto hover:bg-blue-200 ease-in-out' to='contact'>Contact</Link>
    </nav>
    
    
  )
}

export default Navbar