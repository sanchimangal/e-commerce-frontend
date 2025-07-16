import React, { useContext, useState } from 'react'
import "./navbar.css"
import Image from"../../assets/image.png"
import Cart_Icon from "../../assets/cart ican img.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const navbar = () => {
  const [menu, setMenu] = useState('Home')
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={Image} alt="" height="90px" />
            <p>Shopify</p>
        </div>

  <ul className='nav-menu'>
     
     <li onClick={() => {setMenu("Home")}}> <Link style={{textDecoration:"none"}} to="/"> Home </Link>
      {menu==="Home" ? <hr/>:<> </>}
      </li>
    <li onClick={() => {setMenu("Men")}}>  <Link style={{textDecoration:"none"}} to="/mens">Men</Link>
       {menu==="Men" ? <hr/>:<> </>}
    </li>
    <li onClick={() => {setMenu("Women")}}> <Link style={{textDecoration:"none"}} to="/womens">Women</Link>
        {menu==="Women" ? <hr/>:<> </>}
    </li>
    <li onClick={() => {setMenu("Kids")}}> <Link style={{textDecoration:"none"}} to="/kids">Kids</Link>
        {menu==="Kids" ? <hr/>:<> </>}
    </li>
   
  </ul>
   
   <div className="nav-login-cart">
    <Link to="/login"><button>Login</button></Link>
   <Link to="/cart"><img src={Cart_Icon} alt="" height="40px" /></Link> 
    <div className="nav-cart-count">{getTotalCartItems()}</div>
   </div>
    </div>
  )
}

export default navbar
