import {useState} from "react";
import Menu from "../svg/menu.svg"
import Wishlist from "../svg/dislike.svg"
import Cart from "../svg/carts.svg"
import Close from "../svg/close.svg"
import "../cssCompontents/header.css"
import {Link} from "react-router-dom"
export default function Header(){
  const [toggle , setToggle] = useState(false);

  const toggleMenu = ()=>setToggle(!toggle)
  return(
    <div>
      <header>
        <div className = "menu" onClick = {()=>toggleMenu()}>
          <img src = {Menu} alt = "Menu" width="30px" />
        </div>
        <div className = "logo">
          <div><Link to="/" ><span>GET</span>UP</Link></div>
        </div>
        
        <nav>
          <ul className = {toggle ? "nav-list toggle":"nav-list"}>
            <div className = "side-bar-logo">GETUP</div>
            <li onClick = {()=>toggleMenu()}><Link to = "/" >Home</Link></li>
            <li onClick = {()=>toggleMenu()} ><Link to = "/product" >Product</Link></li>
            <li onClick = {()=>toggleMenu()} ><Link to = "/contact" >Contact</Link></li>
            <li onClick = {()=>toggleMenu()} className = "login-btn"><Link to = "/login" >Login</Link></li>
            <li className = "close" onClick = {()=>toggleMenu()}>
              <img src = {Close} alt ="close"  width = "30px" />
            </li>
          </ul>
          <div className = "shop-icon">
            <span>0</span>
            <Link to ="/wishlist">
              <img src = {Wishlist} alt = "Menu" width="20px" />
            </Link>
          </div>
        <div className = "shop-icon">
          <span>0</span>
          <Link to ="/cart">
            <img src = {Cart} alt = "Menu" width="20px" />
          </Link>
        </div>
        </nav>
      </header>
    </div>
  )
}