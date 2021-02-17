import React from "react";

import Switch from "../components/switch";

export default {
  title: "Example/Switch",
  component: Switch,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "HollowWORLD",
};
