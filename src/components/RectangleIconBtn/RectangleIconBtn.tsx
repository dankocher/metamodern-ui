import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetRectangleIconBtnProps } from "./index";

import plusIcon from "../../assets/icons/plus-icon";

const Button = styled.div`
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

export const MetRectangleIconBtn: FC<MetRectangleIconBtnProps> = ({
    style,
    className = "",
    onClick,
    bgColor = colors.neutral800,
    defaultIconColor = colors.neutral0,
    hoverColor = colors.neutral900,
    icon = plusIcon,
}): ReactElement => {
    const onClickHandler = (e) => {
        if (onClick == null) return;
        onClick(e);
    };

    return (
        <Button
            role="button"
            style={style}
            onClick={onClickHandler}
            className={`${styles.squareBtn} ${className}`}
            bgColor={bgColor}
            hoverColor={hoverColor}
            defaultIconColor={defaultIconColor}
        >
            {icon}
        </Button>
    );
};
