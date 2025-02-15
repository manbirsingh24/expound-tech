import "./activityLogs.css";

const dummyData = [
  {
    date: "10/01",
    type: "Lead",
    time: "03:12 PM",
    title: "New Lead Created by Anamnaaj",
  },
  {
    date: "13/01",
    type: "Status",
    time: "06:20 PM",
    title: "Status Updated to",
    desc: "Nurturing",
  },
  {
    date: "28/01",
    type: "Activity",
    time: "04:30 PM",
    title: "Share Catalogue",
  },
  {
    date: "28/01",
    type: "Activity",
    time: "04:30 PM",
    title: "Introductory call",
  },
  // {
  //   date: "28/01",
  //   type: "Activity",
  //   time: "04:30 PM",
  //   title: "Introductory call",
  // },{
  //   date: "28/01",
  //   type: "Activity",
  //   time: "04:30 PM",
  //   title: "Introductory call",
  // },{
  //   date: "28/01",
  //   type: "Activity",
  //   time: "04:30 PM",
  //   title: "Introductory call",
  // },
  ];

const ActivityLog = () => {
  return (
    <div className="activity-logs">
      <p>Activity Logs</p>
      <div className="timeline">
        {dummyData.map((item, index) => (
          <div className="entry" key={index}>
            <div className="date">{item.date}</div>
            <div className="circle" />
            <div className="details">
              <div className="time">
                {item.type} | {item.time}
              </div>
              <div className="title">{item.title}</div>
              {item.desc && <div className="desc">{item.desc}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
