import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "@/app/App";
import ThemeProvider from "@/app/providers/ThemeProvider/ui/ThemeProvider";
import "@/shared/config/i18n/i18n";
import { ErrorBoundary } from "@/app/providers/ErrorBounary";

ReactDOM.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById("root")
);
