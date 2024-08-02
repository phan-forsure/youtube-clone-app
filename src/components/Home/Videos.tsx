import { Link } from 'react-router-dom'

export default function Videos({ query }) {    

    if (query.isFetching) {
        return <div className="text-white">Loading...</div>
    }

    if (query.isError) {
        return <div className="text-white">Error: {query.error.message}</div>
    }

    if (query.data?.data.length === 0) {
        return <div className="text-white">No videos found.</div>
    }

    return (
        <section className="videos text-white grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
            {query.data?.data?.map(item => (
                <div key={item.videoId} className="data-unit m-2 relative bottom-0 hover:bottom-1 transition-all overflow-hidden">
                    <Link replace to={`/video/${item.videoId}`}><img key={item.videoId} className='cursor-pointer rounded-2xl w-full aspect-video' src={item.thumbnail[2]?.url !== undefined ? item.thumbnail[2]?.url : item.thumbnail[1]?.url !== undefined ? item.thumbnail[1]?.url : item.thumbnail[0]?.url} alt="Thumbnail" /></Link>
                    <div className='w-full overflow-ellipsis'>
                        <h2 key={item.videoId} className='w-full mt-2 font-bold'>{item.title}</h2>
                        <p className='opacity-60'>{item.channelTitle}</p>
                    </div>
                    <div>
                        <p className='opacity-60 w-full'>{(+item.viewCount)} views</p>
                        <p className='opacity-60 w-full'>{item.publishedText}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}
