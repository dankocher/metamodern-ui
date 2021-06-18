import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetSquareIconBtn, { MetSquareIconBtnProps } from "./index";

import { action } from "@storybook/addon-actions";
import { withKnobs, color } from "@storybook/addon-knobs";

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
    });

    return <MetSquareIconBtn {...SquareIconBtnProps()} />;
};
