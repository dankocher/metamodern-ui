import { MetTextFieldProps } from "../TextFieldProps";
export interface MetInputProps extends MetTextFieldProps {
    /**
     * Add ref to input
     */
    innerRef?: any;
    /**
     * Label font for component
     */
    labelFontClass?: string;
    /**
     * Error font for component
     */
    errorFontClass?: string;
    /**
     * Set visual type of component TextField/Input
     */
    isTextField: boolean;
    /**
     * Set label for TextField component
     */
    label?: string;
    /**
     * Set an error icon for the component message
     */
    errorIcon?: any;
    /**
     * Set an success icon for the component message
     * *(if not specified, it will be without an icon)
     */
    successIcon?: any;
    /**
     * Set an error text for the component message
     * *(if not specified, it will be without an icon)
     */
    errorMessage?: string;
    /**
     * Set an success text for the component message
     */
    successMessage?: string;
}
