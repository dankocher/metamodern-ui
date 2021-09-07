import styles from "./index.module.scss";
import React, { FC, ReactElement, useState, useEffect, useRef } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors";
import { MetSelectProps } from "./SelectProps";

import MetIcon from "../Icon";

const classNames = require("classnames");

const Container = styled.div`
  > div {
    border-color: ${(props) => props.borderColor};

    > div {
      span:not(.${styles.disabled} span) {
        color: ${({ placeholderColor, isSelected }) =>
          isSelected ? colors.neutral800 : placeholderColor};
      }
    }

    .${styles.selected} {
      background-color: ${(props) => props.selectedColor};
    }

    ul {
      border-color: ${(props) => props.borderColor};

      li:hover:not(.${styles.selected}) {
        background-color: ${(props) => props.hoverColor};
      }
    }
  }
`;

export const MetSelect: FC<MetSelectProps> = ({
  style,
  className = "",
  selectorFontClass = "basefont",
  labelFontClass = "subtitle2",

  icon = "arrowDownOutlined",

  isHaveLabel = true,
  label = "",
  placeholder,
  isDisabled = false,
  multiSelect = false,

  items,
  defaultSelection = [],
  onChange = () => {},

  borderColor = colors.neutral300,
  selectedColor = colors.neutral200,
  hoverColor = colors.neutral100,
  placeholderColor = colors.neutral600,
}): ReactElement => {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    setSelection(defaultSelection);
  }, []);

  useEffect(() => {
    if (isDisabled) {
      setIsOpen(false);
    }
  }, [isDisabled]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const onToggle = () => {
    if (isDisabled) return;
    setIsOpen(!isOpen);
  };

  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  function selectItem(item) {
    if (selection.some((current) => current.id === item.id)) {
      const selectionAfterRemoval = selection.filter(
        (current) => current.id !== item.id
      );
      setSelection(selectionAfterRemoval);
      onChange(selectionAfterRemoval);
    } else {
      if (multiSelect) {
        setSelection([...selection, item]);
        onChange([...selection, item]);
      } else {
        setIsOpen(!isOpen);
        setSelection([item]);
        onChange([item]);
      }
    }
  }

  function getSelectedClass(item) {
    if (selection.some((current) => current.id === item.id)) {
      return styles.selected;
    }
    return;
  }

  function getInSelection() {
    if (selection.length === 0) return false;
    return selection.map((item) => item.value).join(", ");
  }

  const stateStyle = classNames(`${styles.container} ${className}`, {
    [styles.disabled]: isDisabled,
    [styles.open]: isOpen,
  });

  return (
    <Container
      ref={wrapperRef}
      style={style}
      className={stateStyle}
      borderColor={borderColor}
      selectedColor={selectedColor}
      hoverColor={hoverColor}
      placeholderColor={placeholderColor}
      isSelected={selection.length !== 0}
      isOpen={isOpen}
    >
      {isHaveLabel ? (
        <label className={`${styles.container__title} ${labelFontClass}`}>
          {label}
        </label>
      ) : null}

      <div className={`${styles.container__field}`}>
        <div onClick={() => onToggle()}>
          <span className={selectorFontClass}>
            {getInSelection() || placeholder}
          </span>

          <MetIcon icon={icon} size={16}/>
        </div>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => selectItem(item)}
              className={getSelectedClass(item)}
            >
              <span className={selectorFontClass}>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
