import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetRectangleTextBtn, {
  MetRectangleTextBtnProps,
  SizeRectangleTextBtn as Size,
  TypesRectangleTextBtn as Type,
} from "./index";

import { action } from "@storybook/addon-actions";
import { withKnobs, color, select, boolean } from "@storybook/addon-knobs";

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
    titleFontClass: "body0",
    onClick: action("onClick"),
    isDisabled: boolean("Disabled state of button", false),
    size: select(
      "Set the size of button",
      {
        Large: Size.LARGE,
        Small: Size.SMALL,
      },
      Size.LARGE
    ),
    type: select(
      "Type of button",
      {
        Primary: Type.PRIMARY,
        Secondary: Type.SECONDARY,
        Ghost: Type.GHOST,
        Attention: Type.ATTENTION,
      },
      Type.PRIMARY
    ),
    borderColor: color("Border color", undefined),
    bgColor: color("Background color", undefined),
    hoverColor: color("Hover color", undefined),
  });

  return <MetRectangleTextBtn {...RectangleTextBtnProps()} />;
};
