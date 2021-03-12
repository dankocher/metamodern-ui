import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { MetSquareIconBtn, MetSquareIconBtnProps } from "./index";

import { action } from "@storybook/addon-actions";
import { withKnobs, color, text } from "@storybook/addon-knobs";

import trashIcon from "../../assets/icons/trash-icon.js";

import mdx from "./SquareIconBtn.mdx";

export default {
  title: "Example/SquareIconBtn",
  component: MetSquareIconBtn,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

export const Default = () => {
  const SquareIconBtnProps = (): MetSquareIconBtnProps => ({
    onClick: action("onClick"),
    bgColor: color("Background color", undefined),
    hoverColor: color("Hover color", undefined),
    defaultIconColor: color("Default icon color", undefined),
    hoverIconColor: color("Hover icon color", undefined),
    icon: trashIcon,
  });

  return <MetSquareIconBtn {...SquareIconBtnProps()} />;
};
