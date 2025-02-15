import "./content.css";
import ActivityLog from "../ActivityLogs/ActivityLogs";
import ActivityNavigation from "../AvivityNavigation/ActivityNavigation";

import edit from '../../assets/images/edit.svg'
import info from '../../assets/images/info.svg'
import person from '../../assets/images/person.svg'

const Content = () => {
  return (
    <div className="content">
      <div className="content-description">
        <div className="content-header">
          <div>
            <p>test</p>
            <h1>Ramesh Sharma</h1>
            <div className="profile">
              <img src={person} alt="ptofile" />
              <b>Anamnaaj Mansuri</b>
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
          <h2 style={{ marginBottom: "20px" }}>Address Details</h2>
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
            <img src={info} alt="i" />
            <p>10 empty field, fill the pending information</p>
          </div>
          <div className="edit-button">
            <img src= {edit} alt="pen" />
          </div>
        </div>
      </div>

      <div className="activities">
        <ActivityNavigation />

        <ActivityLog />
      </div>
    </div>
  );
};

export default Content;
