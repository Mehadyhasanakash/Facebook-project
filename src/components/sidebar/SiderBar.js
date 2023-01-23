import React from 'react'
import "./Sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
const SiderBar = () => {
  return (
    <div className='sidebar'>
      <div className="iconItem">
      <li className="itemIconList">
          <RssFeedIcon/>
          <span className='iconItemContant'>Feed</span>

        </li>

        <li className="itemIconList">
          <ChatIcon/>
          <span className='iconItemContant'>Chat</span>

        </li>

        
        <li className="itemIconList">
          <PlayCircleIcon/>
          <span className='iconItemContant'>Video</span>

        </li>

        <li className="itemIconList">
          <GroupIcon/>
          <span className='iconItemContant'>Groups</span>

        </li>
        <li className="itemIconList">
          <BookmarkIcon/>
          <span className='iconItemContant'>Bookmark</span>

        </li>
        <li className="itemIconList">
          <HelpOutlineIcon/>
          <span className='iconItemContant'>Qusetions</span>

        </li>
        <li className="itemIconList">
          <WorkOutlineIcon/>
          <span className='iconItemContant'>Jobs</span>

        </li>
        <li className="itemIconList">
          <EventIcon/>
          <span className='iconItemContant'>Jobs</span>

        </li>
        <li className="itemIconList">
          <SchoolIcon/>
          <span className='iconItemContant'>Courses</span>

        </li>
      
      <button className='btn'>Show More</button>
        <hr className='hr' />

        <div className="friendItem">

          <li className="frinedItemList">
            <img src="assets/images/1.jpeg" alt="Friend" />
            <span className='friendListContant'>Abul</span>
          </li>
          <li className="frinedItemList">
            <img src="assets/images/1.jpeg" alt="Friend" />
            <span className='friendListContant'>Abul</span>
          </li>
          <li className="frinedItemList">
            <img src="assets/images/1.jpeg" alt="Friend" />
            <span className='friendListContant'>Abul</span>
          </li>
          <li className="frinedItemList">
            <img src="assets/images/1.jpeg" alt="Friend" />
            <span className='friendListContant'>Abul</span>
          </li>
          <li className="frinedItemList">
            <img src="assets/images/1.jpeg" alt="Friend" />
            <span className='friendListContant'>Abul</span>
          </li>
          <li className="frinedItemList">
            <img src="assets/images/1.jpeg" alt="Friend" />
            <span className='friendListContant'>Abul</span>
          </li>
          <li className="frinedItemList">
            <img src="assets/images/1.jpeg" alt="Friend" />
            <span className='friendListContant'>Abul</span>
          </li>
          <li className="frinedItemList">
            <img src="assets/images/1.jpeg" alt="Friend" />
            <span className='friendListContant'>Abul</span>
          </li>
          <li className="frinedItemList">
            <img src="assets/images/1.jpeg" alt="Friend" />
            <span className='friendListContant'>Abul</span>
          </li>
          <li className="frinedItemList">
            <img src="assets/images/1.jpeg" alt="Friend" />
            <span className='friendListContant'>Abul</span>
          </li>
          </div>
        </div>







        </div>
  )
}

export default SiderBar