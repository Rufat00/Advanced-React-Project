import { classNames } from "@/shared/lib/classNames/classNames";
import { Link } from "@/shared/ui/Link/Link";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import styles from "./style.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <header className={classNames(styles.navbar, className)}>
        <Link to="/"></Link>
        <nav className={styles.navigation}>
            <Link to="/">-</Link>
            <Link to="/about">-</Link>
        </nav>
        <div>
            <ThemeSwitcher />
            <LanguageSwitcher />
        </div>
    </header>
);
