export type MetSquareIconCheckboxProps = {
    /**
     * Additional component styles
     */
    style?: object;
    /**
     * Set an icon when component is checked
     */
    checkedIcon?;
    /**
     * Set an icon when component is unchecked
     */
    uncheckedIcon?;
    /**
     * Set state when component is checked/unchecked
     */
    isChecked: boolean;
    /**
     * Function for trigger event onChange
     */
    onChange: () => void;
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
     * Сhange icon color when component is hovered
     */
    hoverIconColor?: string;
};
