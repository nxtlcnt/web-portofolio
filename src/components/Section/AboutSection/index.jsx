"use client";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Education from "@/components/Content/Education";
import Work from "@/components/Content/Work";
import Skill from "@/components/Content/Skill";
import Introduction from "@/components/Content/Introduction";
import { CATEGORIES } from "./data";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: { duration: 0.5 },
};

const ContentComponent = React.memo(({ activeCategory }) => {
  switch (activeCategory) {
    case "introduction":
      return <Introduction />;
    case "work":
      return <Work />;
    case "skill":
      return <Skill />;
    case "education":
      return <Education />;
    default:
      return null;
  }
});

ContentComponent.displayName = "ContentComponent";

const AboutSection = () => {
  const [activeCategory, setActiveCategory] = useState("introduction");

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  return (
    <div
      id="about"
      className="header-overlay bg-black flex flex-col items-center justify-center overflow-hidden pt-[20px] lg:pt-[20px] mx-5 lg:mx-0"
    >
      <section
        className="bg-black flex flex-col items-center justify-center pt-[100px] pb-[50px] lg:pb-[60px] overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div className="flex flex-col items-center gap-5 pb-32 w-full overflow-y-auto">
          <motion.div
            className="mb-5 flex w-full items-center justify-start gap-4 lg:w-[776px]"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="font-semibold text-secondary md:text-6xl ml-5 lg:ml-0">
              About me
            </h1>
            <div className="h-[1px] w-32 bg-white md:w-96"></div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-5 md:flex-row md:items-start md:gap-8 w-full"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <div className="flex w-full md:w-auto flex-row overflow-x-auto text-sm text-primary md:flex-col md:overflow-auto">
              {CATEGORIES.map((category) => (
                <button
                  className={`w-auto whitespace-nowrap px-4 py-3 text-start text-xs transition-all duration-300 hover:bg-gray-500 hover:text-accent md:py-3 md:px-5 md:text-base ${
                    activeCategory === category.value
                      ? "bg-gray-600 text-accent"
                      : "text-primary"
                  }`}
                  onClick={() => handleCategoryChange(category.value)}
                  key={category.value}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <motion.div
              className="w-full md:w-[490.78px] lg:w-[600px] h-full overflow-y-auto"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeInUp}
            >
              <ContentComponent activeCategory={activeCategory} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
