export type MetSquareIconBtnProps = {
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
    onClick: (e) => void;
    /**
     * Сhange background color
     */
    bgColor?: string;
    /**
     * Сhange default icon color
     */
    defaultIconColor?: string;
    /**
     * Сhange icon color when component is hovered
     */
    hoverIconColor?: string;
    /**
     * Сhange background color when component is hovered
     */
    hoverColor?: string;
};
