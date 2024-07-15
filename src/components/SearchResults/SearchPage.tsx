import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SearchVideos from './SearchVideos'

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
