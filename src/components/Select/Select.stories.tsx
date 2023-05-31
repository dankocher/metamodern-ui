import React, { ReactElement, useState } from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetSelect, { MetSelectProps } from "./index";

import {
  withKnobs,
  color,
  text,
  boolean,
  select,
  number,
} from "@storybook/addon-knobs";

import mdx from "./Select.mdx";
import { SelectState } from "./selectState.enum";
import MetRectangleTextBtn, {
  TypesRectangleTextBtn,
} from "../RectangleTextBtn";

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
    id: "1",
    value:
      "Контент-менеджер Контент-менеджерКонтент-менеджерКонтент-менеджерКонтент-менеджерКонтент-менеджерКонтент-менеджерКонтент-менеджерКонтент-менеджерКонтент-менеджер",
  },
  {
    id: "2",
    value: "Не Контент-менеджер",
  },
  {
    id: "3",
    value: "Администратор",
  },
];

const component = () => (
  <MetRectangleTextBtn onClick={() => {}} type={TypesRectangleTextBtn.GHOST}>
    Добавить
  </MetRectangleTextBtn>
);

export const Default = (): ReactElement => {
  const [selection, setSelection] = useState([]);

  const onChange = (selection) => {
    setSelection(selection);
  };

  const SelectProps = (): MetSelectProps => ({
    placeholder: text("Default title", "Выбирите должность..."),
    items,
    multiSelect: boolean("Multiselect", false),
    countItemList: number("Count item list", undefined),
    onChange,
    isHaveLabel: boolean("Is component lable", false),
    label: text("Label", "Name"),
    isDisabled: boolean("Is component disabled", false),
    state: select(
      "State",
      {
        Default: SelectState.DEFAULT,
        Error: SelectState.ERROR,
        Success: SelectState.SUCCESS,
      },
      SelectState.DEFAULT
    ),
    borderColor: color("Border color", undefined),
    selectedColor: color("Selected color", undefined),
    hoverColor: color("Hover color", undefined),
    placeholderColor: color("Placeholder color", undefined),
    errorColor: color("Error color", undefined),
    successColor: color("Success color", undefined),
    bottomChildren: component(),
  });

  return (
    <>
      <MetSelect {...SelectProps()} />
      <br />
      <br />
      <b>Selected items: </b>
      <span>{selection.map((element) => element.value)}</span>
    </>
  );
};
