import { Text } from "@/shared/ui/DataDisplay/Text/Text";
import styles from "./style.module.scss";

const ErrorPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>500</h1>
            <h3 className={styles.description}>
                <Text i18nKey="Something went wrong" />
            </h3>
        </div>
    );
};

export default ErrorPage;
