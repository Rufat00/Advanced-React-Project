import { FC, ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum AvatarSizes {
    XLG = "xlg", // 192px
    LG = "lg", // 96px
    MD = "md", // 64px
    SM = "sm", // 44px
    XS = "xs", // 24px
}

interface AvatarProps
    extends React.DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    className?: string;
    src?: string;
    alt: string;
    size?: AvatarSizes;
}

export const Avatar: FC<AvatarProps> = ({
    className,
    src,
    alt,
    size = AvatarSizes.MD,
    ...otherProps
}) => (
    <div className={classNames(styles.avatar, styles[size], className)}>
        <img src={src} alt={alt} {...otherProps} />
    </div>
);
