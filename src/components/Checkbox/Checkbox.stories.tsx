import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";

import MetCheckbox, { MetCheckboxProps } from "./index";

import { withKnobs, boolean, color, text } from "@storybook/addon-knobs";

import mdx from "./Checkbox.mdx";

export default {
  title: "Example/Checkbox",
  component: MetCheckbox,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  const CheckboxProps = (): MetCheckboxProps => ({
    isChecked: isChecked,
    label: text("Default content", "Контент-менеджер"),
    onChange: onChange,
    isDisabled: boolean("isDisabled", false),
    isHaveLabel: boolean("isHaveLabel", false),
    isRectangleHover: boolean("isRectangleHover", false),
    bgColor: color("Background color", undefined),
    hoverColor: color("Hover color", undefined),
    borderColor: color("Border color", undefined),
  });

  return <MetCheckbox {...CheckboxProps()} />;
};
