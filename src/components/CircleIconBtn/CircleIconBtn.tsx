import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { Size } from "./size";

import { MetCircleIconBtnProps } from "./index";

import smallCrossIcon from "../../assets/icons/small-cross-icon";
import largeCrossIcon from "../../assets/icons/large-cross-icon";

const smallSize = "18px";
const largeSize = "30px";

const Button = styled.div`
    height: ${(props) => (props.size === Size.sm ? smallSize : largeSize)};
    width: ${(props) => (props.size === Size.sm ? smallSize : largeSize)};
    background-color: ${(props) => props.bgColor};

    & svg {
        & > * {
            fill: ${(props) => props.defaultIconColor};
        }
    }

    &:hover {
        background-color: ${(props) => props.hoverColor};
    }
`;

export const MetCircleIconBtn: FC<MetCircleIconBtnProps> = ({
    style,
    className = "",
    onClick,
    size = Size.sm,
    bgColor = size === Size.sm ? colors.neutral800 : colors.transparent,
    defaultIconColor = size === Size.sm ? colors.neutral0 : colors.neutral800,
    hoverColor = size === Size.sm ? colors.neutral900 : colors.neutral200,
    icon = size === Size.sm ? smallCrossIcon : largeCrossIcon,
}): ReactElement => {
    return (
        <Button
            role="button"
            size={size}
            style={style}
            onClick={onClick}
            className={`${styles.squareBtn} ${className}`}
            bgColor={bgColor}
            hoverColor={hoverColor}
            defaultIconColor={defaultIconColor}
        >
            {icon}
        </Button>
    );
};
