import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
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
              <div className="chip"></div>
              <div className="chip"></div>
            </div>
            <div>

            </div>
          </div>
          <div className="content"></div>
        </div>
      </div>
    </>
  );
};

export default App;
