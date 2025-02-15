import  { useState } from "react";
import "./activityNavigation.css";
import call from '../../assets/images/call.svg'
import email from '../../assets/images/email.svg'
import event from '../../assets/images/event.svg'

function ActivityNavigation() {
  const [activeTab, setActiveTab] = useState("Activity");

  return (
    <div className="activity-container">
      <div className="top-tabs">
        <div
          className={`top-tab ${activeTab === "Activity" ? "active" : ""}`}
          onClick={() => setActiveTab("Activity")}
        >
          Activity
        </div>
        <div
          className={`top-tab ${activeTab === "Actionables" ? "active" : ""}`}
          onClick={() => setActiveTab("Actionables")}
        >
          Actionables
        </div>
        <div
          className={`top-tab ${activeTab === "Tasks" ? "active" : ""}`}
          onClick={() => setActiveTab("Tasks")}
        >
          Tasks
        </div>
        <div
          className={`top-tab ${activeTab === "Note & File" ? "active" : ""}`}
          onClick={() => setActiveTab("Note & File")}
        >
          Note & File
        </div>
      </div>

      <ActivitySection content={activeTab === "Activity"}/>
    </div>
  );
}

function ActivitySection({content}) {
  return !content ? (<h1 style={{ marginTop: "2rem" }}>Loading...</h1>) : (
    
    <div className="activity-section">
      <div className="activity-tabs">
        <div className="activity-tab">
            <div className="left-green"><img src={call} alt="phone" /></div>
            <div className="right">Log a Call</div>
        </div>
        <div className="activity-tab">
            <div className="left-grey"><img src= {email} alt="email" /></div>
            <div className="right">Email</div>
        </div>
        <div className="activity-tab">
            <div className="left-grey"><img src={event} alt="event" /></div>
            <div className="right">Event</div>
        </div>
      </div>
      <LogCallForm/>
    </div>
  )
}

function LogCallForm() {
  return (
    <div className="log-call-form">
      <div className="form-row">
        <label>Subject *</label>
        <input type="text" placeholder="Subject" />
      </div>

      <div className="form-row side-by-side">
        <div className="form-col">
          <label>Add Team Member</label>
          <input type="text" name="" id="" placeholder="Select Team Members"/>
        </div>
        <div className="form-col">
          <label>Add Contact</label>
          <input type="text" name="" id="" placeholder="Select Team Members"/>
        </div>
      </div>

      <div className="form-row side-by-side">
        <div className="form-col">
          <label>Due Date *</label>
          <input type="date" />
        </div>
        <div className="form-col">
          <label>Time *</label>
          <input type="time" />
        </div>
      </div>

      <div className="form-row">
        <label>Description</label>
        <textarea rows="4" placeholder="Enter description here..." />
      </div>

      <button className="submit-btn">Submit</button>
    </div>
  );
}

export default ActivityNavigation;
