import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import { MetRectangleIconBtn, MetRectangleIconBtnProps } from "./index";

import { action } from "@storybook/addon-actions";
import { withKnobs, color, text } from "@storybook/addon-knobs";

import plusIcon from "../../assets/icons/plus-icon.js";

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
        bgColor: color("Background color", undefined),
        hoverColor: color("Hover color", undefined),
        defaultIconColor: color("Default icon color", undefined),
        icon: plusIcon,
    });

    return <MetRectangleIconBtn {...RectangleIconBtnProps()} />;
};
