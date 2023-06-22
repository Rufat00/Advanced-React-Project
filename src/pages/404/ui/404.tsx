import { Text } from "@/shared/ui/DataDisplay/Text/Text";
import styles from "./style.module.scss";

const NotFoundPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>404</h1>
            <h3 className={styles.description}>
                <Text i18nKey="Page not found" />
            </h3>
        </div>
    );
};

export default NotFoundPage;
