export type MetRectangleIconBtnProps = {
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
