import React, { useState } from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetTextField, {
    MetInputProps,
    TextFieldState as stateTF,
} from "./index";

import {
    withKnobs,
    boolean,
    color,
    text,
    select,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import mdx from "./Input.mdx";

export default {
    title: "Example/TextField",
    component: MetTextField,
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

    const TextFieldProps = (): MetInputProps => ({
        value: value,
        onChange: onChange,
        onBlur: action("onBlur"),
        isFocused: boolean("Is the text focused in input", false),
        isTextField: boolean("Is component input/textField", false),
        label: text("Label when component text field", "Label"),
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
        errorMessage: text("Error message", "Error message"),
        successColor: color("Success color", undefined),
        successMessage: text("Success message", "Success message"),
    });

    return <MetTextField {...TextFieldProps()} />;
};
