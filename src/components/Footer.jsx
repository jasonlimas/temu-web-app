import React from 'react';
import { navLinks } from '../constants';
import { temulogoinvert } from '../assets';

const Footer = () => {
  return (
    <div>
      <footer className="w-full flex flex-col sm:flex-row py-10 lg:px-28 lg:py-16 justify-between items-center">
        {/* Logo */}
        <img
          src={temulogoinvert}
          alt="logo"
          className="w-24 lg:w-36 h-auto mb-4 sm:mb-0 hidden sm:block"
        />

        {/* Links */}
        <ul className="list-none sm:flex sm:justify-end items-center flex-1">
          <li
            key={navLinks[3].id}
            className={`font-point text-lg cursor-pointer text-white py-2 sm:mr-12 mr-0 mb-2 sm:mb-0 text-center`}
          >
            <a href={`#${navLinks[3].id}`}>{navLinks[3].title}</a>
          </li>

          <li
            key={navLinks[4].id}
            className={`font-point text-lg cursor-pointer text-white py-2 text-center`}
          >
            <a href={`#${navLinks[4].id}`}>{navLinks[4].title}</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
