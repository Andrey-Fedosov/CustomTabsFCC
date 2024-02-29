import React from "react";
import "./styles.css";
import { Tabs } from "./Tab";

export type TabsType = {
  label: string;
  content: string | any;
};

export function SomeRandomComponent() {
  return (
    <div>
      <h1>some random component</h1>
    </div>
  );
}

export function CustomTabs() {
  const tabs: TabsType[] = [
    {
      label: "Tab 1",
      content: "Tab 1 very interesting  content",
    },
    {
      label: "Tab 2",
      content: "Tab 2 very super  content",
    },
    {
      label: "Tab 3",
      content: <SomeRandomComponent />,
    },
  ];

  function handleChange(currentTabIndex: number) {
    // console.log(currentTabIndex);
  }

  return (
    <div>
      <Tabs
        tabsContent={tabs}
        onChange={(currentTabIndex: number) => handleChange(currentTabIndex)}
      />
    </div>
  );
}
