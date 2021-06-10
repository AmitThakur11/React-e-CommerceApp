import "../cssCompontents/content.css"
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import WishList from "./Wishlist";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import {Routes, Route} from "react-router-dom"
export default function Content(){
  return(
    <div className = "content">
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/product" element={<Product/>}/>
        <Route path = "/product/:id" element={<ProductDetail/>}/>
        <Route path = "/wishlist" element={<WishList/>}/>
        <Route path = "/cart" element={<Cart/>}/>
        <Route path = "/login" element={<LogIn/>}/>
        <Route path = "/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  )
}