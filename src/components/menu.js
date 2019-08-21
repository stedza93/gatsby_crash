import React from "react"
import { Link } from "gatsby"
const Menu = () => {
  return (
    <div>
      <ul className="menu-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  )
}
export default Menu
