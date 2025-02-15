import React from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'
import Content from '../Content/Content.jsx'
import './mainPage.css'

const MainPage = () => {
  return (
    <div className="main-page">
        <Sidebar />
        <div className="container">
          <div className="header">
            <div className="breadcrumbs">Breadcrumb</div>
            <div className="headerInfo">
              <div className="info-title">
                <span>LE-1023</span>
              </div>
              <div className="header-icons">
                <img src="" alt="one" />
                <img src="" alt="two" />
                <img src="" alt="three" />
                <img src="" alt="four" />
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="chip-section">
              <div className="complete"></div>
              <div className="complete"></div>
              <div className="nurturing">Nurturing</div>
              <div className="convert">Convert</div>
            </div>
            <div>
              <img src="" alt="tick" />
              <span>Mark as Converted</span>
            </div>
          </div>
          <Content/>
        </div>
      </div>
  )
}

export default MainPage
