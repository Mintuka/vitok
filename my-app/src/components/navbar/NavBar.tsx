import clsx from "clsx";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
        <div>
        <nav className='flex justify-between w-full bg-repeat'>
          <div className="flex mx-3 w-1/4 items-center text-xl font-semibold"><img className='w-20 h-16' src='Screenshot (65).png'/> <span>LandWind</span></div>
          <div className='flex justify-evenly items-center flex-1 mx-1 font-semibold'>
            <div>Home</div>
            <div>Campany</div>
            <div>MarketPlace</div>
            <div>Features</div>
            <div>Team</div>
            <div>Contact</div>
          </div>
          <div className="flex justify-end items-center mx-1 w-1/4">
            <div className='flex items-center'>
              <button className={
                clsx(
                  'btn',
                  'flex border'
                )
              }> 
                <div>
                  <AiOutlineStar size={20} className='bottom-2'/>
                </div>
                <span className='mx-1 font-semibold'>Star</span>
              </button>
              <button className={
                clsx(
                  'social',
                  'font-semibold border'
                  )
                  }>316</button>
            </div>
            <button className="m-2 py-2 px-5 text-white bg-purple-700 hover:bg-purple-800 rounded-md">Download</button>
          </div>
        </nav>

        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span className="font-semibold text-xl tracking-tight">Vitok</span>
            </div>
            <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    <Link to={"/"}>Home</Link>
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                MyPosts
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    <Link to={"/form"}>Post</Link>
                </a>
            </div>
            <div className="mx-2">
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    <Link to={"/signin"}>Log In</Link>
                </a>
            </div>
            <div className="mx-2">
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    <Link to={"/signup"}>Sign Up</Link>
                </a>
            </div>
            </div>
        </nav>
        </div>

    )
};

export default NavBar;