import { MetTextFieldProps } from "../TextFieldProps";

export interface MetInputProps extends MetTextFieldProps {
    /**
     * Add ref to input
     */
    innerRef?: any;
    /**
     * Error font for component
     */
    errorFontClass?: string;
    /**
     * Set an error icon for the component message
     */
    errorIcon?;
    /**
     * Set an success icon for the component message
     * *(if not specified, it will be without an icon)
     */
    successIcon?;
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
