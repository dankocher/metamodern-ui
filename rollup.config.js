import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import cleaner from "rollup-plugin-cleaner";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import packageJson from "./package.json";
import postcss from "rollup-plugin-postcss";

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
            targets: ["./dist"],
        }),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
        }),
        postcss({
            extract: false,
            modules: true,
            use: ["sass"],
        }),
    ],
    external: ["react", "react-dom"],
};
