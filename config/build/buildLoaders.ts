import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node-modules/,
    };

    const babelLoader = {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
            },
        },
    };

    const svgLoader = {
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
    };

    const styleLoader = {
        test: /\.(sass|scss|css)$/,
        use: [
            options.isInDevelopmentMode ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /.*\.module\.(css|scss|sass)$/,
                        localIdentName: options.isInDevelopmentMode
                            ? "[path][name].[local].[hash:base64:5]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)/i,
        use: "file-loader",
    };

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, styleLoader];
}
