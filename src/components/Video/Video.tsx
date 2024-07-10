import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { queryContext } from '../../App'

export default function Video() {
  const query = useContext(queryContext)
  const videoId = useLocation()

  if (query.isFetching) {
    return <p className="text-white m-12">Loading...</p>
  }

  console.log(query.data?.data?.filter(item => item.videoId === videoId.pathname.slice(7)))

  return (
    <section className="video m-8 mx-auto flex flex-wrap">
      <iframe className='w-full h-full' src={"https://www.youtube.com/embed/" + videoId.pathname.slice(6)}></iframe>
      <div className='flex flex-wrap w-6/12 mt-4'>
        {/* <h2 className='text-white w-full'>{query.data?.data?.filter(item => item.videoId === videoId.pathname.slice(7))[0].title}</h2> */}
        {/* <h2 className='text-white w-full opacity-65'>{query.data?.data?.filter(item => item.videoId === videoId.pathname.slice(7))[0].channelTitle}</h2> */}
      </div>
      <div className='flex flex-wrap w-6/12 mt-4'> 
        {/* <p className='text-white w-full text-end opacity-65'>{query.data?.data?.filter(item => item.videoId === videoId.pathname.slice(7))[0].viewCount} views</p> */}
        {/* <p className='text-white w-full text-end opacity-65'>{query.data?.data?.filter(item => item.videoId === videoId.pathname.slice(7))[0].publishedText}</p> */}
      </div>
    </section>
  )
}
