import React, { useState } from 'react';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

export const Navbar = () => {
  const [show, setShow] = useState(true);

  const navList = [
    {
      key: 1,
      menuItem: 'find jobs',
      link: '#',
    },
    {
      key: 2,
      menuItem: 'company reviews',
      link: '#',
    },
    {
      key: 3,
      menuItem: 'about us',
      link: '#',
    },
  ];

  return (
    <nav className="border-lightGrey w-full border-b-[1px] bg-slate-100">
      <div className="container mx-auto hidden items-center justify-between px-4 sm:flex">
        <div className=" inline-flex items-center gap-2">
          <MdIcons.MdPersonSearch size={20} />
          <h3 className=" font-bold text-primary">MFJ</h3>
        </div>
        <div>
          <ul className=" inline-flex gap-3 capitalize">
            {navList.map(({ key, menuItem, link }) => {
              return (
                <li key={key} className="px-4 py-4">
                  <a
                    className="box-border py-4 text-sm hover:border-b-2 hover:border-secondary hover:text-secondary"
                    href={link}
                  >
                    {menuItem}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="inline-flex items-center gap-3">
          <AiIcons.AiOutlineBell size={20} />
          <figure className="h-10 w-10 overflow-hidden rounded-full">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </figure>
        </div>
      </div>

      <div id="mobile-nav" className="overflow-hidden bg-slate-100 sm:hidden">
        <div className="px-4 py-4">
          <FaIcons.FaBars
            className=" cursor-pointer hover:text-secondary"
            onClick={() => setShow(!show)}
            size={20}
          />
        </div>
        <ul
          className={`w-full text-center capitalize duration-300 ${
            show ? `h-[169px]` : 'h-0'
          }`}
        >
          {navList.map(({ key, menuItem, link }) => {
            return (
              <li key={key} className="py-4">
                <a
                  className=" box-border py-4 text-sm hover:border-b-2 hover:border-secondary hover:text-secondary"
                  href={link}
                >
                  {menuItem}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
