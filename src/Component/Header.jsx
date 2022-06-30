import React from 'react'
// import { MenuIcon } from '@material-ui/icons/MenuIcon';
 // import  MenuIcon from '@material-ui/icons/Menu';
import  MenuIcon from '@material-ui/icons/Menu';
import  SearchIcon from '@material-ui/icons/Search';
import  AppsIcon from '@material-ui/icons/Apps';
import  NotificationsIcon from '@material-ui/icons/Notifications';
import  Avatar from '@material-ui/core/Avatar';
import  VideoCallIcon from '@material-ui/icons/VideoCall';
import  prime from '../img/prime.jpg'


// import MenuIcon from '@mui/icons-material/Icon/Menu';
import './style.css';

function Header() {
  return (
    <div className="header">
      <div className='header__left'>
        <MenuIcon  className="menuicon"/>

        {/* <img className="header__logo" src={prime} alt="" /> */}
       </div>

       <div className="header__middle">
        <input placeholder='Search' type="text"/>
        <SearchIcon className="header__searchicon" />
      </div>

       <div className='header__right'>
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <Avatar className="header__icon"/>
      </div>
     </div>
  )
}

export default Header