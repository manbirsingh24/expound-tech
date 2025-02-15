import Sidebar from "../Sidebar/Sidebar.jsx";
import Content from "../Content/Content.jsx";
import "./mainPage.css";

import done from "../../assets/images/done.svg";
import replay from "../../assets/images/replay.svg"
import tag from "../../assets/images/tag.svg"
import group from "../../assets/images/group.svg"
import list from "../../assets/images/list.svg"

const MainPage = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="container">
        <div className="header">
          <div className="breadcrumbs">Breadcrumb</div>
          <div className="headerInfo">
            <div className="info-title">
              <h1>LE-1023</h1>
            </div>
            <div className="header-icons">
              <img src={tag} alt="one" />
              <img src="" alt="two" />
              <img src={group} alt="three" />
              <img src={list} alt="four" />
              <img src={replay} alt="" />
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="chip-section">
            <div className="complete">
              <img src={done} alt="" />
            </div>
            <div className="complete">
              <img src={done} alt="" />
            </div>
            <div className="nurturing">Nurturing</div>
            <div className="convert">Convert</div>
          </div>
          <div>
            <img src="" alt="tick" />
            <span>Mark as Converted</span>
          </div>
        </div>
        <Content />
      </div>
    </div>
  );
};

export default MainPage;
