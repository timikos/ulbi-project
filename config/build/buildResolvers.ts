import {ResolveOptions} from "webpack";

export function  buildResolvers(): ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'], // Нужен для того, чтобы не указывать расширение у файлов с данными форматами
    }
}
