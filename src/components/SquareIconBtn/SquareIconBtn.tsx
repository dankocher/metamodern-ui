import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetSquareIconBtnProps } from "./index";

import MetIcon, { Icons } from "../Icon";

const Button = styled.div`
  background-color: ${(props) => props.bgColor};

  :hover {
    svg {
      > * {
        fill: ${(props) => props.hoverIconColor};
      }
    }

    background-color: ${(props) => props.hoverColor};
  }
`;

export const MetSquareIconBtn: FC<MetSquareIconBtnProps> = ({
  style,
  className = "",
  onClick,
  bgColor = colors.transparent,
  defaultIconColor = colors.neutral600,
  hoverIconColor = colors.neutral700,
  hoverColor = colors.neutral200,
  icon = Icons.deleteOutlined,
}): ReactElement => {
  const onClickHandler = (event) => {
    onClick && onClick(event);
  };

  return (
    <Button
      role="button"
      style={style}
      onMouseDown={onClickHandler}
      className={`${styles.squareBtn} ${className}`}
      bgColor={bgColor}
      hoverColor={hoverColor}
      hoverIconColor={hoverIconColor}
    >
      <MetIcon icon={icon} size={24} color={defaultIconColor}/>
    </Button>
  );
};
