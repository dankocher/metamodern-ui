import { Size } from "./index";

export type MetCircleIconBtnProps = {
    /**
     * Additional component styles
     */
    style?: object;
    /**
     * Additional component classes
     */
    className?: string;
    /**
     * Set an icon for the component
     */
    icon?;
    /**
     * Size of Button
     */
    size: Size.lg | Size.sm;
    /**
     * Function for trigger event onClick
     */
    onClick: () => void;
    /**
     * Сhange background color
     */
    bgColor?: string;
    /**
     * Сhange default icon color
     */
    defaultIconColor?: string;
    /**
     * Сhange background color when component is hovered
     */
    hoverColor?: string;
};
