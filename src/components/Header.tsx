import { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header({ nav, setNav }) {
  const path = useLocation()
  const searchQuery = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useState('')

  return (
    <header className='flex justify-between p-4 items-center h-fit sticky top-0 z-10 bg-main'>
      <div className='flex items-center text-white'>
        {path.pathname.slice(0, 6) !== '/video' &&  
        <button onClick={() => setNav(!nav)} className='nav-btn hover:bg-light mx-4 w-12 h-12 rounded-full'>
            <i className={`fa-solid fa-bars text-white text-2xl ${nav ? "" : "rotate-90"} transition-all`}></i>
        </button>}
        <Link to={'/'} className='home-button'>
          <img className='ml-2 w-24 h-fit' src="/yt-logo.d6505fbc930734374cea.png" alt="Youtube" />
        </Link>
      </div>
        <div className='search-comp text-gray-400 flex flex-wrap items-center w-6/12 justify-center'>
            <input ref={searchQuery} onChange={() => setSearch(searchQuery.current.value)} className='search-bar bg-main border-1 border-second p-4 w-9/12 h-12 pr-8 rounded-3xl rounded-r-none focus:outline-none focus:border-blue-900' type="text" id="" placeholder='Search' />
            <Link to={`/searchResults/${search}`} className='search-button bg-sec border-1 border-second p-3 w-20 h-12 rounded-3xl cursor-pointer rounded-l-none flex justify-center items-center' title='Search'>
              <i className='fa-solid fa-search text-xl mr-2'></i>
            </Link>
        </div>
        <div className='flex items-center'>
            <i className='notification fa-solid fa-bell text-2xl flex justify-center items-center text-white mr-2 cursor-pointer hover:bg-light w-12 h-12 rounded-full'></i>
            <img className='w-10 h-10 cursor-pointer' src='/user-profile-svgrepo-com.svg' alt='profile'/>
        </div>
    </header>
  )
}
