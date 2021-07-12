import { ComponentProps, ElementType, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import { LayoutProps, SpaceProps } from "styled-system";
export declare const sizes: {
    readonly SM: "sm";
    readonly MD: "md";
};
export declare const variants: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly TERTIARY: "tertiary";
    readonly TEXT: "text";
    readonly DANGER: "danger";
    readonly SUBTLE: "subtle";
    readonly SUCCESS: "success";
};
export declare type Sizes = typeof sizes[keyof typeof sizes];
export declare type Variants = typeof variants[keyof typeof variants];
export declare type AsProps<E extends ElementType = ElementType> = {
    as?: E;
};
export declare type MergeProps<E extends ElementType> = AsProps<E> & Omit<ComponentProps<E>, keyof AsProps>;
export declare type PolymorphicComponentProps<E extends ElementType, P> = P & MergeProps<E>;
export declare type PolymorphicComponent<P, D extends ElementType = "button"> = <E extends ElementType = D>(props: PolymorphicComponentProps<E, P>) => ReactElement | null;
export interface BaseButtonProps extends LayoutProps, SpaceProps {
    variant?: Variants;
    size?: Sizes;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    fullWidth?: boolean;
    as?: "a" | "button" | typeof Link;
    href?: string;
    external?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
}
export declare type ButtonThemeVariant = {
    background: string;
    backgroundActive: string;
    backgroundHover: string;
    border: string | number;
    borderColorHover: string;
    boxShadow: string;
    boxShadowActive: string;
    color: string;
};
export declare type ButtonTheme = {
    [key in Variants]: ButtonThemeVariant;
};
export declare type ButtonProps<P extends ElementType = "button"> = PolymorphicComponentProps<P, BaseButtonProps>;
