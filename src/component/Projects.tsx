'use client';
import { projects } from '@/constant';
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <section className=" section " id="projects">
      <div className="contentMargin space-y-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="font-bold text-2xl">
            Projects
            <span className="inline-block ml-4 transform hover:scale-110 transition-transform">
              🚀
            </span>
          </h2>
          <div className="h-1 w-24 gradient-bg mb-6" />
          <p className="text-sm text-gray">Showcasing my latest works and experiments in tech</p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map(({ name, description, link, language, image }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{
                scale: 1.015,
                translateY: -2,
                boxShadow: '0 0px 20px #f68338',
              }}
              className="group relative bg-background/80 rounded-lg overflow-hidden thin-border backdrop-blur-md"
            >
              <div
                className="h-56 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              {/* Hover glow layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card content */}

              <Link
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center group/link"
              >
                <div className="relative p-8 flex flex-col h-full">
                  <h3 className=" text-2xl  mb-3">{name}</h3>

                  <p className="text-accent text-sm font-medium mb-4">{language}</p>

                  <p className=" text-sm flex-grow">{description}</p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3  hover:text-secondary transition-colors"
                  ></motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-end">
          <Link href="/projectsPage">
            {' '}
            <h1 className="text-secondary cursor-pointer">View more &gt;&gt;&gt; </h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
