import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        hot: true,
        open: true,
        client: {
            overlay: {
                errors: true,
                warnings: true,
            },
            progress: false,
        },
        historyApiFallback: true,
    };
}
