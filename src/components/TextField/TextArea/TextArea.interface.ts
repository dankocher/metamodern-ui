import { MetTextFieldProps } from "../TextField.interface";

export interface MetTextAreaProps extends MetTextFieldProps {
  /**
   * Value when component render first time
   */
  defaultValue?;
  /**
   * Minimum number of rows
   */
  rowsMins?: number;
  /**
   * Maximum number of rows
   * (* Works only if line-height in px)
   */
  rowsMax?: number;
}
