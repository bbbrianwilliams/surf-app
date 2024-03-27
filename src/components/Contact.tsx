import React, { ChangeEvent, useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ firstname: "", lastName: "", email: "" })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData(previousFormData => {
      return {
        ...previousFormData,
        [e.target.name]: e.target.value
      }
    })
  }
  return (
    <div className='flex justify-center bg-gradient-to-t from-sky-900 via-cyan-900 to-teal-900'>
      
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-24 mt-24 w-full max-w-sm'>
      <div className='md:flex md:items-center mb-6'>
        <div className='md:w-1/3'>
          <label className='block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor="firstName">
            First Name
          </label>
        </div>
        <div className='md:w-2/3'>
          <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-400' type="text" name='firstName' id='firstName' />
        </div>
      </div>
      <div className='md:flex md:items-center mb-6'>
        <div className='md:w-1/3'>
          <label className='block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor="lastName">
            Last Name
          </label>
        </div>
        <div className='md:w-2/3'>
          <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-400' type="text" name='lastName' id='lastName' />
        </div>
      </div>
      <div className='md:flex md:items-center mb-6'>
        <div className='md:w-1/3'></div>
        <div className='md:w-2/3'>
          <label className='md:w-2/3 block text-gray-500 font-bold'>
            <input className='mr-2 leading-tight' type="checkbox" name="signUp" id="signUp" />
            <span className='text-sm'>Sign up for our newsletter!</span>
          </label>
        </div>
      </div>
      <div className='md:flex md:items-center'>
        <div className='md:w-1/3'></div>
        <div className='md:w-2/3'>
          <button type='button' className='shadow bg-teal-400 hover:bg-teal-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'>
            Submit
          </button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default Contact