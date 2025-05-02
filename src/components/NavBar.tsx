import { Link } from "react-router-dom";
import "../assets/sass/NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navBar">
          <div className="logo"><Link to="/">타입스크립트</Link></div>
          <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
          </ul>
    </nav>
  )
}

export default NavBar
