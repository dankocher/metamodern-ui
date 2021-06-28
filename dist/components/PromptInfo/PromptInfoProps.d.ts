import { MetCircleIconBtnProps } from "../CircleIconBtn";
export interface MetPromptInfoProps extends MetCircleIconBtnProps {
    /**
     * Additional component styles
     */
    style?: object;
    /**
     * Additional component classes
     */
    className?: string;
    /**
     * Value
     */
    value: string;
    /**
     * Font for component
     */
    isOpen: boolean;
    /**
     * Font for component
     */
    fontClass?: string;
}
