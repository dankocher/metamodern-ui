import styles from "./index.module.scss";
import React, { FC, ReactElement, useEffect, useRef } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";
import { SizeCircleIconBtn as Size } from "../CircleIconBtn/sizeCircleIconBtn.enum";

import { MetPromptInfoProps } from "./index";

import MetCircleIconBtn from "../CircleIconBtn";
import { Icons } from "../Icon";

interface ContainerProps {
    bgColor: string;
}

const Container = styled.div<ContainerProps>`
    background-color: ${(props) => props.bgColor};
`;

export const MetPromptInfo: FC<MetPromptInfoProps> = ({
    style,
    className = "",
    fontClass = styles.subtitle3,
    isOpen,

    onClick,
    value,
    bgColor = colors.neutral800,
    defaultIconColor,
    hoverColor = colors.neutral900,
    icon = Icons.infoOutlined,
    styleIconBtn,
    classNameIconBtn,
}): ReactElement => {
    const wrapperRef = useRef(null);

    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            onClick(event);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <Container
            ref={wrapperRef}
            style={style}
            className={`${styles.container} ${className} ${fontClass}`}
            bgColor={bgColor}
        >
            <MetCircleIconBtn
                styleIconBtn={styleIconBtn}
                classNameIconBtn={classNameIconBtn}
                onClick={onClick}
                size={Size.SMALL}
                bgColor={isOpen ? hoverColor : bgColor}
                defaultIconColor={defaultIconColor}
                hoverColor={hoverColor}
                icon={icon}
            />
            {isOpen && <div className={styles.container__info}>{value}</div>}
        </Container>
    );
};
