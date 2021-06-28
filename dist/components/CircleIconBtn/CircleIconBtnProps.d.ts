import { Size } from "./index";
export interface MetCircleIconBtnProps {
    /**
     * Additional icon btn styles
     */
    styleIconBtn?: object;
    /**
     * Additional icon btn classes
     */
    classNameIconBtn?: string;
    /**
     * Set an icon for the icon btn
     */
    icon?: any;
    /**
     * Size of Button
     */
    size?: Size.lg | Size.sm;
    /**
     * Function for trigger event onClick icon btn
     */
    onClick: () => void;
    /**
     * Сhange background color icon btn
     */
    bgColor?: string;
    /**
     * Сhange default icon color
     */
    defaultIconColor?: string;
    /**
     * Сhange background color when icon btn is hovered
     */
    hoverColor?: string;
}
