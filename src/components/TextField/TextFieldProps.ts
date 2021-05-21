import { textFieldState as stateTF } from "./TextFieldState";

export interface MetTextFieldProps {
    /**
     * Additional component styles
     */
    style?: object;
    /**
     * Additional component styles
     */
    className?: string;
    /**
     * Input font for component
     */
    inputFontClass?: string;
    /**
     * Value
     */
    value: string;
    /**
     * Function for trigger event onChange
     */
    onChange: (event: any) => void;
    /**
     * Function for trigger event onBlur
     */
    onBlur?: (event: any) => void;
    /**
     * Placeholder
     */
    placeholder?: string;
    /**
     * Is component disabled
     */
    isDisabled?: boolean;
    /**
     * Set component state
     */
    state?: stateTF;
    /**
     * Сhange border color when input is default
     */
    defaultColor?: string;
    /**
     * Сhange border color when input is hovered
     */
    hoverColor?: string;
    /**
     * Сhange border color when input is focused
     */
    focusColor?: string;
    /**
     * Сhange color of border/icon/message when input is error
     */
    errorColor?: string;
    /**
     * Сhange color of border/icon/message when input is success
     */
    successColor?: string;
}
