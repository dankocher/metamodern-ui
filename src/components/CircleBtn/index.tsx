import * as React from "react";

import styles from "./index.module.scss";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

export type MetCircleBtnProps = {
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
   * Сhange border color. First argument color and second color with 0 opacity for right tranzition
   */
  borderColor?: [string, string];
  /**
   * Сhange shadow when component is hovered
   */
  shadowHover?: string;
};

const Button = styled.div`
  background-color: ${(props) => props.bgColor};
  border-color: ${(props) => props.borderColor[0]};

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

    border-color: ${(props) => props.borderColor[1]};
    box-shadow: ${(props) => props.shadowHover};
  }
`;

export const MetCircleBtn: React.FC<MetCircleBtnProps> = ({
  style,
  onClick,
  bgColor = colors.neutral0,
  defaultIconColor = colors.neutral600,
  hoverIconColor = colors.neutral700,
  borderColor = [colors.neutral300, `${colors.neutral300}00`],
  shadowHover = "0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1),0px 1px 8px rgba(0, 0, 0, 0.15)",
  icon,
}) => {
  console.log(borderColor);
  return (
    <Button
      role="button"
      style={style}
      onClick={onClick}
      className={styles.circleBtn}
      bgColor={bgColor}
      shadowHover={shadowHover}
      borderColor={[
        borderColor[0] || colors.neutral300,
        borderColor[0] || `${colors.neutral300}00`,
      ]}
      defaultIconColor={defaultIconColor}
      hoverIconColor={hoverIconColor}
    >
      {icon}
    </Button>
  );
};
