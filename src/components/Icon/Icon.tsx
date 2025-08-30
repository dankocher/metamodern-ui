import React, { FC, ReactElement } from "react";

import styled from "styled-components";
import SVG from "react-inlinesvg";

import { colors } from "../styles/colors.js";

import { MetIconProps } from "./index";
import { Icons } from "./icons.enum";

interface StyledProps {
  color?: string;
  size?: number;
}

const StyledSVG = styled(SVG)<StyledProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  * {
    fill: ${({ color }) => color};
  }
`;

export const MetIcon: FC<MetIconProps> = ({
  style,
  className,
  color = colors.neutral600,
  icon = Icons.factCheckOutlined,
  size = 36,
}): ReactElement => (
  <StyledSVG
    style={style}
    className={className}
    color={color}
    src={`${icon}`}
    height={size}
    width={size}
  />
);
