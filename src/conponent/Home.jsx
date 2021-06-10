import "../cssCompontents/home.css"
import {Link} from "react-router-dom"
export default function Home(){
  return(
    <div className = "home">
      <h1>Home</h1>
      <Link to = "/product">SHOP</Link>
    </div>
  )
     
}