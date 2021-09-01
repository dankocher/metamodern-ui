import React, { FC, ReactElement } from "react";

import styled from "styled-components";
import SVG from "react-inlinesvg";

import { colors } from "../styles/colors.js";

import { MetIconProps, icons } from "./index";

const StyledSVG = styled(SVG)<MetIconProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  & path {
    fill: ${({ color }) => color};
  }
  &:hover {
    path {
      fill: ${({ hoverColor }) => hoverColor};
    }
  }
`;

export const MetIcon: FC<MetIconProps> = ({
  style,
  className,
  color = colors.neutral600,
  hoverColor,
  name = "assignmentOutlined",
  size = 36,
}): ReactElement => (
  <StyledSVG style={style} className={className} color={color} hoverColor={hoverColor} src={icons[name]} width={size} height={size} />
);
