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
     * Function get selection
     */
    onChange?: (selection: Array<{ id: number; value: string }>) => void;
    /**
     * Set an icon when component is close
     */
    icon?: any;
    /**
     * Set placeholder when variant not selected
     */
    placeholder?: string;
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
