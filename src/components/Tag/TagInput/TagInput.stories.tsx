import React, { useState } from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetTagInput, { MetTagInputProps } from "./index";

import { action } from "@storybook/addon-actions";
import { boolean, color, withKnobs } from "@storybook/addon-knobs";

import mdx from "./TagInput.mdx";

export default {
    title: "Example/TagInput",
    component: MetTagInput,
    decorators: [withKnobs],
    parameters: {
        docs: {
            page: mdx,
        },
    },
} as Meta;

export const Default = () => {
    const [value, setValue] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onToggle = () => {
        setIsChecked(!isChecked);
    };

    const TagInputProps = (): MetTagInputProps => ({
        fontClass: "body1",
        isChecked,
        value,
        onChange: onChange,
        onToggle,
        isHasCheckbox: boolean("isHasCheckbox", false),
        hoverCheckboxColor: color("Hover checkbox color", undefined),
        defaultColor: color("Default color", undefined),
        focusColor: color("Focus color", undefined),
        onClick: action("onClick"),
    });

    return <MetTagInput {...TagInputProps()} />;
};
