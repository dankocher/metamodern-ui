import { MetTagProps } from "../TagProps";

export interface MetTagButtonProps extends MetTagProps {
    /**
     * Set state when component is choosed/unchoosed (TagButton)
     */
    isChoosed: boolean;
    /**
     * Сhange text color when component is hovered
     */
    hoverColor?: string;
    /**
     * Сhange icon color when component is hovered and choosed
     */
    focusIconColor?: string;
}
