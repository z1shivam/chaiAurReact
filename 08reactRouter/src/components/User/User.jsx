import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-gray-800 text-white p-4 text-2xl'>User: {userid} </div>
  )
}

export default User