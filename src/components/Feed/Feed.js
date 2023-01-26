import React from 'react'
import "./Feed.css"
import Share from './../Shares/Share';
import Post from '../post/Post';
import {Posts} from '../../data';

const Feed = () => {
  return (
    <div className='feed'>


      <Share  />
      {Posts.map(p =>(
        <Post key={p.id} post={p}/>
      ))}

    </div>
  )
}

export default Feed