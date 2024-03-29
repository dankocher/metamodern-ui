import React, { useState } from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetTextArea, {
    MetTextAreaProps,
    TextFieldState as stateTF,
} from "./index";

import {
    withKnobs,
    boolean,
    color,
    select,
    number, text
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import mdx from "./TextArea.mdx";

export default {
    title: "Example/TextArea",
    component: MetTextArea,
    decorators: [withKnobs],
    parameters: {
        docs: {
            page: mdx,
        },
    },
} as Meta;

export const Default = () => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const TextAreaProps = (): MetTextAreaProps => ({
        value: value,
        onChange: onChange,
        onBlur: action("onBlur"),
        isTextSelected: boolean("Is the text focused in text area", false),
        isTextField: boolean("Is component input/textField", false),
        label: text("Label when component text field", "Default with label"),
        isDisabled: boolean("Is component disabled", false),
        state: select(
            "State",
            {
                Default: stateTF.DEFAULT,
                Error: stateTF.ERROR,
                Success: stateTF.SUCCESS,
            },
            stateTF.DEFAULT
        ),
        hoverColor: color("Hover color", undefined),
        focusColor: color("Focus color", undefined),
        errorColor: color("Error color", undefined),
        successColor: color("Successs color", undefined),

        rowsMins: number("min rows", 2),
        rowsMax: number("max rows", 5),
    });

    return <MetTextArea {...TextAreaProps()} />;
};
