import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import cleaner from "rollup-plugin-cleaner";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import packageJson from "./package.json";
import svg from "rollup-plugin-svg";
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
    svg(),
    typescript({
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
    }),
    postcss({
      extract: false,
      modules: true,
      use: ["sass"],
    }),
  ],
  onwarn: function (warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if (warning.code === "THIS_IS_UNDEFINED") {
      return;
    }

    // console.warn everything else
    console.warn(warning.message);
  },
  external: ["react", "react-dom"],
};
