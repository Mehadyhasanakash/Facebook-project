import React, { useState } from 'react'
import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../data';


const Post = ({post}) => {

    const [like, setLike] = useState(post.like);
    const [isLike, setisLike] = useState(false);

    const HandelLike = () =>{
        setLike(isLike ? like - 1 : like + 1);
        setisLike(! isLike)

    }


  return (
    <>
    <div className="post-container">
        <div className="post-wapper">

            <div className="post-top">
                <div className="profile-continer">
                    <img src={Users.filter(u => u.id === post?.userId) [0].profilePicture} alt="" />
                    <span className='pofile-name'>{Users.filter(u => u.id === post?.userId) [0].username}</span>
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
                <img src="assets/images/like.png" onClick={HandelLike} alt="" />
                <img src="assets/images/heart.png" onClick={HandelLike} alt="" />
                <span>{like} like this post</span>
                </div>
                <span className='comments'>{post.comment} comments</span>
            </div>

        </div>
        
        </div></>
    
  )
}

export default Post