import { motion, AnimatePresence } from "framer-motion";

const SidebarMenu = ({ route, showAnimation, isOpen, isActive, handleMenuClick, sidebarCollapsed }) => {
  return (
    <>
      <div className="menu" onClick={() => handleMenuClick(route.name)}>
        <div className="menu_item">
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
        {isOpen && (
          <motion.div className="toggle-icon">
            {isActive ? '-' : '+'} {/* Display + or - based on isActive */}
          </motion.div>
        )}
      </div>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={{
              hidden: { opacity: 0, height: 0 },
              show: { opacity: 1, height: "auto" },
            }}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`menu_container ${sidebarCollapsed ? 'overlay-menu' : ''}`} // Add 'overlay-menu' if sidebar is collapsed
          >
            {route.subRoutes.map((subRoute, i) => (
              <div key={i} className="link">
                <div className="link_text">{subRoute.name}</div>
                {subRoute.subItems && (
                  <div className="nested_menu">
                    {subRoute.subItems.map((subItem, j) => (
                      <div key={j} className="link nested_link">
                        <div className="link_text">{subItem.name}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarMenu;
