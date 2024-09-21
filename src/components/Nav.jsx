import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav nav-pills mb-2 col-lg-10 col-md-10 w-100">
      <li className="nav-item">
        <NavLink 
          className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"
          } 
          to="/"
        >
          Rank General
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"
          } 
          to="/members"
        >
          Members
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"
          } 
          to="/others"
        >
          Others
        </NavLink>
      </li>
     
    </ul>
  )
}

export default Nav;