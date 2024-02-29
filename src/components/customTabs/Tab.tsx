import React from "react";
import { useState } from "react";
import "./styles.css";
import { TabsType } from "./CustomTabs";

export function Tabs(props: {
  tabsContent: TabsType[];
  onChange: (currentTabIndex: number) => void;
}) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleClick(index: number) {
    setCurrentTabIndex(index);
    props.onChange(index);
  }

  return (
    <div className="wrapper">
      <div className="heading"></div>
      <div className="content">
        {props.tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            key={tabItem.label}
            onClick={() => handleClick(index)}
          >
            <span
              className="label"
              //nClick={() =>}
            >
              {tabItem.label}
            </span>
          </div>
        ))}
      </div>
      <div className="content">
        {props.tabsContent[currentTabIndex] &&
          props.tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
