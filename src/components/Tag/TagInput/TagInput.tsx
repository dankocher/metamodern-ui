import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
    useLayoutEffect,
} from "react";

import styles from "./index.module.scss";

import styled from "styled-components";

import { colors } from "../../styles/colors.js";

import { MetTagInputProps } from "./TagInputProps";

import smCheckedIcon from "../../../assets/icons/sm-checked-star-icon.js";
import smUncheckedIcon from "../../../assets/icons/sm-unchecked-star-icon.js";
import smallCrossIcon from "../../../assets/icons/small-cross-icon.js";

import { useResizeObserver } from "../../../helpers/hooks/useResizeObserver";
import { MetCircleIconBtn, Size } from "../../CircleIconBtn";

const classNames = require("classnames");

const Container = styled.div`
    border-color: ${({ isFocused, defaultColor, focusColor }) =>
        isFocused ? focusColor : defaultColor};
    .${styles.container__checkbox}:hover {
        .${styles.container__checkbox__hover} {
            background-color: ${({ hoverCheckboxColor }) => hoverCheckboxColor};
        }
    }
`;

export const MetTagInput: React.FC<MetTagInputProps> = ({
    hoverCheckboxColor = colors.neutral200,
    defaultColor = colors.neutral600,
    focusColor = colors.blue,
    checkedIcon = smCheckedIcon,
    uncheckedIcon = smUncheckedIcon,
    onChange,
    onBlur,
    isHasCheckbox = true,
    onToggle,
    isChecked,

    value,
}) => {
    const spanRef = useRef(null);
    // const spanRef = useCallback(null);

    const [inputWidth, setIputWidth] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const [width, _] = useResizeObserver(spanRef);
    // useEffect(() => {
    //     // setIputWidth(width);
    //     console.log(width);
    // }, [width]);

    const toggle = () => {
        if (onToggle == null) return;
        onToggle();
    };
    const onBlurHandler = (event) => {
        setIsFocused(false);

        if (onBlur == null) return;
        onBlur(event);
    };

    // const measuredRef = useCallback((node) => {
    //     if (node !== null) {
    //         const width = node.getBoundingClientRect().width;
    //         console.log(width);
    //         setIputWidth(width);

    //         //   setHeight(node.getBoundingClientRect().height);
    //     }
    // }, []);

    // useEffect(() => {
    //     const handleResizeSpan = () => {
    //         console.log("qwe");
    //     };

    //     const span = document.getElementById("qwe");

    //     console.log(span);

    //     span.addEventListener("resize", handleResizeSpan);
    // }, []);

    // useLayoutEffect(() => {
    //     setTimeout(() => {
    //         console.log("////");
    //         const node = spanRef.current;

    //         const nodeStyle = window.getComputedStyle(node);
    //         const spanWidth = nodeStyle.width;

    //         console.log(node.clientWidth);
    //         console.log(node.offsetWidth);
    //     }, 100);
    // }, [value]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         const node = spanRef.current;
    //         const nodeStyle = window.getComputedStyle(node);

    //         // debugger;

    //         const spanWidth = node.clientWidth;
    //         // nodeStyle.getPropertyValue("blockSize");

    //         // debugger;

    //         // const width = parseInt(spanWidth.replace("px", ""));
    //         console.log(node.clientWidth);
    //         console.log(node.offsetWidth);

    //         setIputWidth(spanWidth + 5);
    //     }, 100);
    // }, [value]);

    const openInput = (e) => {
        // console.log(e.target.lastElementChild);

        // debugger;
        if (e.target.lastElementChild == null) return;
        e.target.lastElementChild.focus();
    };

    const stateStyle = classNames(styles.container, {
        [styles.focused__withCB]: isFocused && isHasCheckbox,
        [styles.focused__withoutCB]: isFocused && !isHasCheckbox,
        [styles.unfocused__withoutCB]: !isFocused && !isHasCheckbox,
    });

    return (
        <Container
            className={stateStyle}
            defaultColor={defaultColor}
            hoverCheckboxColor={hoverCheckboxColor}
            focusColor={focusColor}
            isFocused={isFocused}
        >
            <div className={styles.container__close}>
                <MetCircleIconBtn
                    onClick={() => {}}
                    size={Size.sm}
                    icon={smallCrossIcon}
                />
            </div>
            {isHasCheckbox ? (
                <div className={styles.container__checkbox} onClick={toggle}>
                    <div className={styles.container__checkbox__hover}>
                        {isChecked ? checkedIcon : uncheckedIcon}
                    </div>
                </div>
            ) : null}

            <div
                className={styles.container__content}
                onClick={openInput}
                // style={{ width: `${inputWidth + 11}px` }}
            >
                <span
                    ref={spanRef}
                    className={`body1`}
                    // contentEditable={true}
                    // id={"qwe"}
                >
                    {value}
                </span>
                <input
                    style={{ width: `${inputWidth}px` }}
                    onFocus={() => setIsFocused(true)}
                    className={`body1`}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlurHandler}
                />
            </div>
        </Container>
    );
};
