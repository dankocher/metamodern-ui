import { TypesRectangleIconBtn as Type } from "./index";
export declare type MetRectangleIconBtnProps = {
    /**
     * Is component disabled
     */
    isDisabled?: boolean;
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
    icon?: any;
    /**
     * Type of Button
     */
    type: Type;
    /**
     * Function for trigger event onClick
     */
    onClick: (e: any) => void;
    /**
     * Change border color
     */
    borderColor?: string;
    /**
     * Change background color
     */
    bgColor?: string;
    /**
     * Change default icon color
     */
    defaultIconColor?: string;
    /**
     * Change background color when component is hovered
     */
    hoverColor?: string;
};
