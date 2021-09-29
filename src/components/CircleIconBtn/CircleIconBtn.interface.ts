import { SizeCircleIconBtn as Size } from "./index";

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
    icon?;
    /**
     * Size of Button
     */
    size?: Size.LARGE | Size.SMALL;
    /**
     * Function for trigger event onClick icon btn
     */
    onClick: (e) => void;
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
