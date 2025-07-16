import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="logo.png" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/catalog">Автомобили</Link>
        </li>
        <li>
          <Link to="/">Электромобили</Link>
        </li>
        <li>
          <Link to="/">Владельцам</Link>
        </li>
        <li>
          <Link to="/">Покупка онлайн</Link>
        </li>
        <li>
          <Link to="/">Больше о Mercedes</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
