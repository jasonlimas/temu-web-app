import React from 'react'
import { navLinks } from '../constants';
import { temulogoinvert } from '../assets';

const Navbar = () => {
  return (
    <div>
      <nav className='w-full flex py-6 lg:px-28 lg:py-16 justify-between items-center navbar'>
        <img src={temulogoinvert} alt='logo' className='w-24 lg:w-36 h-auto' />

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          <li key={navLinks[3].id} className={`font-point text-lg mr-12 cursor-pointer text-white`}>
            <a href={`#${navLinks[3].id}`}>
              {navLinks[3].title}
            </a>
          </li>

          <li key={navLinks[4].id} className={`font-point text-lg mr-0 cursor-pointer text-white`}>
            <a href={`#${navLinks[4].id}`}>
              {navLinks[4].title}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar