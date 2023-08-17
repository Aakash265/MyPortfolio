import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {navLinks} from '../constants'
import { urls } from '../constants'

import {logo} from '../assets'
import { github } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [top, setTop] = useState('0px')
  return (
    <div>
      <nav className="bg-neutral-600 w-full text-white flex items-center fixed px-6 sm:px-16 py-2 sm:py-5 z-10">
        <div className="w-full flex justify-between items-center mx-auto max-w-7xl">
          <Link
            to="/"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2"

          >
            <img src={logo} alt="logo" className="w-8 h-8 object-contain rounded-full mr-3"/>
            <p className="text-white sm:text-[20px] font-bold cursor-pointer flex">Aakash
              <span className="sm:block hidden">
                &nbsp; | &nbsp;Web Developer
              </span>
            </p>
          </Link>
          <ul className="list-none flex lg:gap-10 sm:gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => setActive(link.title)}
                className={`${active === link.title
                  ? "text-white"
                  : "text-stone-300"} hover:text-white text-[18px] font-medium cursor-pointer`}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            <li><a href="https://github.com/Aakash265"><img src={github} className="w-7 h-7 object-contain rounded-full" alt="Github" /></a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar