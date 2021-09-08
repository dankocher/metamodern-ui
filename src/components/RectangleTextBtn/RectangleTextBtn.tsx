import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetRectangleTextBtnProps } from "./index";

import { SizeRectangleTextBtn as Size } from "./sizeRectangleTextBtn.enum";
import { TypesRectangleTextBtn as Type } from "./typesRectangleTextBtn.enum";

const classNames = require("classnames");

const Button = styled.div`
  :not(.${styles.disabled}) {
    border-color: ${(props) => props.borderColor};

    background-color: ${(props) => props.bgColor};

    :hover:not(.${styles.disabled}) {
      background-color: ${(props) => props.hoverColor};
    }
  }
`;

const getBorderColor = (type) => {
  switch (type) {
    case Type.PRIMARY:
      return colors.transparent;
    case Type.SECONDARY:
      return colors.neutral300;
    case Type.GHOST:
      return colors.transparent;
    case Type.ATTENTION:
      return colors.red100;
  }
};

const getHoverColor = (type) => {
  switch (type) {
    case Type.PRIMARY:
      return colors.neutral900;
    case Type.SECONDARY:
      return colors.neutral100;
    case Type.GHOST:
      return colors.neutral100;
    case Type.ATTENTION:
      return colors.red50;
  }
};

export const MetRectangleTextBtn: FC<MetRectangleTextBtnProps> = ({
  style,
  titleFontClass = "",
  className = "",
  size = Size.LARGE,
  type = Type.PRIMARY,
  onClick,
  isDisabled = false,
  borderColor = getBorderColor(type),
  bgColor = type === Type.PRIMARY ? colors.neutral800 : colors.transparent,
  hoverColor = getHoverColor(type),
  children = "Продолжить",
}): ReactElement => {
  const onClickHandler = (event) => {
    if (onClick == null || isDisabled) return;
    onClick(event);
  };

  const stateStyle = classNames(styles.rectangleBtn, {
    [styles.disabled]: isDisabled,
    [styles.largeRectangleBtn]: size === Size.LARGE,
    [styles.smallRectangleBtn]: size === Size.SMALL,
  });

  const titleStyle = classNames(titleFontClass, {
    [styles.primaryFontColor]: type === Type.PRIMARY,
    [styles.secondaryFontColor]: type === Type.SECONDARY || type === Type.GHOST,
    [styles.attentionFontColor]: type === Type.ATTENTION,
  });

  return (
    <Button
      role="button"
      style={style}
      className={`${stateStyle} ${className}`}
      size={size}
      type={type}
      onClick={onClickHandler}
      isDisabled={isDisabled}
      borderColor={borderColor}
      bgColor={bgColor}
      hoverColor={hoverColor}
    >
      <span className={titleStyle}>{children}</span>
    </Button>
  );
};
