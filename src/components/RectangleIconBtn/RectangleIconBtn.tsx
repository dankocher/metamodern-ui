import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetRectangleIconBtnProps } from "./index";

import { TypesRectangleIconBtn as Type } from "./typesRectangleIconBtn.enum";

import MetIcon, { Icons } from "../Icon";

import classNames from "classnames";

interface ButtonProps {
  borderColor: string;
  bgColor: string;
  hoverColor: string;
  defaultIconColor: string;
}

const Button = styled.div<ButtonProps>`
  :not(.${styles.disabled}) {
    border-color: ${(props) => props.borderColor};

    background-color: ${(props) => props.bgColor};

    :hover:not(.${styles.disabled}) {
      background-color: ${(props) => props.hoverColor};
    }
  }
`;

export const MetRectangleIconBtn: FC<MetRectangleIconBtnProps> = ({
  style,
  className = "",
  onClick,
  isDisabled = false,
  icon = Icons.plusOutlined,
  type = Type.PRIMARY,
  borderColor = type === Type.SECONDARY
    ? colors.neutral300
    : colors.transparent,
  bgColor = type === Type.PRIMARY ? colors.neutral800 : colors.transparent,
  defaultIconColor = type === Type.PRIMARY
    ? colors.neutral0
    : colors.neutral800,
  hoverColor = type === Type.PRIMARY ? colors.neutral900 : colors.neutral100,
}): ReactElement => {
  const onClickHandler = (event) => {
    if (onClick == null || isDisabled) return;

    onClick(event);
  };

  const buttonStyle = classNames(styles.rectangleIconBtn, {
    [className]: className,
    [styles.disabled]: isDisabled,
  });

  return (
    <Button
      role="button"
      style={style}
      onClick={onClickHandler}
      className={buttonStyle}
      borderColor={borderColor}
      bgColor={bgColor}
      hoverColor={hoverColor}
      defaultIconColor={defaultIconColor}
    >
      <MetIcon icon={icon} color={defaultIconColor} size={24}/>
    </Button>
  );
};
