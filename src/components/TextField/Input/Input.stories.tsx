import React, { useState } from "react";

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

  const TextFieldProps = (): MetInputProps => ({
    value: value,
    onChange: onChange,
    onBlur: action("onBlur"),
    isTextField: false,
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

  const TextFieldProps = (): MetInputProps => ({
    value: value,
    onChange: onChange,
    onBlur: action("onBlur"),
    isTextField: false,
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

  const TextFieldProps = (): MetInputProps => ({
    value: value,
    onChange: onChange,
    onBlur: action("onBlur"),
    isTextField: false,
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

  const TextFieldProps = (): MetInputProps => ({
    value: value,
    onChange: onChange,
    onBlur: action("onBlur"),
    isTextField: false,
    state: stateTF.success,
    successColor: color("Success color", undefined),
  });

  return <MetTextField {...TextFieldProps()} />;
};

export const DefaultTextField = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const TextFieldProps = (): MetInputProps => ({
    value: value,
    onChange: onChange,
    onBlur: action("onBlur"),
    isTextField: boolean("Is have message", true),
    label: text("label", "Default"),
    state: stateTF.default,
  });

  return <MetTextField {...TextFieldProps()} />;
};

export const ErrorTextField = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const TextFieldProps = (): MetInputProps => ({
    value: value,
    onChange: onChange,
    onBlur: action("onBlur"),
    isTextField: boolean("Is have message", true),
    label: text("label", "Error"),
    state: stateTF.error,
    errorMessage: text("Error message", "Error message"),
    errorIcon: errorIcon,
    errorColor: color("Error color", undefined),
  });

  return <MetTextField {...TextFieldProps()} />;
};

export const SuccessTextField = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const TextFieldProps = (): MetInputProps => ({
    value: value,
    onChange: onChange,
    onBlur: action("onBlur"),
    isTextField: boolean("Is have message", true),
    label: text("label", "Success"),
    state: stateTF.success,
    successMessage: text("Success Message", "Success Message"),
    successIcon: successIcon,
    successColor: color("Success color", undefined),
  });

  return <MetTextField {...TextFieldProps()} />;
};
