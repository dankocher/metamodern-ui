import styles from "./index.module.scss";
import React, { FC, ReactElement, useEffect } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import {
  MetRectangleIconBtnProps,
  TypesRectangleIconBtn as Type,
} from "./index";

import plusIcon from "../../assets/icons/plus-icon";

const classNames = require("classnames");

const Button = styled.div`
  &:not(.${styles.disabled}) {
    
  border-color: ${(props) => props.borderColor};

  background-color: ${(props) => props.bgColor};

  svg {
    > * {
      fill: ${(props) => props.defaultIconColor};
    }
  }

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
  icon = plusIcon,
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

  const stateStyle = classNames(`${styles.rectangleIconBtn} ${className}`, {
    [styles.disabled]: isDisabled,
  });

  return (
    <Button
      role="button"
      style={style}
      onClick={onClickHandler}
      type={type}
      className={stateStyle}
      borderColor={borderColor}
      bgColor={bgColor}
      hoverColor={hoverColor}
      defaultIconColor={defaultIconColor}
    >
      {icon}
    </Button>
  );
};
