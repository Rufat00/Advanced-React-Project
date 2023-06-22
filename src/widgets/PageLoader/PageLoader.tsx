import { Loader } from "@/shared/ui/Feedback/Loader/Loader";
import styles from "./style.module.scss";

export const PageLoader = () => {
    return (
        <div className={styles.page_loader}>
            <Loader />
        </div>
    );
};
