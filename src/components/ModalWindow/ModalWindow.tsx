import * as React from "react";

import styles from "./index.module.scss";

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
  message,
  acceptLabel,
  cancelLabel,
  acceptColor = colors.red200,
  cancelColor = colors.transparent,
  iconColor = colors.red200,
  isDisplayed = false,
  acceptOnClick,
  cancelOnClick,
  onClose,
}) => {
  const onCloseHandler = (event) => {
    onClose && onClose(event);
  };

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      onCloseHandler(event);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const acceptOnClickHandler = (event) => {
    acceptOnClick && acceptOnClick(event);
    onCloseHandler(event);
  };

  const cancelOnClickHandler = (event) => {
    cancelOnClick && cancelOnClick(event);
    onCloseHandler(event);
  };

  const stateStyle = classNames(styles.container, {
    [className]: className,
    [styles.invisible]: !isDisplayed,
  });

  return (
    <div style={style} className={stateStyle}>
      <div className={styles.blur} onClick={(event) => onCloseHandler(event)} />
      <div className={styles.modalWindow}>
        <MetCircleIconBtn
          onClick={(event) => {
            onCloseHandler(event);
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
          <div className={`${styles.message} ${fontClass}`}>{message}</div>
        </div>
        <div className={styles.buttons}>
          <MetRectangleTextBtn
            onClick={acceptOnClickHandler}
            type={TypesRectangleTextBtn.PRIMARY}
            bgColor={acceptColor}
            hoverColor={acceptColor}
            size={SizeRectangleTextBtn.SMALL}
          >
            {acceptLabel}
          </MetRectangleTextBtn>
          <MetRectangleTextBtn
            onClick={cancelOnClickHandler}
            type={TypesRectangleTextBtn.GHOST}
            size={SizeRectangleTextBtn.SMALL}
            bgColor={cancelColor}
            hoverColor={cancelColor}
          >
            {cancelLabel}
          </MetRectangleTextBtn>
        </div>
      </div>
    </div>
  );
};
