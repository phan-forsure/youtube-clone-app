import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { apiKey, apiUrl } from '../api';
import { Link, useLocation } from 'react-router-dom';

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
  const videoId = useLocation()
  const query = useQuery({ queryKey: ['videoBar'], queryFn: () => fetchVideoBar(videoId.pathname.slice(7))})

  console.log(query.data)

  return (
    query.data?.data.map(video => {
      return (
        <Link to={'/'}>
          <li className="p-2 w-full text-white flex" key={video.videoId}>
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
    <section className='video-bar overflow-y-scroll'>
      <ul className="w-full">
        <Videos />
      </ul>
    </section>
  )
}
