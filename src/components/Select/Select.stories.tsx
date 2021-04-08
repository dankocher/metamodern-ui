import React, { useState } from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { MetSelect, MetSelectProps } from "./index";

import { withKnobs, color, text, boolean } from "@storybook/addon-knobs";

import arrowDownIcon from "../../assets/icons/arrow-down-icon.js";

import mdx from "./Select.mdx";

export default {
  title: "Example/Select",
  component: MetSelect,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

const items = [
  {
    id: 1,
    value: "Контент-менеджер",
  },
  {
    id: 2,
    value: "Не Контент-менеджер",
  },
  {
    id: 3,
    value: "Администратор",
  },
];

export const Default = () => {
  const [selection, setSelection] = useState([]);

  const onChange = (selection) => {
    setSelection(selection);
  };
  const SelectProps = (): MetSelectProps => ({
    placeholder: text("Default title", "Выбирите должность..."),
    items,
    icon: arrowDownIcon,
    multiSelect: boolean("Multiselect", false),
    onChange,
    borderColor: color("Border color", undefined),
    selectedColor: color("Selected color", undefined),
    hoverColor: color("Hover color", undefined),
    placeholderColor: color("Placeholder color", undefined),
  });

  return (
    <>
      <MetSelect {...SelectProps()} />
      <br />
      <br />
      <span>
        Tut Mogla bit vasha reclama {selection.map((element) => element.value)}
      </span>
    </>
  );
};
