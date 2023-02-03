import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <div>
        <div className='flex items-center border-[1px] px-2 border-black rounded-md
        '>
            <input type="text" placeholder='Search here...' className='py-2 w-full bg-transparent text-[.9rem] outline-none'/>
            <BiSearch className='text-lg'/>
        </div>
    </div>
  )
}

export default Search