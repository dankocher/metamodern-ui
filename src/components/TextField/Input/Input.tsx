import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../../styles/colors.js";
import { TextFieldState as stateTF } from "../textFieldState.enum";

import { MetInputProps } from "./Input.interface";

import MetIcon from "../../Icon";

const classNames = require("classnames");

const Container = styled.div`
  input {
    &:focus:not(.${styles.error}, .${styles.success}) + div {
      border-color: ${(props) => props.focusColor};
    }

    &:hover:not(:focus, :disabled, .${styles.error}, .${styles.success}) + div {
      border-color: ${(props) => props.hoverColor};
    }

    & + div {
      border-color: ${(props) => props.defaultColor};
    }
  }

  .${styles.error} {
    & + div {
      border-color: ${(props) => props.errorColor};
    }
  }

  .${styles.errorMessage} {
    color: ${(props) => props.errorColor};

    & svg {
      & > * {
        fill: ${(props) => props.errorColor};
      }
    }
  }

  .${styles.success} {
    & + div {
      border-color: ${(props) => props.successColor};
    }
  }

  .${styles.successMessage} {
    span {
      color: ${(props) => props.successColor};
    }

    & svg {
      & > * {
        fill: ${(props) => props.successColor};
      }
    }
  }
`;

export const MetTextField: FC<MetInputProps> = ({
  style,
  className = "",
  inputFontClass = "",
  labelFontClass = "",
  errorFontClass = "",

  innerRef,
  value,
  onChange,
  onBlur,
  isTextField,
  label = "",
  placeholder,
  isDisabled = false,

  state = stateTF.DEFAULT,

  errorIcon = "errorFilled",
  successIcon = "successFilled",
  errorMessage,
  successMessage,

  defaultColor = colors.neutral300,
  hoverColor = colors.neutral600,
  focusColor = colors.blue,
  errorColor = colors.red200,
  successColor = colors.green,
}): ReactElement => {
  const getMessage = (state, isTextField) => {
    if (!isTextField || isDisabled) return;

    switch (state) {
      case stateTF.ERROR:
        return (
          <div className={containerMessage}>
            <MetIcon icon={errorIcon} size={18} color={colors.red200}/>
            <span className={errorFontClass}>{errorMessage}</span>
          </div>
        );
      case stateTF.SUCCESS:
        return (
          <div className={containerMessage}>
            <MetIcon icon={successIcon} size={18} color={colors.green}/>
            <span className={errorFontClass}>{successMessage}</span>
          </div>
        );
    }
  };

  const stateStyle = classNames({
    [styles.error]: state === stateTF.ERROR,
    [styles.success]: state === stateTF.SUCCESS,
  });

  const containerMessage = classNames(styles.container_message, {
    [styles.errorMessage]: state === stateTF.ERROR,
    [styles.successMessage]: state === stateTF.SUCCESS,
  });

  return (
    <Container
      className={`${styles.container} ${className}`}
      defaultColor={defaultColor}
      hoverColor={hoverColor}
      focusColor={focusColor}
      errorColor={errorColor}
      successColor={successColor}
    >
      {isTextField ? (
        <label className={`${styles.container__title} ${labelFontClass}`}>
          {label}
        </label>
      ) : null}
      <div className={styles.inputContainer}>
        <input
          ref={innerRef}
          style={style}
          className={`${stateStyle} ${inputFontClass}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={isDisabled}
        />
        <div className={styles.inputContainer__outline} />
      </div>

      {getMessage(state, isTextField)}
    </Container>
  );
};
