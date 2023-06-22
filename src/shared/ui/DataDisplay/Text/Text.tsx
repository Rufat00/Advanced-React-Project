import { useTranslation } from "react-i18next";

interface TextProps {
    i18nKey: string;
    loadingNamespace?: string;
}

export const Text = ({ i18nKey, loadingNamespace }: TextProps) => {
    const { t } = useTranslation(loadingNamespace || null);

    return <>{t(i18nKey)}</>;
};
