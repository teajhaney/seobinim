'use client';

import Link from 'next/link';
import { AnimatedWordRotator } from '@/component';
import { links } from '@/constant';

const Hero = () => {
  return (
    <section
      id="home"
      className="   h-[600px]  lg:h-[800px] bg-[url('/images/dev.jpg')] bg-cover bg-center thin-border-b"
    >
      <div className="pt-32 pb-10  bg-black/60 h-full">
        <div className="contentMargin flexcol-center h-full space-y-5 text-text text-center">
          <h1 className="    font-bold text-4xl lg:text-6xl inline">
            <span className=" overflow-hidden text-end">
              <AnimatedWordRotator />
            </span>{' '}
            Software Developer
          </h1>

          {/* <h2 className="font-bold text-lg lg:text-2xl ">
              I craft reliable, scalable products with user experience at the forefront.
            </h2> */}
          <h2 className="font-bold text-lg lg:text-2xl ">
            Tired of clunky website? I can help you turn clunky website into clean, accessible,
            high-performing experience that users love and brands grow with.
          </h2>
          <div className="space-y-5 md:w-[500px]">
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
          <a
            href="/cv/my-cv.pdf"
            download
            className="px-5 py-2 rounded-full hover:shadow-[0px_0px_10px_#f68338] cursor-pointer transition-all duration-300 bg-secondary text-white"
          >
            <p className="text-xs md:text-sm font-inter">Download CV</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
