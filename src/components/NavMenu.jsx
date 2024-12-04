import React from 'react'

import { Navbar } from "flowbite-react";


function NavMenu() {
  return (
    <Navbar fluid rounded className=' bg-slate-400'>
    <Navbar.Brand href="https://flowbite-react.com">
      <img src="/favicon.ico" className="mr-3 h-6 sm:h-9 rounded-full" alt="Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Portfolio</span>
    </Navbar.Brand>
    <div className="flex md:order-2">
     
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="#About">About</Navbar.Link>
      <Navbar.Link href="#Contact">Contact</Navbar.Link>
      <Navbar.Link href="#project">Projects</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavMenu
