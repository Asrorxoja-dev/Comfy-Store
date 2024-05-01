import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./Navlinks";

function Navbar() {
  return (
    <nav className="bg-base-200">
      <div className="align-content navbar">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center "
          >
            C
          </NavLink>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="w-6 h-6" />

            </label>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-200 rounded-box w-52"
              >
                {/* Navlinks */}
<NavLinks/>
              </ul>
          </div>
        </div>
        <div className="navbar-center">
                {/* Navlinks */}
<ul className="menu menu-horizontal gap-x-1 hidden lg:flex">
<NavLinks/>
</ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/card" className="btn btn-circle btn-md ml-4">
<div className="indicator">
  <BsCart3  className="w-6 h-6"/>
  <span className="badge badse:sm badge-primary indicator-item">
    10
  </span>
</div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
