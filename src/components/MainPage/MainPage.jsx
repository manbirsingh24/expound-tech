import React from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'
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

          <div className="content">
            <div className="content-header">
              <div>
                <p>test</p>1<h1>Ramesh Sharma</h1>
                <div className="profile">
                  <img src="" alt="ptofile" />
                  <span>Anamnaaj Mansuri</span>
                  <span className="event">Event</span>
                </div>
              </div>
              <div className="buttons">
                <button>Create Account</button>
                <button>Create Contact</button>
              </div>
            </div>
            <div className="nav">
              <a href="#" className="active">
                Basic Details <span>10</span>
              </a>
              <a href="#">Account Details</a>
              <a href="#">
                Lead Details <span>8</span>
              </a>
              <a href="#">Team</a>
              <a href="#">Other Contacts</a>
            </div>
            <div className="details">
              <div className="grid">
                <div>
                  <p className="label">Title</p>
                  <p>test</p>
                </div>
                <div>
                  <p className="label">First Name</p>
                  <p>Ramesh</p>
                </div>
                <div>
                  <p className="label">Last Name</p>
                  <p>Sharma</p>
                </div>
              </div>
            </div>
            <div className="address">
              <h2>Address Details</h2>
              <div className="grid">
                <div>
                  <p className="label">Region</p>
                  <p>APAC</p>
                </div>
                <div>
                  <p className="label">Country</p>
                  <p>India</p>
                </div>
                <div>
                  <p className="label">Zone</p>
                  <p>North</p>
                </div>
              </div>
            </div>
            <div className="content-footer">
              <div className="info">
                <img src="" alt="i" />
                <p>10 empty field, fill the pending information</p>
              </div>
              <button className="edit-button">
                <img src="" alt="pen" />
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MainPage
