'use client';

import { links, words } from '@/constant';
import Link from 'next/link';
import { Button } from '@/component';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const Hero = () => {
  return (
    <section
      id="home"
      className="   h-[600px]  lg:h-[800px] bg-[url('/images/dev.jpg')] bg-cover bg-center thin-border-b"
    >
      <div className="pt-32 pb-10  bg-black/60 h-full">
        <div className="contentMargin flexcol-center h-full space-y-5 text-text text-center">
          <h1 className="  overflow-hidden  font-bold text-4xl lg:text-6xl inline">
            <span className=" text-end">
              <AnimatedWordRotator />
            </span>{' '}
            Software Developer
          </h1>
          <div className="space-y-5 md:w-[500px]">
            <h2 className="font-bold text-lg lg:text-2xl ">
              I craft reliable, scalable products with user experience at the forefront.
            </h2>
            <h2 className="font-mono text-sm lg:text-lg">
              I’m <strong>Yusuf Tijani</strong> — a self-taught developer with over a year of
              experience, building real-world solutions. I currently specialize in web development,
              with a strong focus on performance and usability.
            </h2>
          </div>
          <div className="flex gap-2 text-secondary">
            {links.map(({ icon: Icon, link }, index) => (
              <Link key={index} href={link} target="_blank" rel="noreferrer">
                <div className="h-8 w-8 thin-border rounded-lg flex items-center justify-center hover:shadow-[0px_0px_10px_#f68338] cursor-pointer transition-all duration-300 ">
                  <Icon />
                </div>
              </Link>
            ))}
          </div>
          <Button
            onclick={() => {}}
            className=" px-5 py-2 rounded-full hover:shadow-[0px_0px_10px_#f68338] cursor-pointer  transition-all duration-300"
          >
            {' '}
            <p>Dowbload CV</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

function AnimatedWordRotator() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ duration: 1, }}
        className=" inline-block min-w-96 w-fit text-secondary font-mono"
        style={{ top: 0, left: 0 }}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}
