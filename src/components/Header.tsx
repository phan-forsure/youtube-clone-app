import React from 'react'

export default function Header({ nav, setNav }) {
  return (
    <header className='flex justify-between m-4 mr-8 ml-8 items-center h-fit'>
        <button onClick={() => setNav(!nav)} className='hover:bg-light w-12 h-12 rounded-full'>
            <i className='fa-solid fa-bars text-white text-2xl'></i>
        </button>
        <div className='text-gray-400 flex flex-wrap items-center w-6/12 justify-center'>
            <input className='bg-main border-1 border-second p-4 w-9/12 h-12 pr-8 rounded-3xl rounded-r-none focus:outline-none focus:border-blue-900' type="text" id="" placeholder='Search' />
            <button className='bg-sec border-1 border-second p-3 w-20 h-12 rounded-3xl cursor-pointer rounded-l-none flex justify-center items-center' type="submit" id="" title='Search' onClick={e => e.preventDefault()}>
              <i className='fa-solid fa-search text-xl mr-2'></i>
            </button>
        </div>
        <div className='flex items-center'>
            <i className='fa-solid fa-bell text-3xl flex justify-center items-center text-white mr-6 cursor-pointer hover:bg-light w-12 h-12 rounded-full'></i>
            <img className='w-10 h-10 cursor-pointer' src='../public/user-profile-svgrepo-com.svg' alt='profile'/>
        </div>
    </header>
  )
}
