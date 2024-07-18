'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  [
    'ANY SUFFICIENTLY',
    'ADVANCED TECHNOLOGY',
    'IS INDISTINGUISHABLE',
    'FROM MAGIC',
  ],
  ['TO INFINITY', 'AND BEYOND'],
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }, // Ensure an exit animation
};

const Quote = () => {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);

  //@ts-ignore
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);

  const quote = quotes[day % quotes.length];
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prevLine) => (prevLine + 1) % quote.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quote]);

  return (
    <div>
      <AnimatePresence mode='wait'>
        <motion.h1
          key={currentLine}
          variants={itemVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          transition={{ duration: 1 }}
        >
          {quote[currentLine]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default Quote;
