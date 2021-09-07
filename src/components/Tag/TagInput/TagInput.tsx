import React, { useState } from "react";

import styles from "./index.module.scss";

import styled from "styled-components";

import { colors } from "../../styles/colors.js";

import { MetTagInputProps } from "./index";

import MetCircleIconBtn, {
  SizeCircleIconBtn as Size,
} from "../../CircleIconBtn";
import MetIcon from "../../Icon";

const classNames = require("classnames");

const Container = styled.div`
  border-color: ${({ isFocused, defaultColor, focusColor }) =>
    isFocused ? focusColor : defaultColor};

  input {
    color: ${({ isFocused, defaultColor, hoverFontColor }) =>
      isFocused ? hoverFontColor : defaultColor};
  }

  :hover {
    input {
      color: ${({ hoverFontColor }) => hoverFontColor};
    }
  }

  .${styles.container__checkbox}:hover {
    .${styles.container__checkbox__hover} {
      background-color: ${({ hoverCheckboxColor }) => hoverCheckboxColor};
    }
  }
`;

export const MetTagInput: React.FC<MetTagInputProps> = ({
  style,
  className = "",
  fontClass = "body1",

  hoverFontColor = colors.neutral700,
  hoverCheckboxColor = colors.neutral200,
  defaultColor = colors.neutral600,
  focusColor = colors.blue,
  checkedIcon = "starFilled",
  uncheckedIcon = "starOutlined",
  onChange,
  onBlur,
  isHasCheckbox = true,
  onToggle,
  isChecked,
  value,
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
    console.log("Test commit");
  };

  const stateStyle = classNames(styles.container, {
    [styles.focused__withCB]: isFocused && isHasCheckbox,
    [styles.focused__withoutCB]: isFocused && !isHasCheckbox,
    [styles.unfocused__withoutCB]: !isFocused && !isHasCheckbox,
  });

  return (
    <Container
      style={style}
      className={`${stateStyle} ${className}`}
      hoverFontColor={hoverFontColor}
      defaultColor={defaultColor}
      hoverCheckboxColor={hoverCheckboxColor}
      focusColor={focusColor}
      isFocused={isFocused}
    >
      {isHasCheckbox ? (
        <div className={styles.container__checkbox} onClick={toggle}>
          <div className={styles.container__checkbox__hover}>
            {isChecked ? <MetIcon icon={checkedIcon} size={16} color={colors.accent1}/>
              : <MetIcon icon={uncheckedIcon} size={16} color={colors.neutral300}/>}
          </div>
        </div>
      ) : null}

      <div className={styles.container__content} onClick={openInput}>
        <span className={fontClass}>{value}</span>
        <input
          ref={innerRef}
          onFocus={focusHandel}
          className={fontClass}
          value={value}
          onChange={onChange}
          onBlur={onBlurHandler}
        />
      </div>
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
    </Container>
  );
};
