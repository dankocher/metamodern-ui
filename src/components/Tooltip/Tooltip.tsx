import styles from "./index.module.scss";
import React, { FC, ReactElement, useEffect, useRef } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";
import { SizeCircleIconBtn as Size } from "../CircleIconBtn/sizeCircleIconBtn.enum";

import { MetTooltipProps } from "./index";

import MetCircleIconBtn from "../CircleIconBtn";
import { Icons } from "../Icon";

const Container = styled.div`
  background-color: ${(props) => props.bgColor};
`;

export const MetTooltip: FC<MetTooltipProps> = ({
  style,
  className = "",
  fontClass = styles.subtitle3,
  isOpen,

  onClick,
  onHover,
  value,
  bgColor = colors.neutral800,
  defaultIconColor,
  hoverColor = colors.neutral900,
  icon = Icons.infoOutlined,
  styleIconBtn,
  classNameIconBtn,
}): ReactElement => {
  const wrapperRef = useRef(null);

  function handleHover(event) {
    onHover(event);
  }

  useEffect(() => {
    wrapperRef.current.addEventListener("mouseenter", handleHover);
    wrapperRef.current.addEventListener("mouseleave", handleHover);
    return () => {
      wrapperRef.current.removeEventListener("mouseenter", handleHover);
      wrapperRef.current.removeEventListener("mouseleave", handleHover);
    };
  }, [wrapperRef]);

  return (
    <Container
      ref={wrapperRef}
      style={style}
      className={`${styles.container} ${className} ${fontClass}`}
    >
      <MetCircleIconBtn
        styleIconBtn={styleIconBtn}
        classNameIconBtn={`${classNameIconBtn} ${styles.iconBtn}`}
        onClick={onClick}
        size={Size.SMALL}
        bgColor={isOpen ? hoverColor : bgColor}
        defaultIconColor={defaultIconColor}
        hoverColor={hoverColor}
        icon={icon}
      />
      {isOpen && (
        <div className={styles.wrapper}>
          <div className={styles.wrapper__info}>{value}</div>
        </div>
      )}
    </Container>
  );
};
