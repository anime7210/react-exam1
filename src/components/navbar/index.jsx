import { NavLink } from "react-router"
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <NavLink to={'/'} className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
      <NavLink to={'/about'} className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink>
      <NavLink to={'/contact'} className={({ isActive }) => (isActive ? "active-link" : "")}>Contact</NavLink>
    </div>
  )
}

export default Navbar