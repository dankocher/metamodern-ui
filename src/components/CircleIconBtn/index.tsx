import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { Size } from "./size";

export type MetCircleIconBtnProps = {
  /**
   * Additional component styles
   */
  style?: object;
  /**
   * Set an icon for the component
   */
  icon;
  /**
   * Size of Button
   */
  size: Size.lg | Size.sm;
  /**
   * Function for trigger event onClick
   */
  onClick: () => void;
  /**
   * Сhange background color
   */
  bgColor?: string;
  /**
   * Сhange default icon color
   */
  defaultIconColor?: string;
  /**
   * Сhange background color when component is hovered
   */
  hoverColor?: string;
};

const smallSize = "18px";
const largeSize = "30px";

const Button = styled.div`
  height: ${(props) => (props.size === Size.sm ? smallSize : largeSize)};
  width: ${(props) => (props.size === Size.sm ? smallSize : largeSize)};
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

export const MetCircleIconBtn: FC<MetCircleIconBtnProps> = ({
  style,
  onClick,
  size,
  bgColor = size === Size.sm ? colors.neutral800 : colors.transparent,
  defaultIconColor = size === Size.sm ? colors.neutral0 : colors.neutral800,
  hoverColor = size === Size.sm ? colors.neutral900 : colors.neutral200,
  icon,
}): ReactElement => {
  return (
    <Button
      role="button"
      size={size}
      style={style}
      onClick={onClick}
      className={styles.squareBtn}
      bgColor={bgColor}
      hoverColor={hoverColor}
      defaultIconColor={defaultIconColor}
    >
      {icon}
    </Button>
  );
};
