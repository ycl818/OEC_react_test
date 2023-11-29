import React, { useState } from "react";
import "./Accordion.css";
import { MdArrowForwardIos } from "react-icons/md";

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

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleAccordionClick}>
        <MdArrowForwardIos
          className={`accordion-icon ${isAccordionOpen ? "rotate" : ""}`}
        />

        {!isAccordionOpen && <span>Open here</span>}
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
