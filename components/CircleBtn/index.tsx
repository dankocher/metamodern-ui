import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";
import styled from "styled-components";

export type CircleBtnProps = {
  style?: object;
  bgColor?: string;
  borderColor?: string;
  hoverColor?: string;
  icon;
};

const Button = styled.div`
  background-color: ${(props) => props.bgColor} !important;
  border-color: change-color(
    $color: ${(props) => props.borderColor},
    $alpha: 0.5
  ) !important;
`;

const MetCircleBtn: FC<CircleBtnProps> = ({
  style,
  bgColor,
  borderColor,
  hoverColor,
  icon,
}): ReactElement => {
  return (
    <Button
      role="button"
      className={styles.circleBtn}
      bgColor={bgColor}
      borderColor={borderColor}
    >
      {"qwe"}
    </Button>
  );
};

export default MetCircleBtn;
