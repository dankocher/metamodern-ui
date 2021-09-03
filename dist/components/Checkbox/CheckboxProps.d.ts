export declare type MetCheckboxProps = {
    /**
     * Additional component styles
     */
    style?: object;
    /**
     * Additional component classes
     */
    className?: string;
    /**
     * Label font for component
     */
    labelFontClass?: string;
    /**
     * Set an icon when component is checked
     */
    checkedIcon?: any;
    /**
     * Set state when component is checked/unchecked
     */
    isChecked: boolean;
    /**
     * Function for trigger event onChange
     */
    onChange: (e: any) => void;
    /**
     * Сhange background color
     */
    bgColor?: string;
    /**
     * Set component disabled
     */
    isDisabled?: boolean;
    /**
     * Сhange background color when component is hovered
     */
    hoverColor?: string;
    /**
     * Сhange border color
     */
    borderColor?: string;
    /**
    * Set border radius
    */
    isRectangleHover?: boolean;
    /**
     * Set placeholder
     */
    label?: string;
};
