import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetRectangleTextBtnProps, Size, Type } from "./index";

const mediumSize = "48px";
const largeSize = "60px";

const Button = styled.div`
  height: ${(props) => (props.size === Size.lg ? largeSize : mediumSize)};
  width: ${(props) => (props.size === Size.lg ? "324px" : "min-content")};

  padding: ${(props) => (props.size === Size.md ? "14px 36px" : null)};

  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.isDisabled ? colors.neutral200 : props.border};

  background-color: ${(props) =>
    props.isDisabled ? colors.transparent : props.bgColor};

  &:hover {
    background-color: ${(props) =>
      props.isDisabled ? null : props.hoverColor};
  }

  & span {
    font-size: ${(props) => (props.size === Size.lg ? "20px" : "14px")};
    line-height: ${(props) => (props.size === Size.lg ? "28px" : "20px")};

    color: ${({ type, isDisabled }) => {
      if (isDisabled) {
        return colors.neutral200;
      }
      switch (type) {
        case Type.fill:
          return colors.neutral0;
        case Type.line || Type.ghost:
          return colors.neutral800;
        case Type.red:
          return colors.red200;
      }
    }};
  }
`;

const setBorder = (type) => {
  switch (type) {
    case Type.line:
      return colors.neutral300;
    case Type.red:
      return colors.red100;
  }
};

const setBgColor = (type) => {
  switch (type) {
    case Type.fill:
      return colors.neutral800;
    case Type.line || Type.ghost || Type.red:
      return colors.transparent;
  }
};

const setHoverColor = (type) => {
  switch (type) {
    case Type.fill:
      return colors.neutral900;
    case Type.line:
      return colors.neutral100;
    case Type.ghost:
      return colors.neutral100;
    case Type.red:
      return colors.red50;
  }
};

export const MetRectangleTextBtn: FC<MetRectangleTextBtnProps> = ({
  style,
  titleFontClass = "",
  className = "",
  size = Size.lg,
  type = Type.fill,
  onClick,
  isDisabled = false,
  border = setBorder(type),
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
      className={`${styles.squareBtn} ${className}`}
      size={size}
      type={type}
      onClick={onClickHandler}
      isDisabled={isDisabled}
      border={border}
      bgColor={bgColor}
      hoverColor={hoverColor}
    >
      <span className={titleFontClass}>{children}</span>
    </Button>
  );
};
