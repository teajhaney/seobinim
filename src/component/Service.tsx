'use client';
import { services } from '@/constant';
import { motion } from 'motion/react';
import React from 'react';

const Service = () => {
  return (
    <section className=" section " id="services">
      <div className="contentMargin space-y-10">
        {' '}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="space-y-5"
        >
          <h1 className="font-bold text-2xl">
            {' '}
            Services{' '}
            <span
              role="img"
              aria-label="fire"
              className="inline-block ml-4 transform hover:scale-110 transition-transform"
            >
              🔥
            </span>
          </h1>
          <div className="h-1 w-24 gradient-bg mb-6" />
          <p className="text-sm text-gray">
            Specialized in Software Development with a focus on building engaging and responsive
            user interfaces.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description, id }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: id * 0.05 }}
              whileHover={{
                scale: 1.015,
                translateY: -2,
                boxShadow: '0 0px 20px #f68338',
              }}
              className="group relative  rounded-lg overflow-hidden border thin-border transform-gpu will-change-transform"
            >
              {/* Soft hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Card Content */}
              <div className="relative p-8 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 rounded-md bg-secondary group-hover:bg-accent transition">
                    <Icon className="w-7 h-7 " />
                  </span>
                  <div className="h-px w-16 gradient-bg opacity-50" />
                </div>

                <h3 className=" text-xl  mb-2 tracking-wide">{title}</h3>

                <p className=" text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
