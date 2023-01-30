import React from 'react'
import './onlineFriend.css'

const OnlineFriend = ({user}) => {
    console.log(user)
  return (
    <div>
         <li className="friend-lish-li">
              <img className='active-friend-image' src={user.profilePicture} alt="" />
              <span className='active-friend-text'>{user.username}</span>

              <div className="active"></div>
              
            </li>
    </div>
  )
}

export default OnlineFriend