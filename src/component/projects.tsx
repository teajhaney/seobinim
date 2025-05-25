import { projects } from "@/constant";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <section className=" section " id="projects">
      <div className="contentMargin space-y-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-5">
          <h2 className="text-2xl md:text-3xl font-clashbold text-white mb-6 tracking-tight">
            Projects
            <span className="inline-block ml-4 transform hover:scale-110 transition-transform">
              🚀
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#ef4444] to-[#f87171] mb-6" />
          <p className=" text-base md:text-l ">
            Showcasing my latest works and experiments in tech
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ name, description, link, language }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative bg-[#200406]/80 rounded-lg overflow-hidden border border-[#ef444410] backdrop-blur-md">
              {/* Hover glow layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ef4444]/10 to-[#f87171]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card content */}
              <div className="relative p-8 flex flex-col h-full">
                <h3 className="text-white text-2xl font-clashbold mb-3">
                  {name}
                </h3>

                <p className="text-[#ef4444] text-sm font-medium mb-4">
                  {language}
                </p>

                <p className=" text-sm flex-grow">
                  {description}
                </p>

                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center group/link">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-white hover:text-[#f87171] transition-colors">
                    <span className="text-sm font-medium">View Project</span>
                    <MdArrowOutward className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>

                {/* Bottom hover line */}
                <div className="h-[2px] w-full bg-gradient-to-r from-[#ef4444]/50 to-[#f87171]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 absolute bottom-0 left-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
