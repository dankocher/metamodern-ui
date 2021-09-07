import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";

import MetRadioBtn, { MetRadioBtnProps } from "./index";

import { withKnobs, boolean, color} from "@storybook/addon-knobs";

import mdx from "./RadioBtn.mdx";

export default {
  title: "Example/RadioBtn",
  component: MetRadioBtn,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

const items = [
  {
    id: "1",
    value:
      "Контент-менеджер",
      label:
      "Контент-менеджер",
  },
  {
    id: "2",
    value: "Не Контент-менеджер",
    label:
      "Не Контент-менеджер",
  },
  {
    id: "3",
    value: "Администратор",
    label:
      "Администратор",
  },
];

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  const RadioBtnProps = (): MetRadioBtnProps => ({
    items,
    onChange,
    isDisabled: boolean("isDisabled", false),
    isError: boolean("isError", false),
    bgColor: color("Background color", undefined),
    radioButtonColor: color("Button color", undefined),
    errorColor: color("Error color", undefined),
    hoverColor: color("Hover color", undefined),
  });

  return <MetRadioBtn {...RadioBtnProps()} />;
};
