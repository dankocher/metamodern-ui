import styles from "./index.module.scss";
import React, { FC, ReactElement, useRef, useState, useEffect } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors";
import { MetSelectProps } from "./SelectProps";

const classNames = require("classnames");

const Container = styled.div``;

export const MetSelect: FC<MetSelectProps> = ({
  title,
  items,
  multiSelect = false,
}): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setIsOpen(!isOpen);

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <div
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle()}
        onClick={() => toggle()}
      >
        <div>
          <span>{title}</span>
        </div>
        <div>
          <span>{isOpen ? "Close" : "Open"}</span>
        </div>
      </div>
      {isOpen && (
        <ul>
          {items.map((item) => (
            <li>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && "Selected"}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
