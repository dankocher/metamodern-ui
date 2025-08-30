import styles from "./index.module.scss";
import React, { FC, ReactElement, useRef, useState, useEffect } from "react";

import styled from "styled-components";

import { colors } from "../../styles/colors";
import { MetTextAreaProps } from "./TextArea.interface";

import { TextFieldState as stateTF } from "../textFieldState.enum";

const classNames = require("classnames");

interface ContainerProps {
  defaultColor: string;
  focusColor: string;
  hoverColor: string;
  errorColor: string;
  successColor: string;
}

const Container = styled.div<ContainerProps>`
  textarea {
    & + div {
      border-color: ${(props) => props.defaultColor};
    }

    &:focus:not(.${styles.error}, .${styles.success}) + div {
      border-color: ${(props) => props.focusColor};
    }

    &:hover:not(:focus, :disabled, .${styles.error}, .${styles.success}) + div {
      border-color: ${(props) => props.hoverColor};
    }
  }

  .${styles.error} {
    & + div {
      border-color: ${(props) => props.errorColor};
    }
  }

  .${styles.success} {
    & + div {
      border-color: ${(props) => props.successColor};
    }
  }
`;

export const MetTextArea: FC<MetTextAreaProps> = ({
  style,
  className = "",
  inputFontClass = styles.body2,
  labelFontClass = styles.subtitle2,

  isTextField,
  label = "",
  labelChildren,

  onChange,
  onBlur,
  isTextSelected = false,
  isDisabled = false,
  defaultValue = "",
  value,
  rowsMins = 1,
  rowsMax = 5,
  state = stateTF.DEFAULT,

  defaultColor = colors.neutral300,
  hoverColor = colors.neutral600,
  focusColor = colors.blue,
  errorColor = colors.red200,
  successColor = colors.green,
  ...args
}): ReactElement => {
  const textAreaRef = useRef(null);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [isSizeFixed, setIsSizeFixed] = useState(false);

  useEffect(() => {
    if (defaultValue === value) return;
    setTextAreaHeight("auto");
  }, [defaultValue]);

  useEffect(() => {
    const node = textAreaRef.current;
    const scrollHeight = node.scrollHeight;
    const nodeStyle = window.getComputedStyle(node);

    // get padding of textAret in numbers
    const padding = parseInt(
      nodeStyle.getPropertyValue("padding").replace("px", "")
    );

    // get lineHeight of textAret in numbers
    const lineHeight = parseInt(
      nodeStyle.getPropertyValue("line-height").replace("px", "")
    );

    // if maxRow >= rows
    if (
      !isNaN(lineHeight) &&
      (scrollHeight - padding * 2) / lineHeight >= rowsMax
    ) {
      setIsSizeFixed(true);
      setTextAreaHeight(`${padding * 2 + lineHeight * rowsMax}px`);
    } else {
      setIsSizeFixed(false);
      setTextAreaHeight(`${scrollHeight}px`);
    }
  }, [value]);

  const onChangeHandler = (event) => {
    setTextAreaHeight("auto");

    onChange && onChange(event);
  };

  const onFocusHandler = (event) => isTextSelected && event.target.select();

  const stateStyle = classNames({
    [styles.error]: state === stateTF.ERROR,
    [styles.success]: state === stateTF.SUCCESS,
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
      <div className={styles.labelContainer}>
        {isTextField && (
          <>
            <label className={`${styles.container__title} ${labelFontClass}`}>
              {label}
            </label>
            {labelChildren}
          </>
        )}
      </div>
      <div className={styles.inputArea} style={{ height: textAreaHeight }}>
        <textarea
          {...args}
          ref={textAreaRef}
          rows={rowsMins}
          style={{
            overflow: isSizeFixed ? "overlay" : "hidden",
          }}
          value={value}
          disabled={isDisabled}
          className={`${stateStyle} ${inputFontClass}`}
          onChange={onChangeHandler}
          onBlur={onBlur}
          onFocus={onFocusHandler}
        />
        <div className={styles.inputArea__outline} />
      </div>
    </Container>
  );
};
