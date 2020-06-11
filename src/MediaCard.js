import React from 'react'

function MediaCard({ imageUrl, title, body }) {
    return (
        <div className={`bg-white display-ib rounded w-200 m-1`}>
            <img src={imageUrl} alt={title} className={`wp-100 h-150`} />
            <div className='p'>
                <p>{title}</p>
                <p>{body}</p>

            </div>
        </div>
    )
}

export default MediaCard
