import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import cleaner from "rollup-plugin-cleaner";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import packageJson from "./package.json";
import sass from "rollup-plugin-sass";

export default {
    input: "src/components/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
            strict: false,
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
            strict: false,
        },
    ],
    plugins: [
        cleaner({
            targets: ["./lib"],
        }),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            exclude: ["**/*.stories.tsx", "**/*.test.tsx", "**/*.mdx"],
        }),
        sass({ insert: true }),
        postcss({
            plugins: [autoprefixer()],
            sourceMap: true,
            extract: true,
            minimize: true,
        }),
    ],
    external: ["react", "react-dom"],
};
