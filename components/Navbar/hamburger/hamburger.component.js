import { useContext } from "react";
import { NavContext } from "../../../contexts/navbar.context";


function HamburgerMenu({color,clicked}) {


 

  return (
    <div className={`button_container ${clicked && 'active'} ${clicked && 'black'} ${color}`}>
      <span className='top'></span>
      <span className="middle"></span>
      <span className="bottom"></span>
    </div>
  );
}

export default HamburgerMenu;
