import React, { useState } from "react";

import {
  MetTextArea,
  MetTextAreaProps,
  textFieldState as stateTF,
} from "./index";

import {
  withKnobs,
  boolean,
  color,
  text,
  select,
  number,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import mdx from "./TextArea.mdx";

export default {
  title: "Example/MetTextArea",
  component: MetTextArea,
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

  const TextAreaProps = (): MetTextAreaProps => ({
    value: value,
    onChange: onChange,
    onBlur: action("onBlur"),
    isDisabled: boolean("Is component disabled", false),
    state: select(
      "State",
      {
        Default: stateTF.default,
        Error: stateTF.error,
        Success: stateTF.success,
      },
      stateTF.error
    ),
    hoverColor: color("Hover color", undefined),
    focusColor: color("Focus color", undefined),
    rowsMins: number("min rows", 2),
    rowsMax: number("max rows", 5),
  });

  return <MetTextArea {...TextAreaProps()} />;
};
