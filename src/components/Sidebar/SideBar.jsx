import {
  FaHome,
  FaHeartbeat,
  FaMoneyBill,
  FaUser,
  FaBook,
  FaShareAlt,
  FaCar,
  FaServicestack,
  FaLaptop,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import ProfileCard from "./ProfileCard";
import { useSidebar } from "../SideBarContext";
import { useState } from "react";

const routes = [
  { path: "/home", name: "Home", icon: <FaHome /> },
  {
    name: "Student",
    icon: <FaUser />,
    subRoutes: [
      { name: "Attendance" },
      { name: "Grade Book" },
      { name: "Timetable" },
      { name: "Course Site" },
      { name: "Enrolled Courses" },
      { name: "Provisional Transcript" },
    ],
  },
  {
    name: "Students Health",
    icon: <FaHeartbeat />,
    subRoutes: [
      { name: "Health Declaration Form" },
      { name: "Student Health Insurance" },
      { name: "Health Appraisal Form" },
    ],
  },
  {
    name: "Students Financial",
    icon: <FaMoneyBill />,
    subRoutes: [
      { name: "Fee Challan" },
      { name: "Miscellaneous Challan" },
      { name: "Tax Deduction Certificate" },
      { name: "Fee Challan Request" },
    ],
  },
  { name: "ePortal", icon: <FaLaptop /> },
  {
    name: "Student Services",
    icon: <FaServicestack />,
    subRoutes: [
      { name: "Gym Registration" },
      { name: "Current Subscriptions" },
      { name: "University Leaving Form" },
      { name: "Counseling Form" },
    ],
  },
  {
    name: "SharePoint",
    icon: <FaShareAlt />,
    subRoutes: [
      { name: "Student Intranet" },
      { name: "Job Portal" },
    ],
  },
  {
    name: "Library",
    icon: <FaBook />,
    subRoutes: [
      { name: "Room Allocation" },
      { name: "Room Allocation LIST" },
    ],
  },
  {
    name: "Car Pooling",
    icon: <FaCar />,
    subRoutes: [
      { name: "Register Request" },
      { name: "Search a Ride" },
      { name: "Ride Request" },
      { name: "Car Pooling Feedback" },
    ],
  },
];

const SideBar = ({ children }) => {
  const { isOpen, toggleSidebar } = useSidebar(); // Use isOpen and toggleSidebar from context
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (name) => {
    setActiveMenu((prevMenu) => (prevMenu === name ? null : name));
  };

  const showAnimation = {
    hidden: { width: 0, opacity: 0, transition: { duration: 0.5 } },
    show: { opacity: 1, width: "auto", transition: { duration: 0.5 } },
  };

  return (
    <div className="main-container">
      {/* Sidebar with conditional styling for overlay on mobile */}
      <motion.div
        animate={{
          width: isOpen ? "200px" : "45px",
          transition: { duration: 0.5, type: "spring", damping: 10 },
        }}
        className={`sidebar fixed sm:relative ${
          isOpen ? "block" : "hidden sm:block"
        } bg-[#2c3e50] sm:bg-inherit sm:z-auto z-50`} // Mobile overlay when open
      >
        {isOpen && <ProfileCard />}

        <section className="routes">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SidebarMenu
                  key={index}
                  route={route}
                  showAnimation={showAnimation}
                  isOpen={isOpen}
                  isActive={activeMenu === route.name}
                  handleMenuClick={handleMenuClick}
                  sidebarCollapsed={!isOpen}
                />
              );
            }
            return (
              <div
                key={index}
                className={`link ${isOpen ? "" : "collapsed-link"}`}
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </section>

        {/* Close Sidebar on Mobile */}
      </motion.div>

      <main>{children}</main>
    </div>
  );
};

export default SideBar;
