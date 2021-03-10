import * as React from "react";

import styles from "./index.module.scss";

import styled from "styled-components";

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
   * Сhange border color
   */
  borderColor?: string;
  /**
   * Сhange shadow when component is hovered
   */
  shadowHover?: string;
};

const Button = styled.div`
  background-color: ${(props) => props.bgColor} !important;
  border-color: ${(props) => props.borderColor} !important;

  & path {
    fill: ${(props) => props.defaultIconColor} !important;
  }

  &:hover {
    & path {
      fill: ${(props) => props.hoverIconColor} !important;
    }

    box-shadow: ${(props) => props.shadowHover} !important;
  }
`;

export const MetCircleBtn: React.FC<MetCircleBtnProps> = ({
  style,
  onClick,
  bgColor,
  defaultIconColor,
  hoverIconColor,
  borderColor,
  shadowHover,
  icon,
}) => {
  return (
    <Button
      role="button"
      style={style}
      onClick={onClick}
      className={styles.circleBtn}
      bgColor={bgColor}
      shadowHover={shadowHover}
      borderColor={borderColor}
      defaultIconColor={defaultIconColor}
      hoverIconColor={hoverIconColor}
    >
      {icon}
    </Button>
  );
};
