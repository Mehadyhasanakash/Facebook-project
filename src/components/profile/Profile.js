import React from 'react'
import Feed from '../Feed/Feed'
import RightBar from '../RightBar/RightBar'
import SiderBar from '../sidebar/SiderBar'
import TopBar from '../topbar/TopBar'
import "./profile.css"

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile">

        <SiderBar />
        <div className="profile-rightside">

          <div className="profile-right-top">

            <div className="profileCover">
              <img src="assets/images/Post/3.jpeg" alt="" className="proifleCoverImage" />
              <img src="assets/images/1.jpeg" alt="" className="proifleProfileImage" />
            </div>

            <div className="proile-infomation">
                <span className='profile-name'> Safak Kocaoglu</span>
                <span className='profile-des'>Hello my dear Frined</span>
              </div>





          </div>
          <div className="profile-right-bottom">


            <Feed />
            <RightBar />

          </div>

        </div>


      </div>

    </>

  )
}

export default Profile