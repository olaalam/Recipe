import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

export default function Layout() {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="flex-1 bg-body p-4 ml-[20%]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}
