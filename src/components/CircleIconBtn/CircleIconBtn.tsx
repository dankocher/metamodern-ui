import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { SizeCircleIconBtn as Size } from "./sizeCircleIconBtn";

import { MetCircleIconBtnProps } from "./index";

import smallCrossIcon from "../../assets/icons/small-cross-icon";
import largeCrossIcon from "../../assets/icons/large-cross-icon";

const smallSize = "18px";
const largeSize = "30px";

const Button = styled.div`
    height: ${(props) => (props.size === Size.SMALL ? smallSize : largeSize)};
    width: ${(props) => (props.size === Size.SMALL ? smallSize : largeSize)};
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
    styleIconBtn,
    classNameIconBtn = "",
    onClick,
    size = Size.SMALL,
    bgColor = size === Size.SMALL ? colors.neutral800 : colors.transparent,
    defaultIconColor = size === Size.SMALL ? colors.neutral0 : colors.neutral800,
    hoverColor = size === Size.SMALL ? colors.neutral900 : colors.neutral200,
    icon = size === Size.SMALL ? smallCrossIcon : largeCrossIcon,
}): ReactElement => {
    const onClickHandler = (e) => {
        if (onClick == null) return;
        onClick(e);
    };

    return (
        <Button
            role="button"
            size={size}
            style={styleIconBtn}
            onClick={onClickHandler}
            className={`${styles.squareBtn} ${classNameIconBtn}`}
            bgColor={bgColor}
            hoverColor={hoverColor}
            defaultIconColor={defaultIconColor}
        >
            {icon}
        </Button>
    );
};
