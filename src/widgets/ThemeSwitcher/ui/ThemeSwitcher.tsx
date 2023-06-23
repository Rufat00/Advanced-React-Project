import { useTheme } from "@/app/providers/ThemeProvider";
import { Button } from "@/shared/ui/Basic/Button/Button";
import styles from "./style.module.scss";
import SunIcon from "@/shared/assets/icons/sun.svg";
import MoonIcon from "@/shared/assets/icons/moon.svg";
import { Theme } from "@/app/providers/ThemeProvider/lib/ThemeContext";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme();

    return (
        <Button
            className={classNames(styles.theme_switcher, className)}
            onClick={() => changeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
        >
            {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
};
