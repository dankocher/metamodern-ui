import React, { useState } from "react";

import { MetToggle, MetToggleProps } from "./index";

import { withKnobs, boolean, color, text } from "@storybook/addon-knobs";

import mdx from "./Toggle.mdx";

export default {
  title: "Example/Toggle",
  component: MetToggle,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  const ToggleProps = (): MetToggleProps => ({
    isChecked: isChecked,
    onChange: onChange,
    isDisabled: boolean("isDisabled", false),
    trackColor: color("Track color", undefined),
    thumbOffColor: color("Thumb off color", undefined),
    thumbOnColor: color("Thumb on color", undefined),
    hoverColor: color("Hover color", undefined),
    shadow: text("Shadow of thumb", undefined),
  });

  return <MetToggle {...ToggleProps()} />;
};
