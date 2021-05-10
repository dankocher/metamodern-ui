export interface MetTagInputProps {
    /**
     * Value
     */
    value: string;
    /**
     * Function for trigger event onChange
     */
    onChange: (event: any) => void;
    /**
     * Set state when component is checked/unchecked
     */
    isChecked: boolean;
    /**
     * Set an icon when component is checked
     */
    checkedIcon?;
    /**
     * Set an icon when component is unchecked
     */
    uncheckedIcon?;
    /**
     * Сhange border color when input is default
     */
    defaultColor?: string;
    /**
     * Сhange border color when input is focused
     */
    focusColor?: string;
}
