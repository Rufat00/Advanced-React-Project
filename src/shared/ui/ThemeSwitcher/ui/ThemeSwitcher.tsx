import { classNames } from "@/shared/lib/classNames/classNames";
import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import LightIcon from "@/shared/assets/icons/theme-light.svg";
import DarkIcon from "@/shared/assets/icons/theme-dark.svg";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames("", {}, className)}
            onClick={() => changeTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
        >
            {theme === Theme.DARK ? (
                <DarkIcon height={45} width={45} />
            ) : (
                <LightIcon height={45} width={45} />
            )}
        </Button>
    );
};
