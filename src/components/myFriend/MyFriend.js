import React from 'react'
import './myfriend.css'

const MyFriend = ({user}) => {
    return (
        <>

            <li className="frinedItemList">
                <img src={user.profilePicture} alt="Friend" />
                <span className='friendListContant'>{user.username}</span>
            </li>
        </>
    )
}

export default MyFriend