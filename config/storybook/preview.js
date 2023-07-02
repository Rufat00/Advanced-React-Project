import ThemeProvider from "../../src/app/providers/ThemeProvider/ui/ThemeProvider";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
} from "../../src/app/providers/ThemeProvider/lib/ThemeContext";
import "../../src/app/styles/index.scss";
import { useEffect, Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../src/shared/config/i18n/i18n";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const globalTypes = {
    locale: {
        name: "Locale",
        description: "Internationalization locale",
        toolbar: {
            icon: "globe",
            items: [
                { value: "en", title: "English" },
                { value: "ru", title: "Russian" },
            ],
            showName: true,
            dynamicTitle: true,
        },
    },
    theme: {
        title: "Theme",
        description: "Global theme for components",
        defaultValue: localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT,
        toolbar: {
            icon: "paintbrush",
            items: [
                { value: Theme.LIGHT, title: "Light" },
                { value: Theme.DARK, title: "Dark" },
            ],
            dynamicTitle: true,
        },
    },
};

const withThemeProvider = (Story, context) => {
    const { theme } = context.globals;

    return (
        <ThemeProvider>
            <div className={`app ${theme}`}>
                <div style={{ display: "block", paddingBlock: "16px", paddingInline: "8px" }}>
                    <Story />
                </div>
            </div>
        </ThemeProvider>
    );
};

const withI18next = (Story, context) => {
    const { locale } = context.globals;

    useEffect(() => {
        console.log("olk");
        i18n.changeLanguage(locale);
    }, [locale]);

    return (
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
                <Story />
            </I18nextProvider>
        </Suspense>
    );
};

export const decorators = [withThemeProvider, withI18next];
