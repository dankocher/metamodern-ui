import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { MetSelect, MetSelectProps } from "./index";

import { action } from "@storybook/addon-actions";
import { withKnobs, color, text } from "@storybook/addon-knobs";

import arrowIcon from "../../assets/icons/arrow-icon.js";

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
    value: "Pulp Fiction",
  },
  {
    id: 2,
    value: "The Prestige",
  },
  {
    id: 3,
    value: "Blade Runner 2049",
  },
];

export const Default = () => {
  const SelectProps = (): MetSelectProps => ({
    title: "Select movie",
    items,
  });

  return (
    <>
      <MetSelect {...SelectProps()} />
      БЮфыфывфвы
    </>
  );
};
