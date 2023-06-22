import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "./router";
import { Navbar } from "@/widgets/Navbar";
import { Suspense } from "react";
import { PageLoader } from "@/widgets/PageLoader/PageLoader";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", theme)}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
