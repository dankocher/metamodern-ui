import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetCircleBtn, { MetTabListProps } from "./index";

import { withKnobs, color, boolean } from "@storybook/addon-knobs";

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
    value: "Менеджер",
    onChange: (_, __) => {},
    notifications: 2,
  },
  {
    id: "2",
    value: "Не КонтентНе Контент Не Контент",
    onChange: (_, __) => {},
    notifications: 3,
  },
  {
    id: "3",
    value: "Администратор Администратор Администратор",
    onChange: (_, __) => {},
    notifications: 0,
  },
];

export const Default = () => {
  const TabListProps = (): MetTabListProps => ({
    items,
    selectedBgColor: color("Selected tab background color", undefined),
    defaultBgColor: color("Not selected tab background color", undefined),
    borderColor: color("Border color", undefined),
    children: <div>{"{children}"}</div>,
    notificationColor: color("Notification color", undefined),
    notificationBgColor: color("Notification background color", undefined),
  });

  return <MetCircleBtn {...TabListProps()} />;
};
