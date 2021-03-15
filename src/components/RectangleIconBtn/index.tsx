import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

export type MetRectangleIconBtnProps = {
  /**
   * Additional component styles
   */
  style?: object;
  /**
   * Set an icon for the component
   */
  icon;
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

const Button = styled.div`
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

export const MetRectangleIconBtn: FC<MetRectangleIconBtnProps> = ({
  style,
  onClick,
  bgColor = colors.neutral800,
  defaultIconColor = colors.neutral0,
  hoverColor = colors.neutral900,
  icon,
}): ReactElement => {
  return (
    <Button
      role="button"
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
