import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Accordion = ({ number, title, content, index, active, handleToggle }) => {
  return (
    <div className="w-full max-w-full">
      <div
        className="cursor-pointer p-4 flex justify-between items-center"
        onClick={handleToggle}
      >
        <h3 className="text-lg md:text-2xl font-Estedad-Medium flex justify-start items-center gap-5 dark:text-white transition-colors">
          <span className="bg-bg-main w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-xl md:rounded-2xl text-white text-lg md:text-3xl flex items-center justify-center">
            {number}
          </span>
          {title}
        </h3>
        <motion.span
          className="w-auto h-auto"
          initial={{ rotate: 0 }}
          animate={{ rotate: active ? -90 : 0 }}
        >
          <Image
            src="/svgs/arrowleftfaq.svg"
            width={10}
            height={6}
            alt="arrow-icon"
            onClick={handleToggle}
            className={"cursor-pointer max-md:scale-75 dark:invert"}
          />
        </motion.span>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: active ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden w-full max-w-[60rem]"
      >
        <div className="p-4 pt-0 w-10/12 mx-auto mb-4">
          <p className="max-md:text-sm dark:text-gray-300 transition-colors">{content}</p>
        </div>
      </motion.div>
      <hr className={"border-border-grey2 border-b-2 relative opacity-60"} />
    </div>
  );
};

export default Accordion;
