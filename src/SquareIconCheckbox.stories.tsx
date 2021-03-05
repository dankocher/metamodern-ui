import React, { useState } from "react";

import SquareIconCheckbox, {
  MetSquareIconCheckboxProps,
} from "../components/SquareIconCheckbox";

import { withKnobs, boolean, color } from "@storybook/addon-knobs";

import uncheckedStarIcon from "./assets/icons/unchecked-star-icon.js";
import checkedStarIcon from "./assets/icons/checked-star-icon.js";

export default {
  title: "Example/SquareIconCheckbox",
  component: SquareIconCheckbox,
  decorators: [withKnobs],
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
    hoverColor: color("Hover color", undefined),
    uncheckedIcon: uncheckedStarIcon,
    checkedIcon: checkedStarIcon,
  });

  return <SquareIconCheckbox {...SquareIconCheckboxProps()} />;
};
