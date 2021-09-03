import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetCircleBtn, { MetTabListProps } from "./index";

import { action } from "@storybook/addon-actions";
import { withKnobs, color, text } from "@storybook/addon-knobs";

// import mdx from "./CircleBtn.mdx";

export default {
  title: "Example/TabList",
  component: MetCircleBtn,
  decorators: [withKnobs],
  parameters: {
    docs: {
      //   page: mdx,
    },
  },
} as Meta;

const items = [
  {
    id: "1",
    value: "Енеджер",
    onClick: () => {},
  },
  {
    id: "2",
    value: "Не Контент Не Контент Не Контент",
    onClick: () => {},
  },
  {
    id: "3",
    value: "Администратор Администратор Администратор",
    onClick: () => {},
  },
];

export const Default = () => {
  const TabListProps = (): MetTabListProps => ({
    items,
    selectedBgColor: color("Selected tab background color", undefined),
    defaultBgColor: color("Not selected tab background color", undefined),
    borderColor: color("border color", undefined),
  });

  return <MetCircleBtn {...TabListProps()} />;
};
