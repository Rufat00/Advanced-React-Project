import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import Ripple from "../Ripple/Ripple";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum ButtonVariants {
    TEXT = "text",
    CONTAINED = "contained",
    OUTLINED = "outlined",
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariants;
    ripple?: boolean;
    rippleDuration?: number;
    rippleBackgroundColor?: string;
    iconLeft?: any;
    iconRight?: React.VFC<React.SVGProps<SVGSVGElement>>;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
    children,
    className,
    ripple = false,
    rippleDuration,
    variant = ButtonVariants.CLEAR,
    iconLeft,
    iconRight,
    disabled,
    ...otherProps
}) => {
    const canRipple = ripple && !disabled;

    return (
        <button
            className={classNames(styles.button, styles[variant], className)}
            {...otherProps}
            disabled={disabled}
        >
            {iconLeft && <span className={classNames(styles.icon, styles.left)}>{iconLeft}</span>}
            {children}
            {iconRight && (
                <span className={classNames(styles.icon, styles.right)}>{iconRight}</span>
            )}
            {canRipple && <Ripple duration={rippleDuration} />}
        </button>
    );
};
