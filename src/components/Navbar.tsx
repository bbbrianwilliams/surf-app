import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='bg-stone-300 flex justify-center'>
        <Link className='mr-10' to='/'>Home</Link>
        <Link className='mr-10' to='about'>About</Link>
        <Link className='mr-10' to='contact'>Contact</Link>
    </nav>
  )
}

export default Navbar