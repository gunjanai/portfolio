import React from "react";
import { motion } from "framer-motion";

function Animate({ children, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 100 : -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        once: true,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default Animate;
