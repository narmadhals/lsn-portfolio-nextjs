"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex justify-start items-center relative">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.25, duration: 0.25, ease: "easeInOut" },
        }}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.25, duration: 0.25, ease: "easeInOut" },
          }}
          className="w-[250px] h-[330px] translate-x-7 xl:w-[300px] xl:h-[380px] absolute xl:-translate-x-10 xl:translate-y-5"
        >
          <Image
            src="/asset/photo2.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>

        {/* Rounded Square */}
        <motion.svg
          className="w-[300px] xl:w-[370px] h-[300px] xl:h-[370px] xl:-translate-x-20"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            x="3"
            y="3"
            width="500"
            height="500"
            rx="25"
            stroke="#ECB176"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
