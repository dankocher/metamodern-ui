import React, { useState } from "react";

import { Meta } from "@storybook/react/types-6-0";

import MetTooltip, { MetTooltipProps } from "./index";

import { withKnobs, color, text } from "@storybook/addon-knobs";

import mdx from "./Tooltip.mdx";
import { action } from "@storybook/addon-actions";

export default {
    title: "Example/Tooltip",
    component: MetTooltip,
    decorators: [withKnobs],
    parameters: {
        docs: {
            page: mdx,
        },
    },
} as Meta;

export const Default = () => {
    const [isOpen, setIsOpen] = useState(false);

    const CircleBtnProps = (): MetTooltipProps => ({
        isOpen,
        value: text(
            "Value",
            "Загрузите несколько фотографий для разных ситуаций отображения данного кейса в разделе Портфолио. Ограничения по размеру можно увидеть в загрузчике после клика на фото."
        ),
        onHover: () => setIsOpen((prev) => !prev),
        onClick: action("onClick"),
        bgColor: color("Background color", undefined),
        hoverColor: color("Hover color", undefined),
        defaultIconColor: color("Default icon color", undefined),
    });

    return <MetTooltip {...CircleBtnProps()} />;
};
