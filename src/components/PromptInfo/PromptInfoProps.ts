import { MetCircleIconBtnProps } from "../CircleIconBtn";

export interface MetPromptInfoProps extends MetCircleIconBtnProps {
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
