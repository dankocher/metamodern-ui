import styles from "./index.module.scss";
import React, { FC, ReactElement, useState, useEffect, useRef } from "react";

import styled from "styled-components";

import { colors } from "../styles/colors";
import { MetSelectProps } from "./SelectProps";

import arrowDownIcon from "../../assets/icons/arrow-down-icon";

const Container = styled.div`
  & div {
    border-color: ${(props) => props.borderColor};
    border-radius: ${(props) => (props.isOpen ? "4px 4px 0 0" : "4px")};

    & > div {

      & span {
        color: ${({isSelected, isDisabled, placeholderColor}) => {
          if (isDisabled) {
            return colors.neutral300;
          } else if (isSelected) {
            return colors.neutral800;
          }
          return placeholderColor;
        }} !important;
      }

      & svg {
        & > * {
          fill: ${(props) => (props.isDisabled ? colors.neutral300 : colors.neutral900)};
        }

        transform: ${(props) => (props.isOpen ? "rotate(180deg)" : null)};
      }
    }

    .${styles.selected} {
      background-color: ${(props) => props.selectedColor};
    }

    ul {
        visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};

        opacity: ${(props) => (props.isOpen ? "100%" : "0")};
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
    selectorFontClass = "",
    labelFontClass = "",

    icon = arrowDownIcon,

    isHaveLabel = true,
    label = "",
    placeholder,
    isDisabled = false,

    items,
    multiSelect = false,
    onChange,
    borderColor = colors.neutral300,
    selectedColor = colors.neutral200,
    hoverColor = colors.neutral100,
    placeholderColor = colors.neutral600,
}): ReactElement => {
    const wrapperRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selection, setSelection] = useState([]);

    const toggle = () => {
        if (isDisabled) return;
        setIsOpen(!isOpen);
    };

    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    function handleOnClick(item) {
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

    function isItemInSelection(item) {
        if (selection.some((current) => current.id === item.id)) {
            return true;
        }
        return false;
    }

    function getInSelection() {
        if (selection.length === 0) return false;
        return selection.map((item) => item.value).join(", ");
    }

    return (
        <Container
            ref={wrapperRef}
            style={style}
            className={`${styles.container} ${className}`}
            borderColor={borderColor}
            selectedColor={selectedColor}
            hoverColor={hoverColor}
            isDisabled={isDisabled}
            placeholderColor={placeholderColor}
            isSelected={selection.length !== 0}
            isOpen={isOpen}
        >
            {isHaveLabel ? (
                <label
                    className={`${styles.container__title} ${labelFontClass}`}
                >
                    {label}
                </label>
            ) : null}

            <div className={`${styles.container__field}`}>
                <div onKeyPress={() => toggle()} onClick={() => toggle()}>
                    <span className={selectorFontClass}>{getInSelection() || placeholder}</span>

                    {icon}
                </div>
                <ul>
                    {items.map((item) => (
                        <li
                            onClick={() => handleOnClick(item)}
                            className={isItemInSelection(item) && styles.selected}
                        >
                            <span className={selectorFontClass}>{item.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
};
