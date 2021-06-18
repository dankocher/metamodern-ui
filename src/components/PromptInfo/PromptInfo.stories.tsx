import React, { useState } from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetPromptInfo, { MetPromptInfoProps } from "./index";

import { withKnobs, color, text } from "@storybook/addon-knobs";

import mdx from "./PromptInfo.mdx";

export default {
    title: "Example/PromptInfo",
    component: MetPromptInfo,
    decorators: [withKnobs],
    parameters: {
        docs: {
            page: mdx,
        },
    },
} as Meta;

export const Default = () => {
    const [isOpen, setIsOpen] = useState(false);

    const CircleBtnProps = (): MetPromptInfoProps => ({
        isOpen,
        value: text(
            "Value",
            "Загрузите несколько фотографий для разных ситуаций отображения данного кейса в разделе Портфолио. Ограничения по размеру можно увидеть в загрузчике после клика на фото."
        ),
        fontClass: "subtitle3",
        onClick: () => setIsOpen((prev) => !prev),
        bgColor: color("Background color", undefined),
        hoverColor: color("Hover color", undefined),
        defaultIconColor: color("Default icon color", undefined),
    });

    return <MetPromptInfo {...CircleBtnProps()} />;
};
