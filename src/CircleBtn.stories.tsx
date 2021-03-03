import React from "react";

import CircleBtn from "../components/CircleBtn";
import { CircleBtnProps } from "../components/CircleBtn";

import { action } from "@storybook/addon-actions";
import { withKnobs, color, text } from "@storybook/addon-knobs";

import arrowIcon from "./assets/icons/arrow-icon.js";

export default {
  title: "Example/CircleBtn",
  component: CircleBtn,
  decorators: [withKnobs],
};

export const Default = () => {
  const CircleBtnProps = (): CircleBtnProps => ({
    onClick: action("onClick"),
    bgColor: color("Background color", undefined),
    defaultIconColor: color("Default icon color", undefined),
    hoverIconColor: color("Hover icon color", undefined),
    borderColor: color("Border color", undefined),
    shadowHover: text("Shadow hover", undefined),
    icon: arrowIcon,
  });

  return <CircleBtn {...CircleBtnProps()} />;
};
