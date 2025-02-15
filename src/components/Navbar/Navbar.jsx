import "./navbar.css";
import search from "../../assets/images/serach.svg";
import calender from "../../assets/images/calendar.svg";
import setting from "../../assets/images/setting.svg";
import notification from "../../assets/images/notification.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title-box">
        <div className="title">
          <img src="" alt="grid-img" />
          <h5>Expount Technivo</h5>
        </div>
      </div>
      <div className="navigation-search">
        <div className="search">
          <input type="text" />
          <img src={search} alt="search" />
        </div>
        <div className="icons">
          <img src={notification} alt="bell" />
          <img src={calender} alt="claender" />
          <img src={setting} alt="gear" />
        </div>
      <div className="avatar">
        <img src="" alt="avatar" />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
