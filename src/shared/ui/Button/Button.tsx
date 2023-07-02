import { classNames } from "@/shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "background_inverted",
}

export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, square, size = ButtonSize.M, ...otherProps } = props;

    const mods: Record<string, boolean> = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(styles.button, mods, className)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
