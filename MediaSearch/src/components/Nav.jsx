import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
         <div className='p-5 bg-gray-800 text-xl font-semibold flex justify-between items-center'>
                <h2 className='font-medium text-2xl'>MediaSearch</h2>
            <div className='flex gap-5 text-sm'>
                <Link className='text-sm rounded-md bg-blue-700 px-4 py-2' to='/'>Search</Link>
                <Link className='text-sm rounded-md bg-blue-700 px-4 py-2' to='/collection'>Collection</Link>
                 </div>
            </div>
    </div>
  )
}

export default Nav