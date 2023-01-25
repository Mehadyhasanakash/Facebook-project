import React from 'react'
import "./Shares.css"
import CollectionsIcon from '@mui/icons-material/Collections';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
    return (
        <div className="share-container">
            <div className="share-warapper">
            <div className="pofile">
                    <img className='pofile-img' src="assets/images/1.jpeg" alt="" />
                    <input className='profile-input' placeholder="what's in your main akash" />
                </div>
                <hr className='pofile-hr' />

                <div className="button-item">
                    <div className="button-item-list">
                        <div className="item">
                            <CollectionsIcon htmlColor='tomato' className='profile-icon' />
                            <span>Photo or Video</span>
                        </div>
                        <div className="item">
                            <LabelIcon htmlColor='blue' className='profile-icon' />
                            <span>Tag</span>
                        </div>
                        <div className="item">
                            <LocationOnIcon htmlColor='green' className='profile-icon' />
                            <span>Location</span>
                        </div>
                        <div className="item">
                            <EmojiEmotionsIcon htmlColor='orange' className='profile-icon' />
                            <span>Feeling</span>
                        </div>



                    </div>
                    <button className='share-btn'>Share</button>




                </div>


            </div>

        </div>
    )
}

export default Share