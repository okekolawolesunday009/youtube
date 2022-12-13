import React from 'react'
import './VideoRow.css'

export default function VideoRow(
    {image,
    channel,
    views,
    subs,
    timestamp,
    title,
    caption}
    ) {
  return (
    <div className="VideoRow">
        <img src={image} alt={channel}/>
        <div className="videoRow__text">
        <h3>{title}</h3>
        <p className='videoRow__heading'>
            {channel} . <span className="sideNumber">{subs}</span> Subscriber {views} views + {timestamp}
        </p>
        <p className="videoRow__caption">{caption}</p>
            
        </div>

    </div>
  )
}
