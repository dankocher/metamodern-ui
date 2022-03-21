import React, { useState } from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetTagInputSearch, { MetTagInputSearchProps } from "./index";

import { action } from "@storybook/addon-actions";
import { boolean, color, text, withKnobs } from "@storybook/addon-knobs";

import mdx from "./TagInputSearch.mdx";

export default {
  title: "Example/TagInputSearch",
  component: MetTagInputSearch,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

export const Default = () => {
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onToggle = () => {
    setIsChecked(!isChecked);
  };

  const TagInputSearchProps = (): MetTagInputSearchProps => ({
    isChecked,
    value,
    searchValue: text("searchValue", ""),
    onChange: onChange,
    onToggle,
    isHasCheckbox: boolean("isHasCheckbox", false),
    hoverCheckboxColor: color("Hover checkbox color", undefined),
    defaultColor: color("Default color", undefined),
    focusColor: color("Focus color", undefined),
    onClick: action("onClick"),
  });

  return <MetTagInputSearch {...TagInputSearchProps()} />;
};
