import * as React from "react";

import styles from "./index.module.scss";

import styled from "styled-components";

import { colors } from "../../styles/colors.js";

import { MetTagInputProps } from "./TagInputProps";

import smCheckedIcon from "../../../assets/icons/sm-checked-star-icon.js";
import smUncheckedIcon from "../../../assets/icons/sm-unchecked-star-icon.js";

const Container = styled.div`
    border-color: ${(props) => props.defaultColor};
`;

export const MetTagInput: React.FC<MetTagInputProps> = ({
    defaultColor = colors.neutral600,
    checkedIcon = smCheckedIcon,
    uncheckedIcon = smUncheckedIcon,
    isChecked,
    onChange,
    value,
}) => {
    return (
        <Container className={styles.container} defaultColor={defaultColor}>
            <div className={styles.container__checkbox}>
                <div className={styles.container__checkbox__hover}>
                    {isChecked ? checkedIcon : uncheckedIcon}
                </div>
            </div>
            <div className={styles.container__content}>
                <span>{value}</span>
                <input value={value} onChange={onChange} />
            </div>
        </Container>
    );
};
