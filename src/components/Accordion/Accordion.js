import React, { useState } from "react";
import "./Accordion.css";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
const Accordion = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const handleAccordionClick = () => {
    setAccordionOpen(!isAccordionOpen);
    setActiveTab(null);
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const iconVariants = {
    downIcon: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
    upIcon: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleAccordionClick}>
        {!isAccordionOpen && (
          <motion.div
            variants={iconVariants}
            animate="downIcon"
            className="accordion-icon__wrapper"
          >
            <MdKeyboardDoubleArrowDown
              className={`accordion-icon ${isAccordionOpen ? "rotate" : ""}`}
            />
            <span>Open here</span>
          </motion.div>
        )}

        {isAccordionOpen && (
          <motion.div variants={iconVariants} animate="upIcon">
            <MdKeyboardDoubleArrowUp /> <span>Close here</span>
          </motion.div>
        )}
      </div>
      {isAccordionOpen && (
        <div className="accordion-content">
          <div className="tabs-container">
            <div
              className={`accordion-tab ${activeTab === 0 ? "active" : ""}`}
              onClick={() => handleTabClick(0)}
            >
              Version
            </div>
            <div
              className={`accordion-tab ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              Login
            </div>
          </div>
          <div className="tab-content">
            {activeTab === 0 && (
              <div>
                <p>Version: 1.0.0</p>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <p>Username: your_username</p>
                <p>Password: your_password</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
