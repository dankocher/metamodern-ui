export declare type MetToggleProps = {
    /**
     * Additional component styles
     */
    style?: object;
    /**
     * Additional component styles
     */
    className?: string;
    /**
     * Set state when component is checked/unchecked
     */
    isChecked: boolean;
    /**
     * Function for trigger event onChange
     */
    onChange: () => void;
    /**
     * Set component disabled
     */
    isDisabled?: boolean;
    /**
     * Сhange track color
     */
    trackColor?: string;
    /**
     * Сhange thumb color when state is unchecked
     */
    thumbOffColor?: string;
    /**
     * Сhange thumb color when state is checked
     */
    thumbOnColor?: string;
    /**
     * Сhange thumb backlight color when component is hovered
     */
    hoverColor?: string;
    /**
     * Сhange shadow of thumb
     */
    shadow?: string;
};
