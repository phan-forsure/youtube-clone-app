import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import VideoPage from './components/Video/VideoPage'

const queryClient = new QueryClient()

function App() {
  const [nav,setNav] = useState(true)

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
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage nav={nav} />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
        </Routes>
      </QueryClientProvider>
     </div>
    </>
  )
}

export default App
