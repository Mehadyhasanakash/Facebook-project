import React from 'react'
import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
  return (
    <>
    <div className="post-container">
        <div className="post-wapper">

            <div className="post-top">
                <div className="profile-continer">
                    <img src="assets/images/1.jpeg" alt="" />
                    <span className='pofile-name'>Abul</span>
                    <span className='pofile-time'>5 mins ago</span>
                </div>
                <MoreVertIcon className='more-icon'/>

            </div>
            <div className="post-center">
                <span className='post-tile'>Hey! This is my frist Post</span>
                <img src="assets/images/3.jpeg" alt="" />
            </div>
            <div className="post-bottom">
                <div className="post-link-heart-button">
                <img src="assets/images/like.png" alt="" />
                <img src="assets/images/heart.png" alt="" />
                <span>32 People Like This</span>
                </div>
                <span className='comments'>9 comments</span>
            </div>

        </div>
        
        </div></>
    
  )
}

export default Post