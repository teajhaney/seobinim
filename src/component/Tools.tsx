"use client";
import { tools } from "@/constant";
import { motion } from "motion/react";
import React from "react";

const Tools = () => {
  return (
    <section className=" section " id="tools">
      <div className="contentMargin space-y-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5">
          <span className="text-secondary text-sm tracking-[0.2em] uppercase mb-4 block font-medium">
            Expertise
          </span>
          <h2 className="font-bold text-2xl">Technical Proficiency</h2>
          <div className="h-1 w-24 gradient-bg mb-6" />
          <p className="text-sm text-gray">
            A comprehensive toolkit refined through years of practical
            experience
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
          {tools.map(({ id, title }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                translateY: -2,
                boxShadow: "0 0px 5px #f68338",
              }}
              className="group relative  rounded-xl backdrop-blur-sm thin-border !border-gray p-6 md:p-8 transition-all duration-300">
              <div className="relative z-10">
                <p className="font-medium tracking-wide mb-2 text-lg">
                  {title}
                </p>
                <div className="h-[2px] w-8 gradient-bg transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
