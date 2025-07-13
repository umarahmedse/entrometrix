import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";

const FeatureFigure = ({ figure }) => {
  return (
    <>
      <motion.div
        className="bg-gray-150 w-full flex justify-center rounded-lg py-2 h-64"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="relative w-full h-full">
          <Image
            src={figure.src}
            alt="feature figure"
            fill
          />
        </div>
      </motion.div>
      <motion.div
        className="w-full mt-5"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        <p className="text-black text-xl dark:text-white">
          {figure.desc}
        </p>
      </motion.div>
    </>
  );
};

export default FeatureFigure;
