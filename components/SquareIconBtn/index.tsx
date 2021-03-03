import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";
import styled from "styled-components";

export type MetSquareIconBtnProps = {
  style?: object;
  onClick: () => void;
  bgColor?: string;
  defaultIconColor?: string;
  hoverIconColor?: string;
  borderColor?: string;
  shadowHover?: string;
  icon?;
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

const MetCircleBtn: FC<MetSquareIconBtnProps> = ({
  style,
  onClick,
  bgColor,
  defaultIconColor,
  hoverIconColor,
  borderColor,
  shadowHover,
  icon,
}): ReactElement => {
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

export default MetCircleBtn;
