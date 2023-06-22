import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Chip.module.scss";

export enum ChipTypes {
    CONTAINED = "contained",
    COLORED_PRIMARY = "colored_primary",
    COLORED_SECONDARY = "colored_secondary",
    COLORED_BLUE = "colored_blue",
    COLORED_GREEN = "colored_green",
    COLORED_RED = "colored_red",
}

interface ChipProps {
    className?: string;
    type?: ChipTypes;
}

export const Chip: FC<ChipProps> = ({
    type = ChipTypes.CONTAINED,
    children,
    className,
    ...otherProps
}) => (
    <div {...otherProps} className={classNames(styles.chip, styles[type], className)}>
        {children}
    </div>
);
