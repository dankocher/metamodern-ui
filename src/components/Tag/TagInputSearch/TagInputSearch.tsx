import React, { useEffect, useState } from "react";

import styles from "./index.module.scss";

import styled from "styled-components";

import { colors } from "../../styles/colors.js";

import { MetTagInputSearchProps } from "./index";

import MetCircleIconBtn, {
  SizeCircleIconBtn as Size,
} from "../../CircleIconBtn";
import MetIcon, { Icons } from "../../Icon";

const classNames = require("classnames");

const Container = styled.div`
  border-color: ${({ isFocused, defaultBorderColor, focusColor }) =>
    isFocused ? focusColor : defaultBorderColor};
  .${styles.textWrapper} {
    color: ${({ isFocused, defaultFontColor, hoverFontColor }) =>
      isFocused ? hoverFontColor : defaultFontColor};
  }
  :hover {
    .${styles.textWrapper} {
      color: ${({ hoverFontColor }) => hoverFontColor};
    }
  }
  .${styles.container__checkbox}:hover {
    .${styles.container__checkbox__hover} {
      background-color: ${({ hoverCheckboxColor }) => hoverCheckboxColor};
    }
  }
`;

export const MetTagInputSearch: React.FC<MetTagInputSearchProps> = ({
  style,
  className = "",
  fontClass = styles.body1,

  hoverFontColor = colors.neutral700,
  hoverCheckboxColor = colors.neutral200,
  defaultFontColor = colors.neutral600,
  defaultBorderColor = colors.neutral600,
  focusColor = colors.blue,
  checkedIcon = Icons.starFilled,
  uncheckedIcon = Icons.starOutlined,
  onChange,
  onBlur,
  isHasCheckbox = true,
  onToggle,
  isChecked,
  isButtonVisible,
  value,
  searchValue,
  innerRef,

  onClick,
  icon,
  bgColor,
  defaultIconColor,
  hoverColor,
  styleIconBtn,
  classNameIconBtn,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [textParts, setTextParts] = useState({ head: null, teal: null });

  const toggle = () => {
    onToggle && onToggle();
  };

  const onBlurHandler = (event) => {
    setIsFocused(false);

    onBlur && onBlur(event);
  };

  const openInput = (e) => {
    if (e.target.lastElementChild == null) return;
    e.target.lastElementChild.select();
  };

  const focusHandel = (e) => {
    setIsFocused(true);
    e.target.select();
  };

  const stateStyle = classNames(styles.container, {
    [styles.focused__withCB]: isFocused && isHasCheckbox,
    [styles.focused__withoutCB]: isFocused && !isHasCheckbox,
    [styles.unfocused__withoutCB]: !isFocused && !isHasCheckbox,
  });

  useEffect(() => {
    let index = value.indexOf(searchValue);
    if (index === -1) {
      setTextParts({ head: value, teal: null });
    } else {
      setTextParts({
        head: value.slice(0, index),
        teal: value.slice(index + searchValue.length, value.length),
      });
    }
  }, [searchValue, value]);

  return (
    <Container
      style={style}
      className={`${stateStyle} ${className}`}
      hoverFontColor={hoverFontColor}
      defaultFontColor={defaultFontColor}
      defaultBorderColor={defaultBorderColor}
      hoverCheckboxColor={hoverCheckboxColor}
      focusColor={focusColor}
      isFocused={isFocused}
    >
      {isHasCheckbox ? (
        <div className={styles.container__checkbox} onClick={toggle}>
          <div className={styles.container__checkbox__hover}>
            {isChecked ? (
              <MetIcon icon={checkedIcon} size={16} color={colors.accent1} />
            ) : (
              <MetIcon
                icon={uncheckedIcon}
                size={16}
                color={colors.neutral300}
              />
            )}
          </div>
        </div>
      ) : null}
      <div className={styles.container__content} onClick={openInput}>
        <div className={styles.textWrapper}>
          <span className={fontClass}>
            {textParts.head}
            {textParts.teal !== null && (
              <span className={styles.substring}>{searchValue}</span>
            )}
            {textParts.teal}
          </span>
        </div>

        <input
          ref={innerRef}
          onFocus={focusHandel}
          className={fontClass}
          value={value}
          onChange={onChange}
          onBlur={onBlurHandler}
        />
      </div>
      {isButtonVisible && (
        <div className={styles.container__close}>
          <MetCircleIconBtn
            styleIconBtn={styleIconBtn}
            classNameIconBtn={classNameIconBtn}
            onClick={onClick}
            size={Size.SMALL}
            icon={icon}
            bgColor={bgColor}
            defaultIconColor={defaultIconColor}
            hoverColor={hoverColor}
          />
        </div>
      )}
    </Container>
  );
};
