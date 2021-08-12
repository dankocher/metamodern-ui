export interface MetSelectProps {
    /**
     * Additional component styles
     */
    style?: object;
    /**
     * Additional component classes
     */
    className?: string;
    /**
     * Selector font for component
     */
    selectorFontClass?: string;
    /**
     * Label font for component
     */
    labelFontClass?: string;
    /**
     * Function get selection
     */
    onChange?: (selection: Array<{ id: number; value: string }>) => void;
    /**
     * Set visual type of component Select
     */
    isHaveLabel?: boolean;
    /**
     * Set label for Select component
     */
    label?: string;
    /**
     * Set an error icon for the component message
     */
    icon?: any;
    /**
     * Set placeholder when variant not selected
     */
    placeholder?: string;
    /**
     * Is component disabled
     */
    isDisabled?: boolean;
    /**
     * Set variants type { id: number; value: string }
     */
    items: Array<{ id: number; value: string }>;
    /**
     *  When true you can choose 2 or more variants
     */
    multiSelect?: boolean;
    /**
     * Сhange border color
     */
    borderColor?: string;
    /**
     * Сhange background color of selected option
     */
    selectedColor?: string;
    /**
     * Сhange background color of hovered option
     */
    hoverColor?: string;
    /**
     * Сhange color of placeholder
     */
    placeholderColor?: string;
}
