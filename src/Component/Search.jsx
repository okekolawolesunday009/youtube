import { TimerOutlined } from '@material-ui/icons';
import React from 'react'
// C:\Users\okeko\youtube\src\img\prime.jpg
import prime from '../img/prime.jpg';
import ChannelRow from './ComponentFunction/ChannelRow';
// import TimeOutlinedIcon from '@material-ui/icons/TimeOutlinedIcon';
import renew2 from '../img/renew2.jfif'
// import SideBar from './SideBar';
// import './Apppage.css'
import './style/search.css';
import VideoRow from './ComponentFunction/VideoRow';

function Search() {
  return (
    <div className="search__app">
       
              {/* <h1 style={{textAlign: "center", color : "red"}}>Search Result will show here</h1> */}
           <div className="search__filter">
            {/* <TimeOutlinedIcon/> */}
            <TimerOutlined/>            
            <h2>Filter</h2>
        
           </div>
           <hr/>
           <ChannelRow
           image={renew2}
           channel ="Clever Programmer"
           verified
           subs =" 65k"
           noOfVideos={382}
           caption="You can find awesome programmer video with quality content and good vibes"
           
           />
           <hr/>

          <VideoRow
           image={renew2}
           channel ="Clever Programmer"
           subs =" 65k"
           views="1.6M"
           timestamp="59 seconds ago"
           title="Lets build you a youtube clone app"
          caption=" Do you want a free one hour video..."

         

          />
          <hr/>
          <VideoRow
           image={renew2}
           channel ="Clever Programmer"
           subs =" 65k"
           views="1.6M"
           timestamp="59 seconds ago"
           title="Lets build you a youtube clone app"
          caption=" Do you want a free one hour video..."

         

          />
          <hr/>
          <VideoRow
           image={prime}
           channel ="Clever Programmer"
           subs =" 65k"
           views="1.6M"
           timestamp="59 seconds ago"
           title="Lets build you a youtube clone app"
          caption=" Do you want a free one hour video..."

         

          />
          <hr/>
          
        </div>
  )
}

export default Search