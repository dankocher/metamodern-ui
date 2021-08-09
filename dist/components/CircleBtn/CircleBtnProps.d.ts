export declare type MetCircleBtnProps = {
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
     * Function for trigger event onClick
     */
    onClick: (e: any) => void;
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
     * Сhange border color. First argument color and second color with 0 opacity for right tranzition
     */
    borderColor?: [string, string];
    /**
     * Сhange shadow when component is hovered
     */
    shadowHover?: string;
};
