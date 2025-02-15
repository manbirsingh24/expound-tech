import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
            <div className="title-box">
                <div className='title'>
                    <img src="" alt="grid-img" />
                    <h5>Expount Technivo</h5>
                </div>
                <div className='search'>
                    <input type="text" />
                    <img src="" alt="search" />
                </div>
            </div>
            <div className="navigation">
                <img src="" alt="bell" />
                <img src="" alt="claender" />
                <img src="" alt="gear" />
            </div>
            <div className="avatar">
                <img src="" alt="avatar" />
            </div>
    </div>
  )
}

export default Navbar
