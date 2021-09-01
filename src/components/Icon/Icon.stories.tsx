import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetIcon, { MetIconProps } from "./index";

import { withKnobs, color, text, number } from "@storybook/addon-knobs";

import mdx from "./Icon.mdx";

export default {
    title: "Example/Icon",
    component: MetIcon,
    decorators: [withKnobs],
    parameters: {
        docs: {
            page: mdx,
        },
    },
} as Meta;

export const Default = () => {
    const IconProps = (): MetIconProps => ({
        name: text("Icon name", undefined),
        color: color("Color icon", undefined),
        hoverColor: color("Hover color icon", undefined),
        size: number("Size icon", undefined)
    });

    return <MetIcon {...IconProps()} />;
};
