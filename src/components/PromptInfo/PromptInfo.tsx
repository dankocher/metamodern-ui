import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetPromptInfoProps, Size } from "./index";

import infoIcon from "../../assets/icons/info-icon.js";
import { MetCircleIconBtn } from "../CircleIconBtn/index";

const Container = styled.div`
    background-color: ${(props) => props.bgColor};
`;

export const MetPromptInfo: FC<MetPromptInfoProps> = ({
    style,
    className = "",
    fontClass = "",
    isOpen,
    onClick,
    value,
    size,
    bgColor,
    defaultIconColor,
    hoverColor,
    icon = infoIcon,
}): ReactElement => {
    return (
        <Container
            style={style}
            className={`${styles.container} ${className} ${fontClass}`}
        >
            <MetCircleIconBtn
                onClick={onClick}
                size={size}
                bgColor={bgColor}
                defaultIconColor={defaultIconColor}
                hoverColor={hoverColor}
                icon={icon}
            />
            {isOpen ? (
                <div className={styles.container__info}>
                    <div className={styles.container__info__contant}>
                        {value}
                    </div>
                </div>
            ) : null}
        </Container>
    );
};
