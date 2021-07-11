import React from "react";
import { ButtonProps } from "./types";
declare const Button: {
    <E extends React.ElementType<any> = "button">(props: ButtonProps<E>): JSX.Element;
    defaultProps: {
        variant: "primary";
        size: "md";
        external: boolean;
        isLoading: boolean;
        disabled: boolean;
    };
};
export default Button;
