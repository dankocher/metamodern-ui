import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetCircleIconBtnProps } from "./index";

import { SizeCircleIconBtn as Size } from "./sizeCircleIconBtn.enum";

import MetIcon, { Icons } from "../Icon";

const smallSize = "18px";
const largeSize = "30px";

interface ButtonProps {
  size: Size;
  bgColor: string;
  hoverColor: string;
  defaultIconColor: string;
}

const Button = styled.div<ButtonProps>`
  height: ${(props) => (props.size === Size.SMALL ? smallSize : largeSize)};
  width: ${(props) => (props.size === Size.SMALL ? smallSize : largeSize)};
  background-color: ${(props) => props.bgColor};

  svg {
    > * {
      fill: ${(props) => props.defaultIconColor};
    }
  }

  :hover {
    background-color: ${(props) => props.hoverColor};
  }
`;

export const MetCircleIconBtn: FC<MetCircleIconBtnProps> = ({
  styleIconBtn,
  classNameIconBtn = "",
  onClick,
  size = Size.SMALL,
  bgColor = size === Size.SMALL ? colors.neutral800 : colors.transparent,
  defaultIconColor = size === Size.SMALL ? colors.neutral0 : colors.neutral800,
  hoverColor = size === Size.SMALL ? colors.neutral900 : colors.neutral200,
  icon = Icons.crossOutlined,
}): ReactElement => {
  const onClickHandler = (event) => {
    onClick && onClick(event);
  };

  return (
    <Button
      role="button"
      size={size}
      style={styleIconBtn}
      onClick={onClickHandler}
      className={`${styles.squareBtn} ${classNameIconBtn}`}
      bgColor={bgColor}
      hoverColor={hoverColor}
      defaultIconColor={defaultIconColor}
    >
      <MetIcon icon={icon} color={defaultIconColor} size={size === Size.SMALL ? 8 : 14}/>
    </Button>
  );
};
