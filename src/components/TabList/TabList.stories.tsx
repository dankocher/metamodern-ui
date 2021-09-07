import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetCircleBtn, { MetTabListProps } from "./index";

import { withKnobs, color } from "@storybook/addon-knobs";

import mdx from "./TabList.mdx";

export default {
  title: "Example/TabList",
  component: MetCircleBtn,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

const items = [
  {
    id: "1",
    value: "Енеджер",
    onChange: (_, __) => {},
  },
  {
    id: "2",
    value: "Не Контент Не Контент Не Контент",
    onChange: (_, __) => {},
  },
  {
    id: "3",
    value: "Администратор Администратор Администратор",
    onChange: (_, __) => {},
  },
];

export const Default = () => {
  const TabListProps = (): MetTabListProps => ({
    items,
    selectedBgColor: color("Selected tab background color", undefined),
    defaultBgColor: color("Not selected tab background color", undefined),
    borderColor: color("border color", undefined),
    children: <div>{"Zdes children"}</div>,
  });

  return <MetCircleBtn {...TabListProps()} />;
};
