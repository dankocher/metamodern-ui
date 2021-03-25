import React, { useState } from "react";

import { MetSquareIconCheckbox, MetSquareIconCheckboxProps } from "./index";

import { withKnobs, boolean, color } from "@storybook/addon-knobs";

import uncheckedStarIcon from "../../assets/icons/unchecked-star-icon.js";
import checkedStarIcon from "../../assets/icons/checked-star-icon.js";

import mdx from "./SquareIconCheckbox.mdx";

export default {
  title: "Example/SquareIconCheckbox",
  component: MetSquareIconCheckbox,
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

  const SquareIconCheckboxProps = (): MetSquareIconCheckboxProps => ({
    isChecked: isChecked,
    onChange: onChange,
    isDisabled: boolean("isDisabled", false),
    bgColor: color("Background color", undefined),
    hoverColor: color("Hover color", undefined),
    hoverIconColor: color("Hover color of icon", undefined),

    uncheckedIcon: uncheckedStarIcon,
    checkedIcon: checkedStarIcon,
  });

  return <MetSquareIconCheckbox {...SquareIconCheckboxProps()} />;
};
