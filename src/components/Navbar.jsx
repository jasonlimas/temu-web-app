import React, { useState } from 'react'
import { navLinks } from '../constants';
import { temulogoinvert, menu, close } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav className='w-full flex py-6 lg:px-28 lg:py-16 justify-between items-center navbar'>
        <img src={temulogoinvert} alt='logo' className='w-24 lg:w-36 h-auto' />

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          <li key={navLinks[0].id} className={`font-point text-lg mr-12 cursor-pointer text-white`}>
            <a href={`#${navLinks[0].id}`}>
              {navLinks[0].title}
            </a>
          </li>

          <li key={navLinks[1].id} className={`font-point text-lg mr-0 cursor-pointer text-white`}>
            <a href={`#${navLinks[1].id}`}>
              {navLinks[1].title}
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-auto object-contain'
            onClick={() => setToggle((prev) => (!prev))}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-point text-lg ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} cursor-pointer text-white`}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar