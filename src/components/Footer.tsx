import React from 'react'

const Footer = () => {
    const d = new Date();
    const currentYear = d.getFullYear();
  return (
    <div className='text-center'>&copy; {currentYear}</div>
  )
}

export default Footer