import styles from "./index.module.scss";
import React, { FC, ReactElement, useEffect, useRef, useState } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors";
import { MetSelectProps } from "./index";
import { SelectState } from "./selectState.enum";

import MetIcon, { Icons } from "../Icon";

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

  &.${styles.error} {
    > div {
      border-color: ${(props) => props.errorColor};
    }
    ul {
      border-left-color: ${(props) => props.errorColor};
      border-right-color: ${(props) => props.errorColor};
      border-bottom-color: ${(props) => props.errorColor};
    }
  }

  &.${styles.success} {
    > div {
      border-color: ${(props) => props.successColor};
    }
    ul {
      border-left-color: ${(props) => props.successColor};
      border-right-color: ${(props) => props.successColor};
      border-bottom-color: ${(props) => props.successColor};
    }
  }
`;

export const MetSelect: FC<MetSelectProps> = ({
  style,
  className,
  valueID,
  selectorFontClass = styles.basefont,
  labelFontClass = styles.subtitle2,
  bottomChildren,

  icon = Icons.arrowDownOutlined,

  isHaveLabel = true,
  label = "",
  placeholder,
  isDisabled = false,
  multiSelect = false,

  state = SelectState.DEFAULT,

  items,
  defaultSelectionID = [],
  onChange = () => {},

  borderColor = colors.neutral300,
  selectedColor = colors.neutral200,
  hoverColor = colors.neutral100,
  placeholderColor = colors.neutral600,
  errorColor = colors.red200,
  successColor = colors.green,
}): ReactElement => {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState([]);

  const checkID = (IDs) => {
    let selectedItems = [];
    IDs.forEach((id) => {
      selectedItems.push(items.find((item) => item.id === id));
    });
    selectedItems = selectedItems.filter((item) => item);

    if (selectedItems.length) {
      setSelection(selectedItems);
    }
  };

  useEffect(() => {
    if (valueID && valueID.length) checkID(valueID);
  }, [valueID]);

  useEffect(() => {
    checkID(defaultSelectionID);
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

  const stateStyle = classNames(styles.container, {
    [className]: className,
    [styles.disabled]: isDisabled,
    [styles.open]: isOpen,
    [styles.error]: state === SelectState.ERROR,
    [styles.success]: state === SelectState.SUCCESS,
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
      errorColor={errorColor}
      successColor={successColor}
      isSelected={selection.length !== 0}
      isOpen={isOpen}
    >
      {isHaveLabel && (
        <label className={`${styles.container__title} ${labelFontClass}`}>
          {label}
        </label>
      )}

      <div className={`${styles.container__field}`}>
        <div onClick={() => onToggle()}>
          <span className={selectorFontClass}>
            {getInSelection() || placeholder}
          </span>

          <MetIcon icon={icon} size={16} />
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
          {bottomChildren && (
            <div className={styles.bottomChildren}>{bottomChildren}</div>
          )}
        </ul>
      </div>
    </Container>
  );
};
