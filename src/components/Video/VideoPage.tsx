import React from 'react'
import Video from './Video'
import VideoBar from './VideoBar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

export default function VideoPage() {
  // const query = useQuery(['videoBar'], () => fetchVideoBar())
  return (
    <>
    <QueryClientProvider client={client}>
      <Video />
      <VideoBar />
    </QueryClientProvider>
    </>
  )
}
