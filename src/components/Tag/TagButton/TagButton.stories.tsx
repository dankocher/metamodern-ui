import React, { useState } from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetTagButton, { MetTagButtonProps } from "./index";

import { boolean, color, text, withKnobs } from "@storybook/addon-knobs";

import mdx from "./TagButton.mdx";

export default {
    title: "Example/TagButton",
    component: MetTagButton,
    decorators: [withKnobs],
    parameters: {
        docs: {
            page: mdx,
        },
    },
} as Meta;

export const Default = () => {
    const [isChoosed, setIsChoosed] = useState(false);

    const onToggle = () => {
        setIsChoosed(!isChoosed);
    };

    const TagInputProps = (): MetTagButtonProps => ({
        className: "body1",
        isChoosed,
        value: text("Text", "Text"),
        onToggle,
        isHasCheckbox: boolean("isHasCheckbox", false),
        defaultColor: color("Default color", undefined),
        hoverColor: color("Hover color", undefined),
        focusColor: color("Focus color", undefined),
        focusIconColor: color("Focus icon color", undefined),
    });

    return <MetTagButton {...TagInputProps()} />;
};
