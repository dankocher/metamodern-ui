import React, { useState } from "react";

import {
  MetTextField,
  MetTextFieldProps,
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

import errorIcon from "../../assets/icons/error-icon.js";
import successIcon from "../../assets/icons/success-icon.js";

import mdx from "./TextField.mdx";

export default {
  title: "Example/MetTextField",
  component: MetTextField,
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

  const TextFieldProps = (): MetTextFieldProps => ({
    value: value,
    onChange: onChange,
    onBlur: action("onBlur"),
    isHaveMessage: false,
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
  });

  return <MetTextField {...TextFieldProps()} />;
};

export const Disabled = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const TextFieldProps = (): MetTextFieldProps => ({
    value: value,
    onChange: onChange,
    onBlur: action("onBlur"),
    isHaveMessage: false,
    isDisabled: boolean("Is component disabled", true),
    state: stateTF.default,
  });

  return <MetTextField {...TextFieldProps()} />;
};

export const Error = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onBlur = (event) => {
    console.log(event.target.value);
  };

  const TextFieldProps = (): MetTextFieldProps => ({
    value: value,
    onChange: onChange,
    onBlur: action("onBlur"),
    isHaveMessage: false,
    state: stateTF.error,
    errorColor: color("Error color", undefined),
  });

  return <MetTextField {...TextFieldProps()} />;
};

export const Success = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const TextFieldProps = (): MetTextFieldProps => ({
    value: value,
    onChange: onChange,
    onBlur: action("onBlur"),
    isHaveMessage: false,
    state: stateTF.success,
    successColor: color("Success color", undefined),
  });

  return <MetTextField {...TextFieldProps()} />;
};

export const ErrorWithMessage = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const TextFieldProps = (): MetTextFieldProps => ({
    value: value,
    onChange: onChange,
    onBlur: action("onBlur"),
    isHaveMessage: boolean("Is have message", true),
    state: stateTF.error,
    errorMessage: text("Error message", "Error message"),
    errorIcon: errorIcon,
    errorColor: color("Error color", undefined),
  });

  return <MetTextField {...TextFieldProps()} />;
};

export const SuccessWithMessage = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const TextFieldProps = (): MetTextFieldProps => ({
    value: value,
    onChange: onChange,
    onBlur: action("onBlur"),
    isHaveMessage: boolean("Is have message", true),
    state: stateTF.success,
    successMessage: text("Success Message", "Success Message"),
    successIcon: successIcon,
    successColor: color("Success color", undefined),
  });

  return <MetTextField {...TextFieldProps()} />;
};
