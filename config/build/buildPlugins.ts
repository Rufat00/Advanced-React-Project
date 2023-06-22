import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: options.paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles/[name].[contenthash:10].css",
            chunkFilename: "styles/[name].[contenthash:10].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEVELOPMENT__: options.isInDevelopmentMode,
        }),
    ];

    if (options.isInDevelopmentMode) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            })
        );
    }

    return plugins;
}
