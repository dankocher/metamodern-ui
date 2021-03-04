import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";
import styled from "styled-components";

export type MetSquareIconBtnProps = {
  style?: object;
  onClick: () => void;
  bgColor?: string;
  defaultIconColor?: string;
  hoverIconColor?: string;
  hoverColor?: string;
  icon;
};

const Button = styled.div`
  background-color: ${(props) => props.bgColor} !important;

  & path {
    fill: ${(props) => props.defaultIconColor} !important;
  }

  &:hover {
    & path {
      fill: ${(props) => props.hoverIconColor} !important;
    }

    background-color: ${(props) => props.hoverColor} !important;
  }
`;

const MetSquareIconBtn: FC<MetSquareIconBtnProps> = ({
  style,
  onClick,
  bgColor,
  defaultIconColor,
  hoverIconColor,

  hoverColor,
  icon,
}): ReactElement => {
  return (
    <Button
      role="button"
      style={style}
      onClick={onClick}
      className={styles.squareBtn}
      bgColor={bgColor}
      hoverColor={hoverColor}
      defaultIconColor={defaultIconColor}
      hoverIconColor={hoverIconColor}
    >
      {icon}
    </Button>
  );
};

export default MetSquareIconBtn;
