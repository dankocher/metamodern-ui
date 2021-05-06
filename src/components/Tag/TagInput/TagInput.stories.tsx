import React, { useState } from "react";

import { Meta } from "@storybook/react/types-6-0";

import { MetTagInput, MetTagInputProps } from "./index";

import { color, withKnobs } from "@storybook/addon-knobs";

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
};

export const Default = () => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const TagInputProps = (): MetTagInputProps => ({
        isChecked: true,
        value,
        onChange,
    });

    return <MetTagInput {...TagInputProps()} />;
};
