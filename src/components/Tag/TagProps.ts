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
     * Font for component
     */
    fontClass?: string;
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
