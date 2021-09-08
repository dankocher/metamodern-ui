import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import { MetTagButtonProps } from "./index";

import styled from "styled-components";

import { colors } from "../../styles/colors.js";

import MetIcon, { Icons } from "../../Icon";

const Container = styled.div`
  border-color: ${({ defaultColor, isChoosed, focusColor }) =>
    isChoosed ? focusColor : defaultColor};

  color: ${({ defaultColor, focusColor, isChoosed }) =>
    isChoosed ? focusColor : defaultColor};

  :hover {
    color: ${({ hoverColor, focusColor, isChoosed }) =>
      isChoosed ? focusColor : hoverColor};

    svg {
      & > * {
        fill: ${({ focusIconColor }) => focusIconColor};
      }
    }
  }

  svg {
    > * {
      fill: ${({ defaultColor, focusIconColor, isChoosed }) =>
        isChoosed ? focusIconColor : defaultColor};
    }
  }
`;

export const MetTagButton: FC<MetTagButtonProps> = ({
  style,
  className = "",
  fontClass = "",

  defaultColor = colors.neutral600,
  hoverColor = colors.neutral700,
  focusColor = colors.blue,
  focusIconColor = colors.accent1,

  isHasCheckbox = true,
  checkedIcon = Icons.starFilled,

  onToggle,
  isChoosed,

  value,
}): ReactElement => {
  const onToggleHandler = () => {
    onToggle && onToggle();
  };

  return (
    <Container
      style={style}
      className={`${styles.container} ${className}`}
      defaultColor={defaultColor}
      hoverColor={hoverColor}
      focusColor={focusColor}
      focusIconColor={focusIconColor}
      isChoosed={isChoosed}
      onClick={onToggleHandler}
    >
      {isHasCheckbox ? <i><MetIcon icon={checkedIcon} size={16} color={defaultColor}/></i> : null}

      <span className={fontClass}>{value}</span>
    </Container>
  );
};
