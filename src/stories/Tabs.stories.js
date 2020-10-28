import React from "react";
import Tabs from "../components/Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    {
      key: "item-1",
      label: "Menu 1",
    },
    {
      key: "item-2",
      label: "Menu 2",
    },
  ],
};
