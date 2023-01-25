import React from 'react'
import "./Feed.css"
import Share from './../Shares/Share';
import Post from '../post/Post';

const Feed = () => {
  return (
    <div className='feed'>


      <Share />
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>


    </div>
  )
}

export default Feed