import React from 'react'
import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = ({post}) => {
    console.log(post);
  return (
    <>
    <div className="post-container">
        <div className="post-wapper">

            <div className="post-top">
                <div className="profile-continer">
                    <img src="assets/images/1.jpeg" alt="" />
                    <span className='pofile-name'>Abul</span>
                    <span className='pofile-time'>{post.date}</span>
                </div>
                <MoreVertIcon className='more-icon'/>

            </div>
            <div className="post-center">
                <span className='post-tile'>{post.desc}</span>
                <img src={post.photo} alt="" />
            </div>
            <div className="post-bottom">
                <div className="post-link-heart-button">
                <img src="assets/images/like.png" alt="" />
                <img src="assets/images/heart.png" alt="" />
                <span>{post.like} like this post</span>
                </div>
                <span className='comments'>{post.comment} comments</span>
            </div>

        </div>
        
        </div></>
    
  )
}

export default Post