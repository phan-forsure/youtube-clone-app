import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import SearchVideos from './SearchVideos'
// import Navbar from '../Home/Navbar'

const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    }
  })

export default function SearchPage() {
    
  return (
    <QueryClientProvider client={client}>
      <SearchVideos />
    </QueryClientProvider>
  )
}
