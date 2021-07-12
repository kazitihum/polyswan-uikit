/// <reference types="react" />
import { DefaultTheme } from "styled-components";
declare const StyledButton: import("styled-components").StyledComponent<"button", DefaultTheme, import("./types").BaseButtonProps & import("./types").AsProps<"button"> & Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "as">, never>;
export default StyledButton;
