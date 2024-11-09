import React, { useState } from "react";
import { FaBars, FaDoorOpen, FaEllipsisH } from "react-icons/fa";
import { useSidebar } from "./SideBarContext";
import { motion, AnimatePresence } from "framer-motion";

const DashboardHeader = () => {
  const { toggleSidebar } = useSidebar();
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded/collapsed state of the header
  const toggleAccordion = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-[#2c3e50] text-white z-[5000]">
      {/* Header Top Section */}
      <div className="h-[56px] flex items-center justify-between px-4">
        <div className="flex items-center gap-14 sm:flex-row flex-row-reverse">
          <img
            src={`${process.env.PUBLIC_URL}/assets/bnuLogo-s.png`}
            alt="Bnu Logo"
            className="w-[30px] h-[49px] ml-8"
          />
          <div className="bars cursor-pointer text-white" onClick={toggleSidebar}>
            <FaBars />
          </div>
        </div>

        {/* Three-dot Icon for Accordion Toggle */}
        <div className="cursor-pointer" onClick={toggleAccordion}>
          <FaEllipsisH className="text-lg" />
        </div>
      </div>

      {/* Accordion Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-[#2c3e50] px-4 pb-4"
          >
            <div className="flex flex-col items-center mt-2 text-white text-center">
              {/* Replace Icon with Local Image */}
              <img
                src={`${process.env.PUBLIC_URL}/assets/pfp.jpg`}
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
              <span className="mt-2 text-lg">Abdul Hadi</span>

              {/* Logout Option */}
              <div
                className="mt-4 px-4 py-2 flex items-center justify-center text-gray-800 bg-white rounded-md cursor-pointer transition-colors hover:bg-gray-200"
                onClick={() => console.log("Logout clicked")}
              >
                <FaDoorOpen className="mr-2 text-gray-800" />
                <span>Logout</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardHeader;
