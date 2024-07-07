import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between m-4 mr-8 ml-8 items-center'>
        <button>
            <i className='fa-solid fa-bars text-white text-2xl'></i>
        </button>
        <div className='text-gray-400 flex flex-wrap items-center w-6/12 justify-center'>
            <input className='bg-main border-1 border-second p-4 w-9/12 h-12 pr-8 rounded-3xl rounded-r-none' type="text" id="" placeholder='Search' />
            <button className='bg-sec border-1 border-second p-4 w-20 h-12 rounded-3xl cursor-pointer rounded-l-none flex justify-center items-center' type="submit" id="" onClick={e => e.preventDefault()}>
              <i className='fa-solid fa-search text-xl'></i>
            </button>
        </div>
        <div className='flex items-center'>
            <i className='fa-solid fa-bell w-10 h-10 text-3xl flex justify-center items-center color-secondary mr-6 cursor-pointer'></i>
            <img className='w-10 h-10 cursor-pointer' src='../public/user-profile-svgrepo-com.svg' alt='profile'/>
        </div>
    </header>
  )
}
