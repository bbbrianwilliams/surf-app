import React from 'react'

const Footer = () => {
    const d = new Date();
    const currentYear = d.getFullYear();
  return (
    <div className='text-center h-48 bg-cyan-700 w-full min-h-full'>
      <p>&copy; {currentYear}</p>
    </div>
  )
}

export default Footer