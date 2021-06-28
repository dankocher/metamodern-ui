import { MetTagProps } from "../TagProps";
import { MetCircleIconBtnProps } from "../../CircleIconBtn";

export interface MetTagInputProps extends MetTagProps, MetCircleIconBtnProps {
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
