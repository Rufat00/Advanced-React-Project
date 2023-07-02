import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "./router";
import { Navbar } from "@/widgets/Navbar";
import { Suspense } from "react";
import { PageLoader } from "@/shared/ui/PageLoader/PageLoader";
import { Sidebar } from "@/widgets/Sidebar";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", theme)}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content_page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
