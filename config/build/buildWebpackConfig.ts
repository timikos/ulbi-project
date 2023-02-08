import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode: mode, // При девелопе код больше, при продакшене минимизируется
        entry: paths.entry, // Откуда все берем
        output: { // Куда делаем бандл
            filename: '[name].[contenthash].js', // Имя бандла - [name] для кеширования
            path: paths.build, // Папка бандла
            clean: true, // Удаление прошлых бандлов
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined, // если режим дев, то добавляем сурс мап
        devServer: isDev ? buildDevServer(options) : undefined, // если режим дев, то запустим дев сервер
    }
}
