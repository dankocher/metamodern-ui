import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetRectangleTextBtnProps, Size, Type } from "./index";

const Button = styled.div`
  border-color: ${(props) =>
    props.isDisabled ? colors.neutral200 : props.borderColor};

  background-color: ${(props) =>
    props.isDisabled ? colors.transparent : props.bgColor};

  &:hover {
    background-color: ${(props) =>
      props.isDisabled ? null : props.hoverColor};
  }

  & span {
    color: ${({ type, isDisabled }) => {
      if (isDisabled) {
        return colors.neutral200;
      }
      switch (type) {
        case Type.PRIMARY:
          return colors.neutral0;
        case Type.SECONDARY:
          return colors.neutral800;
        case Type.GHOST:
          return colors.neutral800;
        case Type.ATTENTION:
          return colors.red200;
      }
    }};
  }
`;

const setBorderColor = (type) => {
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

const setBgColor = (type) => {
  switch (type) {
    case Type.PRIMARY:
      return colors.neutral800;
    case Type.SECONDARY || Type.GHOST || Type.ATTENTION:
      return colors.transparent;
  }
};

const setHoverColor = (type) => {
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
  borderColor = setBorderColor(type),
  bgColor = setBgColor(type),
  hoverColor = setHoverColor(type),
  children = "Продолжить",
}): ReactElement => {
  const onClickHandler = (e) => {
    if (onClick == null) return;
    onClick(e);
  };

  return (
    <Button
      role="button"
      style={style}
      className={`${styles.rectangleBtn} ${
        size === Size.LARGE
          ? styles.largeRectangleBtn
          : styles.mediumRectangleBtn
      } ${styles.withBorder} ${className}`}
      size={size}
      type={type}
      onClick={onClickHandler}
      isDisabled={isDisabled}
      borderColor={borderColor}
      bgColor={bgColor}
      hoverColor={hoverColor}
    >
      <span
        className={`${
          size === Size.LARGE ? "body0" : "subtitle3"
        } ${titleFontClass}`}
      >
        {children}
      </span>
    </Button>
  );
};
