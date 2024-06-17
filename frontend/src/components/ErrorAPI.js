import React from 'react'

const ErrorAPI = () => {
  return (
    <div className='flex justify-center items-center h-screen p-2 text-center'>
        <div className='flex border-2 p-5 rounded-lg border-orange-500'>
        <p className='font-Montserrat'>Oops! Something went wrong while fetching the data. Please refresh the page or try again later.</p>
        </div>
    </div>
  )
}

export default ErrorAPI