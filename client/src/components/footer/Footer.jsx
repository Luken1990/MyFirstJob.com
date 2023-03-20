import { FooterNav } from './FooterNav';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';

export const Footer = () => {
  const jobNav = {
    heading: 'Jobs',
    subNav: [
      {
        name: 'contact us',
        link: '#',
      },
      {
        name: 'career Advice',
        link: '#',
      },
      {
        name: 'work from home',
        link: '#',
      },
      {
        name: 'average salary checker',
        link: '#',
      },
    ],
  };

  const courseNav = {
    heading: 'Course',
    subNav: [
      {
        name: 'help',
        link: '#',
      },
      {
        name: 'contact us',
        link: '#',
      },
      {
        name: 'find course',
        link: '#',
      },
      {
        name: 'free course',
        link: '#',
      },
    ],
  };
  const moreInfoNav = {
    heading: 'More Info',
    subNav: [
      {
        name: 'about us',
        link: '#',
      },
      {
        name: 'career at MJF',
        link: '#',
      },
      {
        name: 'press office',
        link: '#',
      },
    ],
  };

  const socials = [
    {
      social: 'facebook',
      icons: <FaIcons.FaFacebook />,
      link: '#',
    },
    {
      social: 'instagram',
      icons: <FaIcons.FaInstagram />,
      link: '#',
    },
    {
      social: 'twitter',
      icons: <FaIcons.FaTwitter />,
      link: '#',
    },
  ];

  return (
    <footer className=" bg-primary">
      <div className="container mx-auto py-8">
        <div className="flex flex-col justify-between gap-y-4 px-4 text-lightgrey sm:flex-row">
          <div className="pr-2">
            <h2 className="mb-2 text-2xl">Join our Newsletter</h2>
            <p className="text-sm">
              Get alerts on the latest job opportunities
            </p>
          </div>
          <div className="flex flex-col gap-y-2 rounded-md border border-slate-200 p-4 sm:flex-row sm:p-2">
            <div className="flex items-center">
              <span className="p-2 ">
                <SiIcons.SiMinutemailer size={20} />
              </span>
              <input
                type="text"
                className="w-full border-none bg-primary text-sm focus:outline-0"
                placeholder="Enter your email"
              />
            </div>
            <button className="text-sm">Subscribe</button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12">
          <FooterNav data={jobNav} />
          <FooterNav data={courseNav} />
          <FooterNav data={moreInfoNav} />
          <div className="col-span-12 p-4 text-white sm:col-span-3">
            <div className="mb-8 flex gap-8">
              {socials.map((social) => {
                return (
                  <a
                    key={social.social}
                    className="text-4xl hover:text-secondary"
                    href={social.link}
                  >
                    {social.icons}
                  </a>
                );
              })}
            </div>
            <p className="text-xs">COPYRIGHT © myfirstjob.co.uk 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
