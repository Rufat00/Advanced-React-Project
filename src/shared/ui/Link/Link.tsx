import { FC } from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Link.module.scss";

interface LinkProps extends RouterLinkProps {
    className?: string;
    hoverEffect?: boolean;
}

export const Link: FC<LinkProps> = ({ to, className, hoverEffect, children, ...otherProps }) => (
    <RouterLink
        to={to}
        className={classNames(styles.link, hoverEffect && styles.hover_effect, className)}
        {...otherProps}
    >
        {children}
    </RouterLink>
);
