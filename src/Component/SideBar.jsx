import React from 'react'
import './sidebar.css';
import SideRows from './SideRows';
import  HomeIcon from '@material-ui/icons/Home';
import  WhatshotIcon from '@material-ui/icons/Whatshot';
import  SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import  VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import  HistoryIcon from '@material-ui/icons/History';
import  OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import  WatchLaterIcon from '@material-ui/icons/WatchLater';
import  ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import  ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';



function SideBar() {
  return (
    <div className="sidebar">

        <SideRows selected Icon ={HomeIcon} title="Home" />
        <SideRows  Icon ={WhatshotIcon} title="Trending" />
        <SideRows  Icon ={SubscriptionsIcon} title="Subscriptions" />
        <hr />

        <SideRows  Icon ={VideoLibraryIcon} title="Library" />
        <SideRows  Icon ={HistoryIcon} title="History" />
        <SideRows  Icon ={OndemandVideoIcon} title="Your Videos" />
        <SideRows  Icon ={WatchLaterIcon} title="Watch Later" />
        <SideRows  Icon ={ThumbUpAltOutlinedIcon} title="Liked Videos" />
        <SideRows  Icon ={ExpandMoreOutlinedIcon} title="Show More" />

      


   </div>
  )
}

export default SideBar