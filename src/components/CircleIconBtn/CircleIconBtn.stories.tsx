import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { MetCircleIconBtn, MetCircleIconBtnProps } from "./index";

import { action } from "@storybook/addon-actions";
import { withKnobs, color, text, select } from "@storybook/addon-knobs";

import smallCrossIcon from "../../assets/icons/small-cross-icon.js";
import largeCrossIcon from "../../assets/icons/large-cross-icon.js";

import { Size } from "./size";

import mdx from "./CircleIconBtn.mdx";

export default {
  title: "Example/MetCircleIconBtn",
  component: MetCircleIconBtn,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

export const Small = () => {
  const CircleIconBtnProps = (): MetCircleIconBtnProps => ({
    onClick: action("onClick"),
    bgColor: color("Background color", undefined),
    hoverColor: color("Hover color", undefined),
    defaultIconColor: color("Default icon color", undefined),
    size: select(
      "Size",
      {
        "Small (sm)": Size.sm,
        "Large (lg)": Size.lg,
      },
      Size.sm
    ),
    icon: smallCrossIcon,
  });

  return <MetCircleIconBtn {...CircleIconBtnProps()} />;
};

export const Large = () => {
  const CircleIconBtnProps = (): MetCircleIconBtnProps => ({
    onClick: action("onClick"),
    bgColor: color("Background color", undefined),
    hoverColor: color("Hover color", undefined),
    defaultIconColor: color("Default icon color", undefined),
    size: select(
      "Size",
      {
        "Small (sm)": Size.sm,
        "Large (lg)": Size.lg,
      },
      Size.lg
    ),
    icon: largeCrossIcon,
  });

  return <MetCircleIconBtn {...CircleIconBtnProps()} />;
};
