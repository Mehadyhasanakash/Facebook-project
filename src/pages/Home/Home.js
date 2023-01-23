import React from 'react'
import "./Home.css"
import Feed from '../../components/Feed/Feed'
import RightBar from '../../components/RightBar/RightBar'
import SiderBar from '../../components/sidebar/SiderBar'
import TopBar from '../../components/topbar/TopBar'

function Home() {
  return (
    <>
    <TopBar/>
    <div className="home-contianer">

      <SiderBar/>
      <Feed/>
      <RightBar/>

    </div>

    </>
  )
}

export default Home