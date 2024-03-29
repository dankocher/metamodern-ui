export type MetCheckboxProps = {
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
    checkedIcon?;
    /**
     * Set state when component is checked/unchecked
     */
    isChecked: boolean;
    /**
     * Function for trigger event onChange
     */
    onChange: (e) => void;
    /**
     * Change background and border color
     */
    bgColor?: string;
    /**
     * Set component disabled
     */
    isDisabled?: boolean;
    /**
     * Display label
     */
    isHaveLabel?:boolean;
    /**
     * Сhange background color when component is hovered
     */
    hoverColor?: string;
    /**
    * Set border radius
    */
    isRectangleHover?: boolean;
    /**
     * Set placeholder
     */
    label?: string;

    
};
