import { defineConfig } from 'rollup';
import { glob } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/* https://rollupjs.org/configuration-options/#input */
const input = Object.fromEntries(
  glob
    .sync('src/**/*.js')
    .map((file) => [
      path.relative(
        'src',
        file.slice(0, file.length - path.extname(file).length)
      ),
      fileURLToPath(new URL(file, import.meta.url)),
    ])
);

const config = [
  defineConfig({
    input,
    output: {
      format: 'cjs',
      dir: 'dist/cjs',
      entryFileNames: '[name].cjs',
    },
  }),
  defineConfig({
    input,
    output: {
      format: 'esm',
      dir: 'dist/esm',
    },
  }),
];

export default config;
