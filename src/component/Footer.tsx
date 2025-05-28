'use client';
import React, { useEffect, useState } from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';
const Footer = () => {
  const [time, setTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const displayTime = mounted ? time : '';
  return (
    <footer className="py-10">
      <div className="contentMargin">
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-row items-center lg:gap-[4px]">
            <span>
              <AiOutlineCopyright className="size-[18px] md:size-[20px] text-accent" />
            </span>
            <p className=" md:text-xl text-lg font-medium">
              Seobinim <span className=" text-[14px] lg:text-base">{new Date().getFullYear()}</span>
            </p>
          </div>
          <a
            className="text-xs text-tertiary hover:underline hover:decoration-secondary  cursor-pointer"
            href="https://github.com/teajhaney"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Github @teajhaney
          </a>
          <p className="transition-all duration-300 text-end text-sm lg:text-base mt-1">
            {displayTime}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
