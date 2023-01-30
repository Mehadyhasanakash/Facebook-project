import React from 'react'
import "./RightBar.css";
import {Users} from '../../data';
import OnlineFriend from '../onlineFriend/OnlineFriend';


const RightBar = () => {

  const HomeRightBar = () =>{
    return (
      <>
      <div className="rightber-contianer">
          <div className="git-continer">
            <img className='gif-imge' src="assets/images/gift.png" alt="" />
            <span className='git-contain-text'><b>Pola Foster</b> and  <b> 3 other friends </b> have a brithday today.</span>
          </div>

        </div>

        <img className='add-image' src="assets/images/ad.png" alt="" />

        <div className="profile-friend-wrappers">
          <span className='online-friend-text'>Online Friends</span>
          <ul className="friend-list-ui">

            {
              Users.map( u => (
                <OnlineFriend key={u.id} user = {u}/>
              ))
            }
           
          </ul>

        </div></>
    )
  }

  const ProfileRightBar = () =>{

    return(
      <>
              <h4 className='user-title'>User Information</h4>
              <div className="user-info-continaer">
                <div className="userInfoItems">
                  <span className="user-info-item">City:</span>
                  <span className="user-info-value">Bangladesh</span>
                </div>
                <div className="userInfoItems">
                  <span className="user-info-item">From:</span>
                  <span className="user-info-value">Cittagong</span>
                </div>
                <div className="userInfoItems">
                  <span className="user-info-item">Relationship:</span>
                  <span className="user-info-value">Single</span>
                </div>
              </div>

              <h4 className='user-title'>Users Friends</h4>
              <div className="user-friends-container">
                <div className="users-friends-items">
                  <img src="assets/images/1.jpeg" alt="" className="users-friend-image" />
                  <span className="users-friends-name">Safak Kocaoglu</span>
                </div>

                <div className="users-friends-items">
                  <img src="assets/images/1.jpeg" alt="" className="users-friend-image" />
                  <span className="users-friends-name">Safak Kocaoglu</span>
                </div>

                <div className="users-friends-items">
                  <img src="assets/images/1.jpeg" alt="" className="users-friend-image" />
                  <span className="users-friends-name">Safak Kocaoglu</span>
                </div>

                <div className="users-friends-items">
                  <img src="assets/images/1.jpeg" alt="" className="users-friend-image" />
                  <span className="users-friends-name">Safak Kocaoglu</span>
                </div>

                <div className="users-friends-items">
                  <img src="assets/images/1.jpeg" alt="" className="users-friend-image" />
                  <span className="users-friends-name">Safak Kocaoglu</span>
                </div>
                
                <div className="users-friends-items">
                  <img src="assets/images/1.jpeg" alt="" className="users-friend-image" />
                  <span className="users-friends-name">Safak Kocaoglu</span>
                </div>
              </div>
      </>
    )
  }



  return (
    <div className='right-bar'>

      <div className="right-bar-wrapper">

       <ProfileRightBar/>

      </div>
    </div>
  )
}

export default RightBar