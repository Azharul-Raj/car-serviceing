import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { authContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { logOut, user } = useContext(authContext);
  const handleLogOut = () => {
    logOut()
    // localStorage.removeItem('token')
  }
  console.log(user);
  const menuItem = <>
      <li><Link to='/'>Home</Link></li>
      {/* <li><Link to='/checkout'>Checkout</Link></li> */}
      <li><Link to='/orders'>Orders</Link></li>
      <li><Link to='/'>Blog</Link></li>
      <li><Link to='/'>Contact</Link></li>
      {user?<li><Link onClick={handleLogOut} to='/'>Log Out</Link></li>:
      <li><Link to='/login'>Log in</Link></li>}
  </>
  return (
    <div className="navbar bg-base-100 items-center py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <img className="h-[86px] w-[100px]" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold">
          {menuItem}
        </ul>
      </div>
      <div className="navbar-end">
        {user?<img className="h-10 w-10 mr-5 rounded-full" src={user?.photoURL?user.photoURL:'https://images.unsplash.com/photo-1562860149-691401a306f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhhY2tlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} alt="" />:''}
        <button className="btn btn-outline btn-error">Appointment</button>
      </div>
    </div>
  );
};

export default Header;
