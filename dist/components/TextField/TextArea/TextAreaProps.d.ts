import { MetTextFieldProps } from "../TextFieldProps";
export interface MetTextAreaProps extends MetTextFieldProps {
    /**
     * Value when component render first time
     */
    defaultValue?: any;
    /**
     * Minimum number of rows
     */
    rowsMins?: number;
    /**
     * Maximum number of rows
     * (* Works only if line-height in px)
     */
    rowsMax?: number;
}
