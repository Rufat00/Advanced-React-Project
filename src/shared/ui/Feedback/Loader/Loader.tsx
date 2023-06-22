import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./style.module.scss";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return <div className={classNames(styles.loader, className)}></div>;
};
