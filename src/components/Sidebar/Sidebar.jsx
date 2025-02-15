import './sidebar.css'

import pin from '../../assets/images/pin.svg'
import layer from '../../assets/images/layer.svg'
import shop from '../../assets/images/shop.svg'
import briefCase from "../../assets/images/BriefCase.svg";

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
            <img src="" alt="building" />
        </div>
        <div className='personal'>
            <img src="" alt="personal" />
        </div>
        <div className='shop'>
            <img src={shop} alt="shop" />
        </div>
        <div className='list'>
            <img src="" alt="list" />
        </div>
    </div>
  )
}

export default Sidebar