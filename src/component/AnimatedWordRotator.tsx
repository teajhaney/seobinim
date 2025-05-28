'use client';
import { words } from '@/constant';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const AnimatedWordRotator = () => {
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
        transition={{ duration: 1 }}
        className=" inline-block  w-fit text-secondary font-mono"
        style={{ top: 0, left: 0 }}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
};
