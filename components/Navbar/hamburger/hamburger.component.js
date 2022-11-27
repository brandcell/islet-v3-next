import { useContext } from "react";
import { NavContext } from "../../../contexts/navbar.context";


function HamburgerMenu({color}) {


 const {isMenuOpen} = useContext(NavContext)

 {}

  return (
    <div className={`button_container ${isMenuOpen && 'active'} ${isMenuOpen && 'black'} ${color}`}>
      <span className='top'></span>
      <span className="middle"></span>
      <span className="bottom"></span>
    </div>
  );
}

export default HamburgerMenu;
