import React, { useEffect, useState } from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetModalWindow, { MetModalWindowProps } from "./index";

import { withKnobs, color, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import mdx from "./ModalWindow.mdx";

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


const message = "Нажав кнопку “продолжить” вы соглашаетесь с тем, что веденные данные не будут сохранены.";

export const Default = () => {
  const ModalWindowProps = (): MetModalWindowProps => ({
    onClose: action("onClick"),
    acceptOnClick: action("onClick"),
    cancelOnClick: action("onClick"),
    isDisplayed: boolean("isDisplayed",false),
    title: text("title","Внимание!"),
    text: text("text", message),
    acceptText: text("proceedBtnText", "Продолжить"),
    cancelText: text("cancelBtnText", "Отмена"),
    acceptColor: color("proceedBtnColor", undefined),
    cancelColor: color("cancelBtnColor", undefined),
    iconColor: color("icon color", undefined),
  });

  return <MetModalWindow {...ModalWindowProps()} />;
};
