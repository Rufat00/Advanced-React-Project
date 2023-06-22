import webpack, { RuleSetRule } from "webpack";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.alias = { "@": paths.src };

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: [
            {
                loader: "@svgr/webpack",
                options: {
                    svgoConfig: {
                        plugins: [
                            {
                                name: "removeViewBox",
                                active: false,
                            },
                            {
                                name: "removeDimensions",
                                active: true,
                            },
                        ],
                    },
                },
            },
        ],
    });
    config.module!.rules.push(buildCssLoader(true));

    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEVELOPMENT__: true,
        })
    );

    return config;
};
