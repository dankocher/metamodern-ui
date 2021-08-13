import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetRectangleTextBtn, {
  MetRectangleTextBtnProps,
  Size,
  Type,
} from "./index";

import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  color,
  select,
  boolean,
} from "@storybook/addon-knobs";

import mdx from "./RectangleTextBtn.mdx";

export default {
  title: "Example/RectangleTextBtn",
  component: MetRectangleTextBtn,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

export const Default = () => {
  const RectangleTextBtnProps = (): MetRectangleTextBtnProps => ({
    titleFontClass: "titleBtn",
    onClick: action("onClick"),
    isDisabled: boolean("Disabled state of button", false),
    size: select(
      "Set the size of button",
      {
        Large: Size.lg,
        Medium: Size.md,
      },
      Size.lg
    ),
    type: select(
      "Type of button",
      {
        "Fill button": Type.fill,
        "Line button": Type.line,
        "Ghost button": Type.ghost,
        "Red button": Type.red,
      },
      Type.fill
    ),
    border: color("Border color", undefined),
    bgColor: color("Background color", undefined),
    hoverColor: color("Hover color", undefined),
  });

  return <MetRectangleTextBtn {...RectangleTextBtnProps()} />;
};
