import { resolve } from "node:path"

import { defineConfig } from "vite"
import browserslistToEsbuild from "browserslist-to-esbuild"

import { getProjectRoot } from "./.github/utils/getProjectRoot.js"
import { setGitHubEnvVar } from "./.github/utils/setGitHubEnvVar.js"

const PATH_TO_SOURCE = `./`
const PATH_TO_DIST = `./dist`

setGitHubEnvVar(`PATH_TO_DIST`, PATH_TO_DIST)

export default defineConfig({
  base: getProjectRoot(),
  build: {
    assetsInlineLimit: 0,
    cssMinify: undefined,
    emptyOutDir: true,
    outDir: PATH_TO_DIST,
    rollupOptions: {
      input: {
        catalog: resolve(__dirname, 'catalog.html'),
        main: resolve(__dirname, 'index.html'),
      },
    },
    target: browserslistToEsbuild(),
  },
  css: {
    transformer: `postcss`,
  },
  root: PATH_TO_SOURCE,
  server: {
    port: 3000,
    open: true,
  },
})
