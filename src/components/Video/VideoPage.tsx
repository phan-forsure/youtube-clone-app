import Video from './Video'
import VideoBar from './VideoBar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  }
})


export default function VideoPage() {
  return (
    <QueryClientProvider client={client}>
      <Video />
      <VideoBar />
    </QueryClientProvider>
  )
}
