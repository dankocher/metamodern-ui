export interface MetTagInputProps {
    /**
     * Additional component styles
     */
    style?: object;
    /**
     * Additional component styles
     */
    className?: object;
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
     * Is element has checkbox
     */
    isHasCheckbox?: boolean;
    /**
     * Function for trigger when clicked checkbox
     */
    onToggle?: () => void;
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
    /**
     * Сhange hover checkbox color
     */
    hoverCheckboxColor?: string;
}
