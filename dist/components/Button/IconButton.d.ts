/// <reference types="react" />
import { ButtonProps } from "./types";
declare const IconButton: import("styled-components").StyledComponent<{
    <E extends import("react").ElementType<any> = "button">(props: ButtonProps<E>): JSX.Element;
    defaultProps: {
        variant: "primary";
        size: "md";
        external: boolean;
        isLoading: boolean;
        disabled: boolean;
    };
}, import("styled-components").DefaultTheme, import("./types").BaseButtonProps & import("./types").AsProps<"button"> & Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "as">, never>;
export default IconButton;
