import React from 'react';
import { Link, Outlet } from 'react-router';
import Logo from '../Components/Logo/Logo';
import { FaAlignLeft, FaCreditCard, FaHome, FaParachuteBox } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open max-w-7xl mx-auto">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-base-300">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
        {/* Sidebar toggle icon */}
        <FaAlignLeft />
      </label>
      <div className="px-4 flex items-center gap-5"> <Logo></Logo>  <p className='text-3xl font-bold mt-4'>Dashboard</p> </div>
    </nav>
    {/* Page content here */}
    <Outlet></Outlet>
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
      {/* Sidebar content here */}
      <ul className="menu w-full grow">
        {/* List item */}
        <li>
          <Link to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            {/* Home icon */}
            <FaHome />
            <span className="is-drawer-close:hidden">Homepage</span>
          </Link>
        </li>

        {/* our dashboard links  */}

        <li>
            <Link to="/dashboard/my-parcels" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Parcels">
            <FaParachuteBox />
             <span className="is-drawer-close:hidden">My Parcels</span>
            </Link>
        </li>

        <li>
            <Link to="/dashboard/payments-history" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Payment History">
           <FaCreditCard />
             <span className="is-drawer-close:hidden">Payment History</span>
            </Link>
        </li>

        {/* List item */}
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
            {/* Settings icon */}
            <IoSettings />
            <span className="is-drawer-close:hidden">Settings</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default DashboardLayout;