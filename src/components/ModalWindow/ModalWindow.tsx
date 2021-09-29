import * as React from "react";

import styles from "./index.module.scss";

import styled from "styled-components";

import { colors } from "../styles/colors.js";

import { MetModalWindowProps } from "./ModalWindow.interface";
import MetCircleIconBtn, { SizeCircleIconBtn } from "../CircleIconBtn";
import MetIcon, { Icons } from "../Icon";
import MetRectangleTextBtn, {
  SizeRectangleTextBtn,
  TypesRectangleTextBtn,
} from "../RectangleTextBtn";
import { useEffect } from "react";

const classNames = require("classnames");

export const MetModalWindow: React.FC<MetModalWindowProps> = ({
  style,
  className = "",
  fontClass = styles.subtitle3,
  icon = Icons.errorOutline,
  title,
  text,
  acceptText,
  cancelText,
  acceptColor = colors.red200,
  cancelColor = "transparent",
  iconColor = colors.red200,
  isDisplayed = false,
  acceptOnClick,
  cancelOnClick,
  onClose,
}) => {
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  const escFunction = (event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  };
  const acceptOnClickHandler = (event) => {
    acceptOnClick && acceptOnClick(event);
    onClose();
  };

  const cancelOnClickHandler = (event) => {
    cancelOnClick && cancelOnClick(event);
    onClose();
  };

  const stateStyle = classNames(styles.container, {
    [className]: className,
    [styles.invisible]: !isDisplayed,
  });

  return (
    <div style={style} className={stateStyle}>
      <div className={styles.blur} onClick={() => onClose()} />
      <div className={styles.modalWindow}>
        <MetCircleIconBtn
          onClick={() => {
            onClose();
          }}
          classNameIconBtn={styles.closeButton}
          size={SizeCircleIconBtn.LARGE}
        />
        <MetIcon
          className={styles.icon}
          icon={icon}
          size={144}
          color={iconColor}
        />
        <div className={styles.text}>
          <div className={styles.header}>{title}</div>
          <div className={`${styles.message} ${fontClass}`}>{text}</div>
        </div>
        <div className={styles.buttons}>
          <MetRectangleTextBtn
            onClick={acceptOnClickHandler}
            type={TypesRectangleTextBtn.PRIMARY}
            bgColor={acceptColor}
            hoverColor={acceptColor}
            size={SizeRectangleTextBtn.SMALL}
          >
            {acceptText}
          </MetRectangleTextBtn>
          <MetRectangleTextBtn
            onClick={cancelOnClickHandler}
            type={TypesRectangleTextBtn.GHOST}
            size={SizeRectangleTextBtn.SMALL}
            bgColor={cancelColor}
            hoverColor={cancelColor}
          >
            {cancelText}
          </MetRectangleTextBtn>
        </div>
      </div>
    </div>
  );
};
