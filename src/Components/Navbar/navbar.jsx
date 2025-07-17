import React, { useContext, useState } from 'react'
import "./navbar.css"
import Image from "../../assets/image.png"
import Cart_Icon from "../../assets/cart ican img.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={Image} alt="" height="90px" />
        <p>Shopify</p>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-menu ${showMenu ? "show" : ""}`}>
        <li onClick={() => { setMenu("Home"); setShowMenu(false); }}>
          <Link style={{ textDecoration: "none" }} to="/">Home</Link>
          {menu === "Home" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("Men"); setShowMenu(false); }}>
          <Link style={{ textDecoration: "none" }} to="/mens">Men</Link>
          {menu === "Men" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("Women"); setShowMenu(false); }}>
          <Link style={{ textDecoration: "none" }} to="/womens">Women</Link>
          {menu === "Women" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("Kids"); setShowMenu(false); }}>
          <Link style={{ textDecoration: "none" }} to="/kids">Kids</Link>
          {menu === "Kids" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={Cart_Icon} alt="" height="40px" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
