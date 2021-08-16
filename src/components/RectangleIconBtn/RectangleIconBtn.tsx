import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetRectangleIconBtnProps, Type } from "./index";

import plusIcon from "../../assets/icons/plus-icon";

const Button = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.isDisabled ? colors.neutral300 : props.borderColor};

  background-color: ${(props) =>
    props.isDisabled ? colors.transparent : props.bgColor};

  & svg {
    & > * {
      fill: ${(props) =>
        props.isDisabled ? colors.neutral300 : props.defaultIconColor};
    }
  }

  &:hover {
    background-color: ${(props) =>
      props.isDisabled ? colors.transparent : props.hoverColor};
  }
`;

const setDefaultIconColor = (type) => {
  switch (type) {
    case Type.fill:
      return colors.neutral0;
    case Type.line:
      return colors.neutral800;
    case Type.ghost:
      return colors.neutral800;
  }
};

const setBgColor = (type) => {
  switch (type) {
    case Type.fill:
      return colors.neutral800;
    case Type.line:
      return colors.transparent;
    case Type.ghost:
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
  }
};

export const MetRectangleIconBtn: FC<MetRectangleIconBtnProps> = ({
  style,
  className = "",
  onClick,
  isDisabled = false,
  type = Type.fill,
  borderColor = type === Type.line ? colors.neutral100 : colors.transparent,
  bgColor = setBgColor(type),
  defaultIconColor = setDefaultIconColor(type),
  hoverColor = setHoverColor(type),
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
      isDisabled={isDisabled}
      type={type}
      className={`${styles.squareBtn} ${className}`}
      borderColor={borderColor}
      bgColor={bgColor}
      hoverColor={hoverColor}
      defaultIconColor={defaultIconColor}
    >
      {icon}
    </Button>
  );
};
