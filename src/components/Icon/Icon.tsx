import React, { FC, ReactElement } from "react";

import styled from "styled-components";
import SVG from "react-inlinesvg";

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
  color = "black",
  hoverColor,
  name = "assignmentOutlined",
  size = 36,
}): ReactElement => (
  <StyledSVG style={style} className={className} color={color} hoverColor={hoverColor} src={icons[name]} width={size} height={size} />
);
