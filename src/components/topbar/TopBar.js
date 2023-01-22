import React from 'react'
import "./TopBar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';


const TopBar = () => {
  return (
    <>
    
   
   <div className="topBarContainer">

    {/* --------------------------Left--------------------------------- */}

    <div className="left">

      <div className="logo">
        <span>Facebook</span>
      </div>

    </div>

        {/* --------------------------Center--------------------------------- */}



    <div className="Center">

      <div className="icon">
        <SearchIcon className='sear-icon'/> 

        <input  placeholder='Search Friend, Post or Video' className='topbar-input' />
      </div>

      



    </div>

  {/* --------------------------Right--------------------------------- */}


    <div className="right">

      <div className="link-item">
        <span className='tobar-link'>HomPage</span>
        <span className='tobar-link'>TimeLine</span>
      </div>

      <div className="icon-item">
        <div className="ritht-icon">
        <PersonIcon  className='right-icon'/>
        <span>1</span>

        </div>
        <div className="ritht-icon">
        <MessageIcon className='right-icon' />
        <span>5</span>

        </div>
        <div className="ritht-icon">
        <NotificationsIcon className='right-icon' />
        <span>3</span>

        </div>
       
      </div>
      <div className="person-pofile">
      <img src= " /assets/images/Person" alt="Person" />
    </div>


    </div>

    
    


    
   </div>
    

    </>
  )
}

export default TopBar