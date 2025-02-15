import "./overdue.css"
import call from '../../assets/images/call.svg'

const activities = [
  {
    title: "Share Catalogue",
    dueDate: "2025-01-28",
    time: "16:20:00",
  },
  {
    title: "Introductory call",
    dueDate: "2025-01-28",
    time: "17:30:00",
  },
  {
    title: "Introductory call",
    dueDate: "2025-01-28",
    time: "17:30:00",
  },
  {
    title: "Introductory call",
    dueDate: "2025-01-28",
    time: "17:30:00",
  },
  {
    title: "Introductory call",
    dueDate: "2025-01-28",
    time: "17:30:00",
  },
  {
    title: "Introductory call",
    dueDate: "2025-01-28",
    time: "17:30:00",
  },
];

const Overdue = () => {
  return (
    <div className="overdue-container">
      <div className="overdue-header">
        <h3 className="headerTitle">Overdue Activities</h3>
        <a href="#view-upcoming" className="headerLink">
          View Upcoming
        </a>
      </div>
      <div className="overdue-grid">
        {activities.map((activity, index) => (
          <div key={index} className="card">
            <div className="cardHeader">
              <img src={call} className="phoneIcon"/>
              <span className="cardTitle">{activity.title}</span>
            </div>
            <div className="details heading">
              <div className="text">
              <p >Due Date</p>
                <p className="heading cardText">{activity.dueDate}</p>
              </div>
              <div className="text">
              <p >Time</p>
                <p className="heading cardText">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overdue;
