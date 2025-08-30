import * as React from "react";

import styles from "./index.module.scss";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetCircleBtnProps } from "./index";

import MetIcon, { Icons } from "../Icon";

interface ButtonProps {
  bgColor: string;
  hoverIconColor: string;
  borderColor: [string, string];
  shadowHover: string;
}

const Button = styled.div<ButtonProps>`
  background-color: ${(props) => props.bgColor};
  border-color: ${(props) => props.borderColor[0]};
  
  :hover {
    svg {
      > * {
        fill: ${(props) => props.hoverIconColor};
      }
    }

    border-color: ${(props) => props.borderColor[1]};
    box-shadow: ${(props) => props.shadowHover};
  }
`;

export const MetCircleBtn: React.FC<MetCircleBtnProps> = ({
  style,
  className = "",
  onClick,
  bgColor = colors.neutral0,
  defaultIconColor = colors.neutral600,
  hoverIconColor = colors.neutral700,
  borderColor = [colors.neutral300, `${colors.neutral300}00`],
  shadowHover = "0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1),0px 1px 8px rgba(0, 0, 0, 0.15)",
  icon = Icons.arrowOutlined,
}) => {
  const onClickHandler = (event) => {
    onClick && onClick(event);
  };

  return (
    <Button
      role="button"
      style={style}
      onClick={onClickHandler}
      className={`${styles.circleBtn} ${className}`}
      bgColor={bgColor}
      shadowHover={shadowHover}
      borderColor={[
        borderColor[0] || colors.neutral300,
        borderColor[0] || `${colors.neutral300}00`,
      ]}
      hoverIconColor={hoverIconColor}
    >
      <MetIcon icon={icon} size={16} color={defaultIconColor}/>
    </Button>
  );
};
