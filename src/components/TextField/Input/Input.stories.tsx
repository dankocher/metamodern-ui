import React, { useState } from "react";

import { Meta } from "@storybook/react/types-6-0";

import {
    MetTextField,
    MetInputProps,
    textFieldState as stateTF,
} from "./index";

import {
    withKnobs,
    boolean,
    color,
    text,
    select,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import errorIcon from "../../../assets/icons/error-icon.js";
import successIcon from "../../../assets/icons/success-icon.js";

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
        inputFontClass: "body2",
        labelFontClass: "subtitle2",
        errorFontClass: "caption",
        value: value,
        onChange: onChange,
        onBlur: action("onBlur"),
        isTextField: boolean("Is component input/textField", false),
        label: text("Label when component text field", "Label"),
        isDisabled: boolean("Is component disabled", false),
        state: select(
            "State",
            {
                Default: stateTF.default,
                Error: stateTF.error,
                Success: stateTF.success,
            },
            stateTF.default
        ),
        hoverColor: color("Hover color", undefined),
        focusColor: color("Focus color", undefined),

        errorColor: color("Error color", undefined),
        errorIcon,
        errorMessage: text("Error message", "Error message"),
        successColor: text("Success message", undefined),
        successIcon,
        successMessage: text("Success message", "Success message"),
    });

    return <MetTextField {...TextFieldProps()} />;
};
