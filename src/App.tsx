import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Videos from './components/Videos'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  const [nav,setNav] = useState(true)

  return (
    <>
     <div className="app grid grid-cols-5">
      <Header nav={nav} setNav={setNav}/>
      <Navbar nav={nav}/>
      <QueryClientProvider client={queryClient}>
        <Videos />
      </QueryClientProvider>
     </div>
    </>
  )
}

export default App
