import { Avatar } from '@material-ui/core';
// import VerifiedI, { VerifiedUserOutlined }con from '@material-ui/icons';
import React from 'react'
import './ChannelRow.css';


function ChannelRow(
{  image, subs, noOfVideos, caption,channel, verified
}  ) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo"
     alt={channel}
     src={image}

    />
    <div className="channelRow__text">
       {/* <h4>{channel} {verified && <VerifiedIcon/>}</h4> */}
       <h4>{channel} {verified}</h4>

     <p className="channel__text">{subs} subscriber - {noOfVideos}</p>
     <p className="channel__text">{caption}</p>
    </div>
    {/* < CheckCircleOutlineOutlined/> */}
    </div>
  )
}

export default ChannelRow