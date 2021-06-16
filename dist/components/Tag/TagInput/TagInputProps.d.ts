import { MetTagProps } from "../TagProps";
export interface MetTagInputProps extends MetTagProps {
    /**
     * Font color when component is hovered
     */
    hoverFontColor?: string;
    /**
     * Font for component
     */
    fontClass?: string;
    /**
     * Function for trigger event onChange
     */
    onChange: (event: any) => void;
    /**
     * Function for trigger event onBlur
     */
    onBlur?: (event: any) => void;
    /**
     * Function for trigger when clicked checkbox
     */
    onToggle?: () => void;
    /**
     * Set state when component is checked/unchecked
     */
    isChecked: boolean;
    /**
     * Сhange hover checkbox color
     */
    hoverCheckboxColor?: string;
}
