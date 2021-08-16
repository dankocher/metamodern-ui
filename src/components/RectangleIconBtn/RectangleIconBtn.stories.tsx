import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetRectangleIconBtn, { MetRectangleIconBtnProps, Type } from "./index";

import { action } from "@storybook/addon-actions";
import { withKnobs, color, boolean, select } from "@storybook/addon-knobs";

import mdx from "./RectangleIconBtn.mdx";

export default {
    title: "Example/RectangleIconBtn",
    component: MetRectangleIconBtn,
    decorators: [withKnobs],
    parameters: {
        docs: {
            page: mdx,
        },
    },
} as Meta;

export const Default = () => {
    const RectangleIconBtnProps = (): MetRectangleIconBtnProps => ({
        onClick: action("onClick"),
        isDisabled: boolean("Disabled state of button", false),
        type: select(
          "Type of button",
          {
              "Fill button": Type.fill,
              "Line button": Type.line,
              "Ghost button": Type.ghost,
          },
          Type.fill
        ),
        borderColor: color("Border color", undefined),
        bgColor: color("Background color", undefined),
        hoverColor: color("Hover color", undefined),
        defaultIconColor: color("Default icon color", undefined),
    });

    return <MetRectangleIconBtn {...RectangleIconBtnProps()} />;
};
