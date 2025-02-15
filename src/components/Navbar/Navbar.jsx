import "./navbar.css";
import search from "../../assets/images/serach.svg";
import calender from "../../assets/images/calendar.svg";
import setting from "../../assets/images/setting.svg";
import notification from "../../assets/images/notification.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title-box">
        <img src="" alt="grid-img" />
        <h2>Expount Technivo</h2>
      </div>
      <div className="navigation-search">
        <div className="search">
          <input type="text" />
          <img src={search} alt="search" />
        </div>
        <div className="icons">
          <div className="icon">
            <img src={notification} alt="bell" />
          </div>
          <div className="icon">
            <img src={calender} alt="claender" />
          </div>
          <div className="icon">
            <img src={setting} alt="gear" />
          </div>
        </div>
        <div className="avatar">
          <img src="" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
