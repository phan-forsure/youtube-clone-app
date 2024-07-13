import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { queryContext } from '../../App'
import { useQuery } from '@tanstack/react-query'
import { apiKey, apiUrl } from '../api'

async function fetchDetails(related: string) {
  const url = `https://youtube-v31.p.rapidapi.com/video?part=contentDetails%2Csnippet%2Cstatistics&id=${related}`
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

export default function Video() {
  const query = useContext(queryContext)
  const videoId = useParams().videoId
  const location = useLocation()
  const queryData = useQuery({queryKey: ['videoDetails'], queryFn: () => fetchDetails(videoId)})

  useEffect(() => {
    queryData.refetch()
  }, [location])

  if (query.isFetching) {
    return <p className="text-white m-12">Loading...</p>
  }

  return (
    <section className="video m-8 mx-auto flex flex-wrap">
      <iframe className='w-full h-full' src={"https://www.youtube.com/embed/" + videoId}></iframe>
      <div className='flex flex-wrap w-6/12 mt-4'>
        <h2 className='text-white w-full'>{queryData.data?.title}</h2> 
        <h2 className='text-white w-full'>{queryData.data?.channelTitle}</h2>         
      </div>
      <div className='flex flex-wrap w-6/12 mt-4'> 
        <p className='text-white w-full text-end opacity-65'>{queryData.data?.viewCount + ' views'}</p>
      </div>
    </section>
  )
}
