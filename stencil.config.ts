import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";

export const config: Config = {
  namespace: "bal-ui-library",
  globalStyle: "src/scss/bal-ui-library.scss",
  copy: [
    {
      src: "assets/fonts"
    }
  ],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    { type: "docs-readme" }
  ],
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()]
    })
  ],
  enableCache: true
};
