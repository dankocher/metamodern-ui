import React, { useState } from "react";

import CircleBtn from "../components/CircleBtn";
import { CircleBtnProps } from "../components/CircleBtn";

import { withKnobs, boolean, color } from "@storybook/addon-knobs";

export default {
  title: "Example/CircleBtn",
  component: CircleBtn,
  decorators: [withKnobs],
};

export const Default = () => {
  const CircleBtnProps = (): CircleBtnProps => ({
    bgColor: color("Background color", undefined),
    borderColor: color("Border color", undefined),
    hoverColor: color("Hover color", undefined),
    icon: color("Hover color", undefined),
  });

  return <CircleBtn {...CircleBtnProps()} />;
};
