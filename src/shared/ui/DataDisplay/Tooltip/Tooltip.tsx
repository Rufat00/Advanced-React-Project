import { FC, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Tooltip.module.scss";

export enum TooltipPositions {
    RIGHT = "right",
    LEFT = "left",
    TOP = "top",
    BOTTOM = "bottom",
}

interface TooltipProps {
    className?: string;
    content: ReactNode;
    position?: TooltipPositions;
    arrow?: boolean;
}

export const Tooltip: FC<TooltipProps> = ({
    children,
    className,
    content,
    position = TooltipPositions.TOP,
    arrow = true,
    ...otherProps
}) => (
    <div className={styles.tooltip_trigger}>
        {children}
        <div className={classNames(styles.tooltip_wrapper, styles[position])}>
            <div
                className={classNames(
                    styles.tooltip,
                    arrow && styles[`arrow_${position}`],
                    className
                )}
                {...otherProps}
            >
                {content}
            </div>
        </div>
    </div>
);
