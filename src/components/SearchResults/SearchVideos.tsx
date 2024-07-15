import { useQuery } from '@tanstack/react-query'
import { apiKey, apiUrl } from '../api'
import { Link, useParams } from 'react-router-dom';

async function fetchResults(query) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': apiUrl,
        }
    };

    const response = await fetch(`https://youtube-v31.p.rapidapi.com/search?query=${query}&type=video&part=snippet%2Cid&maxResults=50`, options)
    return await response.json()
}

function Video({ query }) {
    return (
        <div>
            {query.data?.data.map(item => (
                <div className='search-unit flex m-8 cursor-pointer overflow-hidden transition-all relative left-0 hover:left-1' key={item.videoId}>
                    <Link to={`/video/${item.videoId}`} ><img className="rounded-lg" src={item.thumbnail[0].url} alt='video thumbnail' /></Link>
                    <div className='text-white mx-4'>
                        <p>{item.title}</p>
                        <p className='opacity-65'>{item.channelTitle}</p>
                        <p className='opacity-65'>{item.viewCount + ' views'}</p>
                        <p className='opacity-65'>{item.publishedText}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function SearchVideos() {
    const searchQuery = useParams()
    const query = useQuery({queryKey: ['results'], queryFn: () => fetchResults(searchQuery.query)})

    if (query.isError) {
        return <h1 className="text-white">Error: {query.error.message}</h1>
    }

    if (query.isFetching) {
        return <p className="text-white">Loading...</p>
    }

    return (
        <section className="search-results mx-40">
            <Video query={query} />
        </section>
    )
}
