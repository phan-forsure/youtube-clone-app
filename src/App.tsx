import React, { useState, useEffect, createContext } from 'react'
import Header from './components/Header'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import VideoPage from './components/Video/VideoPage'
import NotFound from './components/NotFound'
import { useQuery } from '@tanstack/react-query';
import { apiKey, apiUrl } from './components/api'

export const queryContext = createContext(null)

function App() {
  const [nav,setNav] = useState(true)
  const path = useLocation().pathname
  const query = useQuery({ queryKey: ['vidoes'], queryFn: () => fetchVideo() })

  async function fetchVideo() {
      const url = `https://youtube-v3-alternative.p.rapidapi.com/${path.slice(1).toLowerCase() === 'music' ||
            path.toLowerCase() === 'movies' ||
            path.slice(1).toLowerCase() === 'games' || 
            path === '/' || 
            path.slice(1).toLowerCase() === 'home' ||
            path.slice(1).toLowerCase() === 'popular' ? `trending?${path.slice(1).toLowerCase() !== '' ? `type=${path.slice(1).toLowerCase()}` : ''}` : `search?query=${path.slice(1).toLowerCase()}`}&geo=US&lang=en&maxResults=50`
      const options = {
      method: 'GET',
      headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': apiUrl
          }
      };

      const response = await fetch(url, options)
      return response.json()
  }

  useEffect(() => {
    if (!nav) {
      document.querySelector('.app').classList.add("not-nav")
    } else {
      document.querySelector('.app').classList.remove("not-nav")
    }
  },[nav])

  return (
    <>
     <div className="app grid grid-cols-10">
      <Header nav={nav} setNav={setNav}/>
        <queryContext.Provider value={query}>
          <Routes>
            <Route path="/" element={<HomePage nav={nav}/>} />
            <Route path="/video/:videoId" element={<VideoPage />} />
            <Route path="/:category" element={<HomePage nav={nav} />} />
            <Route path="/video/undefined" element={<NotFound />} />
          </Routes>
        </queryContext.Provider>
     </div>
    </>
  )
}

export default App
