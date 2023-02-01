import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] { // Лоадеры для обработки файлов, которые выходят за рамки джса

    const typescriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader', // Лоадер тса
            exclude: /node_modules/, // Папка исключение из обработки
        }

    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // Если в деве, то обычный лоадер, если в проде, то с плагином, который создает css файлы
                {
                    loader: "css-loader", // Название лоадера
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
                        },
                    }
                }, // CSS в commonJS
                "sass-loader", // SCSS в CSS
            ],
        }
    return [
        typescriptLoader, cssLoader
    ]
}
