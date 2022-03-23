import { MetCircleIconBtnProps } from "../CircleIconBtn";

export interface MetTooltipProps extends MetCircleIconBtnProps {
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
     * Function for trigger event onHover for the tooltip
     */
     onHover: (e) => void;
    /**
     * Whether the floating tooltip card is visible or not
     */
    isOpen: boolean;
    /**
     * Font for component
     */
    fontClass?: string;
}
