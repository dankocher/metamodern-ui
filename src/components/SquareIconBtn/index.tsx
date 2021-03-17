import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

export type MetSquareIconBtnProps = {
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
   * Сhange icon color when component is hovered
   */
  hoverIconColor?: string;
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
    & svg {
      & > * {
        fill: ${(props) => props.hoverIconColor};
      }
    }

    background-color: ${(props) => props.hoverColor};
  }
`;

export const MetSquareIconBtn: FC<MetSquareIconBtnProps> = ({
  style,
  onClick,
  bgColor = colors.transparent,
  defaultIconColor = colors.neutral600,
  hoverIconColor = colors.$neutral700,

  hoverColor = colors.neutral200,
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
      hoverIconColor={hoverIconColor}
    >
      {icon}
    </Button>
  );
};
