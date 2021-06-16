export interface MetTagProps {
    /**
     * Additional component styles
     */
    style?: object;
    /**
     * Additional component classes
     */
    className?: string;
    /**
     * Value
     */
    value: string;
    /**
     * Is component has checkbox(TagInput) / checked icon (TagButton)
     */
    isHasCheckbox?: boolean;
    /**
     * Function for trigger when clicked on checkbox(TagInput) / component (TagButton)
     */
    onToggle?: () => void;
    /**
     * Set an icon when component is checked
     */
    checkedIcon?: any;
    /**
     * Set an icon when component is unchecked
     */
    uncheckedIcon?: any;
    /**
     * Сhange border color when input is default
     */
    defaultColor?: string;
    /**
     * Сhange border color when input is focused
     */
    focusColor?: string;
}
