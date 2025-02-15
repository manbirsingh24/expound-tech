import './sidebar.css'

import pin from '../../assets/images/pin.svg'
import layer from '../../assets/images/layer.svg'
import shop from '../../assets/images/shop.svg'
import briefCase from "../../assets/images/BriefCase.svg";
import box from "../../assets/images/box.svg";
import user from "../../assets/images/user.svg";
import building from "../../assets/images/building.svg";


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='stack'>
            <img src={layer} alt="stack" />
        </div>
        <div className='pin'>
            <img src={pin} alt="pin" />
        </div>
        <div className='business'>
            <img src={briefCase} alt="business" />
        </div>
        <div className='building'>
            <img src={building} alt="" />
        </div>
        <div className='personal'>
            <img src={user} alt="" />
        </div>
        <div className='shop'>
            <img src={shop} alt="" />
        </div>
        <div className='list'>
            <img src={box} alt="" />
        </div>
    </div>
  )
}

export default Sidebar