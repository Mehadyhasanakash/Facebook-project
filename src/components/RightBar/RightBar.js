import React from 'react'
import "./RightBar.css"

const RightBar = () => {
  return (
    <div className='right-bar'>

      <div className="right-bar-wrapper">

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
            <li className="friend-lish-li">
              <img className='active-friend-image' src="assets/images/3.jpeg" alt="" />
              <span className='active-friend-text'>Topar</span>

              <div className="active"></div>
              
            </li>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default RightBar