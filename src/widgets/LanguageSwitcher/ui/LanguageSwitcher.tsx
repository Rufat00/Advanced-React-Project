import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Basic/Button/Button";
import styles from "./style.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    };

    return (
        <Button
            className={classNames(styles.language_switcher, className)}
            onClick={() => toggle()}
        >
            {i18n.language === "en" ? "RU" : "EN"}
        </Button>
    );
};
