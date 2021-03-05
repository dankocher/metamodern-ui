import React from "react";

import SquareIconBtn from "../components/SquareIconBtn";
import { MetSquareIconBtnProps } from "../components/SquareIconBtn";

import { action } from "@storybook/addon-actions";
import { withKnobs, color, text } from "@storybook/addon-knobs";

import trashIcon from "./assets/icons/trash-icon.js";

export default {
  title: "Example/SquareIconBtn",
  component: SquareIconBtn,
  decorators: [withKnobs],
};

export const Default = () => {
  const SquareIconBtnProps = (): MetSquareIconBtnProps => ({
    onClick: action("onClick"),
    bgColor: color("Background color", undefined),
    hoverColor: color("Hover color", undefined),
    defaultIconColor: color("Default icon color", undefined),
    hoverIconColor: color("Hover icon color", undefined),
    icon: trashIcon,
  });

  return <SquareIconBtn {...SquareIconBtnProps()} />;
};
