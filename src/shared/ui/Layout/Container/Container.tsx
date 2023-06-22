import { FC } from "react";
import styles from "./Container.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ContainerProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string;
}

export const Container: FC<ContainerProps> = ({ className, children }) => (
    <div className={classNames(styles.container, className)}>{children}</div>
);
