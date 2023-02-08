import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function  buildResolvers(options: BuildOptions): ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'], // Нужен для того, чтобы не указывать расширение у файлов с данными форматами
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    }
}
