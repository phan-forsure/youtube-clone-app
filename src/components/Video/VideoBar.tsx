import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';
import { apiKey, apiUrl } from '../api.ts';
import { Link, useLocation, useParams } from 'react-router-dom';

async function fetchVideoBar(related: string) {
  const url = `https://youtube-v3-alternative.p.rapidapi.com/related?id=${related}&geo=US&lang=en&maxResults=50`
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

function Videos() {
  const videoId = useParams()
  const location = useLocation()
  const query = useQuery({ queryKey: ['videoBar'], queryFn: () => fetchVideoBar(videoId.videoId)})
  
  useEffect(() => {
    query.refetch()
  }, [location])

  if (query.isFetching) {
    return <p className="text-white m-12">Loading...</p>
  }

  if (query.isError) {
    return <p className="text-white m-12">Error: {query.error.message}</p>
  }

  return (
    query.data?.data.map(video => {
      return (
        <Link replace to={`/video/${video.videoId}`}>
          <li className="p-2 w-full text-white flex relative left-0 hover:left-1 transition-all" key={video.videoId}>
            <img className="h-28 rounded-lg" src={video.thumbnail[1].url} alt='youtube recommendation' />
            <div className='mx-4 my-2'>
              <p className='overflow-hidden'>{video.title}</p>
              <p className='overflow-hidden opacity-60'>{video.channelTitle}</p>
            </div>
          </li>
        </Link>
      )
    })
  )
}

export default function VideoBar() {
  return (
    <section className='video-bar overflow-y-scroll overflow-x-hidden'>
      <ul className="w-full">
        <Videos />
      </ul>
    </section>
  )
}
