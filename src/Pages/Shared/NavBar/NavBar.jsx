import React from 'react';
import Logo from '../../../Components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { MdArrowOutward } from 'react-icons/md';

const NavBar = () => {
  const {user,logOut}=useAuth()
    const links = <>
        <li><NavLink to="/">Services</NavLink></li>
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/send-parcel">Send Parcel</NavLink></li>
        <li><NavLink to="/coverage">Coverage</NavLink></li>
        {
          user && <>
          <li><NavLink to="/dashboard/my-parcels">My Parcels</NavLink></li>
           </>
        }
    </>

    const handleLogOut =()=>{
      logOut()
      .then(res =>{
        toast.success("your logOut successfully")
        console.log(res);
      })
      .then(error =>{
        console.log(error);
      })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><Logo></Logo></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <button onClick={handleLogOut} className="btn">logOut</button> : <Link className='btn' to="/login">Login </Link>
    }

    <Link className='btn btn-primary text-black mx-3' to="/rider">Be a rider</Link>

    <div className="rounded-full bg-black text-white p-1.5">
    <MdArrowOutward size={28} />

    </div>
  </div>
</div>
    );
};

export default NavBar;