import { FC, ImgHTMLAttributes } from "react";
import styles from "./Logo.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import IconLogo from "@/shared/assets/images/Logo.png";
import FullLogo from "@/shared/assets/images/LogoFull.png";

export enum LogoTypes {
    ICON = "icon",
    FULL = "full",
}

interface LogoProps
    extends React.DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    className?: string;
    type?: LogoTypes;
}

export const Logo: FC<LogoProps> = ({ className, type = LogoTypes.ICON, ...otherProps }) => (
    <div className={classNames(styles.logo, className)}>
        <img alt="logo" {...otherProps} src={type === LogoTypes.ICON ? IconLogo : FullLogo} />
    </div>
);
