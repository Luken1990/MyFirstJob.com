import { useState } from 'react';
import * as MdIcons from 'react-icons/md';

export const FooterNav = ({ data }) => {
  const { heading, subNav } = data;
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="col-span-12 sm:col-span-3">
      <ul>
        <li>
          <div className="border-y sm:border-none">
            <nav className="">
              <h3 className="relative p-4 text-left font-semibold capitalize text-white">
                {heading}
                <i
                  onClick={() => setShowNav(!showNav)}
                  className="absolute right-4 inline-block cursor-pointer sm:hidden"
                >
                  <MdIcons.MdOutlineKeyboardArrowDown
                    className={`${showNav ? 'rotate-180' : 'rotate-[360deg]'}`}
                  />
                </i>
              </h3>
              <ul
                className={` overflow-hidden ${
                  showNav ? ['h-[129px]'] : 'h-0'
                } px-4 font-light duration-300 sm:h-auto`}
              >
                {subNav
                  ? subNav.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="mb-2 text-sm text-white hover:text-secondary"
                        >
                          <a href={item.link}>{item.name}</a>
                        </li>
                      );
                    })
                  : null}
              </ul>
            </nav>
          </div>
        </li>
      </ul>
    </div>
  );
};
