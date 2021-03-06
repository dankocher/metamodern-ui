import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetCircleIconBtn, { MetCircleIconBtnProps, Size } from "./index";

import { action } from "@storybook/addon-actions";
import { withKnobs, color, select } from "@storybook/addon-knobs";

import mdx from "./CircleIconBtn.mdx";

export default {
    title: "Example/CircleIconBtn",
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
    });

    return <MetCircleIconBtn {...CircleIconBtnProps()} />;
};
