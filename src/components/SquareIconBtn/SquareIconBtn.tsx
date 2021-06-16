import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetSquareIconBtnProps } from "./index";

import trashIcon from "../../assets/icons/trash-icon.jsx";

const Button = styled.div`
    background-color: ${(props) => props.bgColor};

    & svg {
        & > * {
            fill: ${(props) => props.defaultIconColor};
        }
    }

    &:hover {
        & svg {
            & > * {
                fill: ${(props) => props.hoverIconColor};
            }
        }

        background-color: ${(props) => props.hoverColor};
    }
`;

export const MetSquareIconBtn: FC<MetSquareIconBtnProps> = ({
    style,
    className = "",
    onClick,
    bgColor = colors.transparent,
    defaultIconColor = colors.neutral600,
    hoverIconColor = colors.neutral700,
    hoverColor = colors.neutral200,
    icon = trashIcon,
}): ReactElement => {
    return (
        <Button
            role="button"
            style={style}
            onClick={onClick}
            className={`${styles.squareBtn} ${className}`}
            bgColor={bgColor}
            hoverColor={hoverColor}
            defaultIconColor={defaultIconColor}
            hoverIconColor={hoverIconColor}
        >
            {icon}
        </Button>
    );
};
