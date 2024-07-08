import React, { useEffect } from 'react'

import { useQuery } from '@tanstack/react-query';

export default function Videos() {
  const query = useQuery({ queryKey: ['vidoes'], queryFn: fetchVideo })

    async function fetchVideo() {
        const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
        const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f6b93707b1mshbab1a072d56c6d5p1ed415jsn24e6c20d2388',
            'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options)
        return response.json()
    }

    useEffect(() => {
        console.log(query.data?.items);
    }, []);

    if (query.isPending) {
        return <div className="text-white">Loading...</div>
    }

    if (query.isError) {
        return <div className="text-white">Error: {query.error.message}</div>
    }

    return (
        <section className="videos text-white grid grid-cols-3">
            {query.data?.items.map(item => (
                <div key={item.id.videoId} className="data-unit m-4 relative bottom-0 hover:bottom-1 transition-all">
                    <img className='w-96 h-72 cursor-pointer' src={item.snippet.thumbnails.high.url} alt="Thumbnail" />
                    <h2 className='w-full text-center mt-2'>{item.snippet.channelTitle}</h2>
                </div>
            ))}
        </section>
    )
}
