import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfigurations } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfigurations {
    return {
        port: options.port,
        open: true, // Для автоматического запуска приложения в браузере
        historyApiFallback: true, // Для исправления ошибки при перезагрузки страниц (не в корне)
        hot: true,
    }
}
