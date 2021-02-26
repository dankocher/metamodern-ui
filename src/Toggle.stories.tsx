import React, { useState } from "react";

import Toggle from "../components/Toggle";
import { ToggleProps } from "../components/Toggle";

import { withKnobs, boolean, color } from "@storybook/addon-knobs";

export default {
  title: "Example/Toggle",
  component: Toggle,
  decorators: [withKnobs],
};

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  const toggleProps = (): ToggleProps => ({
    isChecked: isChecked,
    onChange: onChange,
    isDisabled: boolean("isDisabled", false),
    trackColor: color("Track color", undefined),
    thumbColor: color("Thumb color", undefined),
    hoverColor: color("Hover color", undefined),
  });

  return <Toggle {...toggleProps()} />;
};
