import React from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetModalWindow, { MetModalWindowProps } from "./index";

import { withKnobs, color, text, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";

import mdx from "./ModalWindow.mdx";

const json = require('./TestData.json');

export default {
  title: "Example/ModalWindow",
  component: MetModalWindow,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

export const Default = () => {
  const ModalWindowProps = (): MetModalWindowProps => ({
    onClose: action("onClick"),
    acceptOnClick: action("onClick"),
    cancelOnClick: action("onClick"),
    isDisplayed: boolean("isDisplayed", false),
    title: text("title", json.title),
    message: text("message", json.message),
    acceptLabel: text("acceptLabel", json.acceptLabel),
    cancelLabel: text("cancelLabel", json.cancelLabel),
    acceptColor: color("acceptColor", undefined),
    cancelColor: color("cancelColor", undefined),
    iconColor: color("icon color", undefined),
  });

  return <MetModalWindow {...ModalWindowProps()} />;
};
