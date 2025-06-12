'use client';
import React from 'react';
import Link from 'next/link';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { navigationItems } from '@/constant';

const NavigationBar = () => {
  return (
    <nav className="fixed  top-0 left-0 h-20 custom-shadow  thin-border-b bg-background/90 w-full z-100">
      <header className="h-full contentMargin flex items-center justify-between">
        <a
          href={`#${navigationItems[0].item}`}
          onClick={e => {
            e.preventDefault();
            const target = document.querySelector(`#${navigationItems[0].link}`);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <h1 className="font-black text-xl text-secondary cursor-pointer">Seobinim</h1>
        </a>
        <ul className="h-full flex items-center gap-5 max-md:hidden">
          {navigationItems.map(({ item, link }, index) => (
            <li key={index}>
              <Link
                href={`/#${link}`}
                className="text-secondary font-medium text-lg cursor-pointer hover:underline hover:decoration-secondary"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={`/#${navigationItems[4].link}`}>
          <div className="px-5 py-3 bg-secondary rounded-sm flex-center font-medium text-sm gap-2 hover:shadow-[0px_0px_10px_#f68338] cursor-pointer  transition-all duration-300">
            {' '}
            <p>HIRE ME</p>
            <IoIosArrowRoundUp className="rotate-z-45" />
          </div>
        </Link>
      </header>
    </nav>
  );
};

export default NavigationBar;
