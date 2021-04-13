import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import { MetCircleBtn, MetCircleBtnProps } from "./index";

import { action } from "@storybook/addon-actions";
import { withKnobs, color, text } from "@storybook/addon-knobs";

import arrowIcon from "../../assets/icons/arrow-icon.js";

import mdx from "./CircleBtn.mdx";

export default {
  title: "Example/CircleBtn",
  component: MetCircleBtn,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

export const Default = () => {
  const CircleBtnProps = (): MetCircleBtnProps => ({
    onClick: action("onClick"),
    bgColor: color("Background color", undefined),
    defaultIconColor: color("Default icon color", undefined),
    hoverIconColor: color("Hover icon color", undefined),
    borderColor: [
      color("Border unhovered", undefined),
      color("Border hovered", undefined),
    ],
    shadowHover: text("Shadow hover", undefined),
    icon: arrowIcon,
  });

  return <MetCircleBtn {...CircleBtnProps()} />;
};
