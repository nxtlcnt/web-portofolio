"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const NavItems = ({ isNavOpen, setIsNavOpen }) => {
  // Inisialisasi state dengan nilai default
  const [isMobile, setIsMobile] = useState(false);

  const navVariant = useMemo(
    () => ({
      open: {
        clipPath: isMobile
          ? `circle(1920px at calc(100% - 40px) 40px)`
          : `circle(1920px at calc(100% - 40px) 40px)`,
        transition: {
          type: isMobile ? "tween" : "spring",
          stiffness: 400,
          damping: 40,
        },
      },
      closed: {
        clipPath: isMobile
          ? `circle(0px at calc(100% - 35px) 35px)`
          : `circle(0px at calc(100% - 120px) 35px)`,
        transition: {
          delay: 0.5,
          type: "spring",
          stiffness: 400,
          damping: 40,
        },
      },
    }),
    [isMobile]
  );

  const itemVariants = {
    open: (custom) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        delay: custom,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    }),
    closed: {
      opacity: 0,
      x: -80,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const handleItemClick = () => setIsNavOpen(false);

  useEffect(() => {
    const updateScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  return (
    <motion.div
      className="fixed z-[45] w-full h-screen flex items-center justify-center backdrop-blur-sm transition-all ease duration-700 overflow-hidden"
      variants={navVariant}
      animate={isNavOpen ? "open" : "closed"}
      initial={false}
    >
      <div className="relative bg-white flex flex-col items-start justify-center flex-grow min-h-[100vh] min-w-[100vw] px-5 md:px-24">
        <div className="flex flex-col items-start justify-center space-y-8 flex-grow my-auto mx-0">
          {["home", "about", "project", "contact"].map((item, index) => (
            <ScrollLink key={item} to={item} smooth duration={500} offset={-70}>
              <div
                onClick={handleItemClick}
                className="text-6xl md:text-8xl font-bold text-black"
              >
                <motion.h2
                  className="text-black"
                  variants={itemVariants}
                  animate={isNavOpen ? "open" : "closed"}
                  custom={0.2 + index * 0.1}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.h2>
              </div>
            </ScrollLink>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NavItems;
