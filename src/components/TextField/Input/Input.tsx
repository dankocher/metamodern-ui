import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../../styles/colors.js";
import { textFieldState as stateTF } from "../TextFieldState";

import { MetInputProps } from "./InputProps";

const classNames = require("classnames");

const Container = styled.div`
  input {
    &:focus:not(.${styles.error}, .${styles.success}) + label {
      border-color: ${(props) => props.focusColor};
    }

    &:hover:not(:focus, :disabled, .${styles.error}, .${styles.success})
      + label {
      border-color: ${(props) => props.hoverColor};
    }

    & + label {
      border-color: ${(props) => props.defaultColor};
    }
  }

  .${styles.error} {
    & + label {
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
    & + label {
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

  value,
  onChange,
  onBlur,
  isTextField,
  label = "",
  placeholder,
  isDisabled = false,

  state = stateTF.default,

  errorIcon,
  successIcon,
  errorMessage,
  successMessage,

  defaultColor = colors.neutral300,
  hoverColor = colors.neutral600,
  focusColor = colors.blue,
  errorColor = colors.red,
  successColor = colors.green,
}): ReactElement => {
  const getMessage = (state, isTextField) => {
    if (!isTextField || isDisabled) return;

    switch (state) {
      case stateTF.error:
        return (
          <div className={containerMessage}>
            {errorIcon}
            <span className="caption">{errorMessage}</span>
          </div>
        );
      case stateTF.success:
        return (
          <div className={containerMessage}>
            {successIcon}
            <span className="caption">{successMessage}</span>
          </div>
        );
    }
  };

  const stateStyle = classNames({
    [styles.error]: state === stateTF.error,
    [styles.success]: state === stateTF.success,
  });

  const containerMessage = classNames(styles.container_message, {
    [styles.errorMessage]: state === stateTF.error,
    [styles.successMessage]: state === stateTF.success,
  });

  return (
    <Container
      className={styles.container}
      defaultColor={defaultColor}
      hoverColor={hoverColor}
      focusColor={focusColor}
      errorColor={errorColor}
      successColor={successColor}
      containerMessage={containerMessage}
    >
      {isTextField ? (
        <label className={`${styles.container__title} subtitle2`}>
          {label}
        </label>
      ) : null}
      <div className={styles.inputContainer}>
        <input
          style={style}
          className={`${stateStyle} body2`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={isDisabled}
          id="Met-input"
        />
        <label
          htmlFor="Met-input"
          className={styles.inputContainer__outline}
        ></label>
      </div>

      {getMessage(state, isTextField)}
    </Container>
  );
};
