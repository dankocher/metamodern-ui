import styles from "./index.module.scss";
import React, { FC, ReactElement } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors.js";
import { textFieldState as stateTF } from "./textFieldState";

import { MetTextFieldProps } from "./TextFieldProps";

const Container = styled.div`
  input {
    border-color: ${(props) => props.defaultColor};

    &:focus:not(.${styles.error}, .${styles.success}) {
      border-color: ${(props) => props.focusColor};
    }

    &:hover:not(:focus, :disabled, .${styles.error}, .${styles.success}) {
      border-color: ${(props) => props.hoverColor};
    }
  }

  .${styles.error} {
    border-color: ${(props) => props.errorColor};
  }

  .${styles.error} + div {
    color: ${(props) => props.errorColor};

    & svg {
      & > * {
        fill: ${(props) => props.errorColor};
      }
    }
  }

  .${styles.success} {
    border-color: ${(props) => props.successColor};
  }

  .${styles.success} + div {
    color: ${(props) => props.successColor};

    & svg {
      & > * {
        fill: ${(props) => props.successColor};
      }
    }
  }
`;

export const MetTextField: FC<MetTextFieldProps> = ({
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
          <div className={styles.container_message}>
            {errorIcon}
            <span className="caption">{errorMessage}</span>
          </div>
        );
      case stateTF.success:
        return (
          <div className={styles.container_message}>
            {successIcon}
            <span className="caption">{successMessage}</span>
          </div>
        );
    }
  };

  return (
    <Container
      className={styles.container}
      defaultColor={defaultColor}
      hoverColor={hoverColor}
      focusColor={focusColor}
      errorColor={errorColor}
      successColor={successColor}
    >
      {isTextField ? <label className="subtitle2">{label}</label> : null}
      <input
        style={style}
        className={`${state === stateTF.error ? styles.error : null} 
        ${state === stateTF.success ? styles.success : null} body2`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={isDisabled}
      ></input>

      {getMessage(state, isTextField)}
    </Container>
  );
};
